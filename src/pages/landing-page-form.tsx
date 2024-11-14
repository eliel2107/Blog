declare let gtag: (...args: any[]) => void;
import { useEffect, useState } from "react";
import "swiper/swiper-bundle.css";
import styles from "../styles/landing-page.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import Link from "next/link";
import { toast } from "react-toastify";
import { useLoading } from "@/context/LoadingContext";
import InputMask from "react-input-mask";
SwiperCore.use([Pagination]);

export default function LandingPage() {
  useEffect(() => {
    generateCaptcha();
    if (typeof window !== "undefined" && typeof gtag === "function") {
      gtag("event", "conversion", {
        send_to: "AW-16519096883/XN6aCMnFpOoZELPU9cQ9",
        value: 1.0,
        currency: "BRL",
      });
    }
  }, []);
  const [captchaNum1, setCaptchaNum1] = useState(0);
  const [captchaNum2, setCaptchaNum2] = useState(0);
  const [captchaInput, setCaptchaInput] = useState("");
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaNum1(num1);
    setCaptchaNum2(num2);
  };
  const isValidCaptcha = () => {
    const correctAnswer = captchaNum1 + captchaNum2;
    return parseInt(captchaInput) === correctAnswer;
  };
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [enterprise, setEnterprise] = useState("");
  const [segmento, setSegmento] = useState("");
  const [carQuantity, setCarQuantity] = useState("");

  const { setLoading } = useLoading();
  const isValidPhoneNumber = (phone: string) => {
    // Regex que valida números de telefone brasileiros e impede dígitos consecutivos repetidos como (14) 99999-9999
    const phoneRegex =
      /^(?:(?:\+?55)?\s?)?(?:\(?[1-9]{2}\)?\s?)?(?!(\d)\1{4})(?:9[1-9]\d{3}|[2-8]\d{3})-?\d{4}$/;
    return phoneRegex.test(phone);
  };

  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        const sectionToRemove1 = document.getElementById(
          "bricks-component-RhBWLcUL9wEqpIyJF77xrw"
        );
        const sectionToRemove2 = document.getElementById(
          "rd-floating_button-l9ohyb60"
        );

        if (sectionToRemove1) {
          sectionToRemove1.remove();
          console.log("bricks-component-RhBWLcUL9wEqpIyJF77xrw removed");
        }

        if (sectionToRemove2) {
          sectionToRemove2.remove();
          console.log("rd-floating_button-l9ohyb60 removed");
        }

        // After removing the elements, adjust the header's top position
        if (!sectionToRemove1 && !sectionToRemove2) {
          const headerContainer = document.querySelector(
            `.${styles.header}`
          ) as HTMLElement;

          if (headerContainer) {
            headerContainer.style.top = "0px";
            console.log("Header top set to 0px.");
          }
        }
      });
    });

    // Start observing the body for DOM changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect(); // Stop observing when the component unmounts
    };
  }, []);

  const isValidEmailFormat = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isCorporateEmail = (email: string) => {
    const publicDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
      "live.com",
      "aol.com",
      "icloud.com",
    ];

    const domain = email.split("@")[1];
    return !publicDomains.includes(domain);
  };

  const verificaCamposContato = () => {
    if (
      !nome ||
      !email ||
      !telefone ||
      !enterprise ||
      !segmento ||
      !carQuantity
    ) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return false;
    }
    console.log(telefone);
    if (!isValidPhoneNumber(telefone)) {
      toast.error("Por favor, insira um número de telefone válido.");
      return false;
    }
    if (!isValidEmailFormat(email)) {
      toast.error("Por favor, insira um email válido.");
      return false;
    }
    if (!isCorporateEmail(email)) {
      toast.error("Por favor, insira um email corporativo.");
      return false;
    }

    if (!isValidCaptcha()) {
      toast.error("Captcha incorreto. Tente novamente.");
      generateCaptcha(); // Regenerate captcha
      return false;
    }
    return true;
  };

  const handleSubmitBackground = async (event: any) => {
    event.preventDefault();
    if (!verificaCamposContato()) return;

    const formDataBackground = {
      nome,
      telefone,

      email,
      enterprise,
      segmento,

      carQuantity,
    };

    try {
      setLoading(true);
      const response = await fetch("/api/SendBackgroundFormLp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataBackground),
      });

      if (response.ok) {
        if (typeof window !== "undefined" && typeof gtag === "function") {
          gtag("event", "conversion", {
            send_to: "AW-16519096883/EjwuCNKepOoZELPU9cQ9",
            value: 1.0,
            currency: "BRL",
          });
        }
        toast.success(
          "Obrigado por se conectar conosco! Recebemos suas informações e nossa equipe fará contato o mais rápido possível."
        );
        setNome("");
        setEmail("");
        setTelefone("");
        setEnterprise("");
        setSegmento("");
        setCarQuantity("");
        setCaptchaInput("");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
        generateCaptcha();
      } else {
        const errorData = await response.json();
        toast.error(
          `Erro ao enviar a mensagem: ${errorData.errors[0].error_message}`
        );
      }
    } catch (error) {
      toast.error("Erro ao enviar a mensagem.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const handleLandingPage = () => {
    window.location.href = "/landing-page";
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check if window width is less than or equal to 768px
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener on mount
    window.addEventListener("resize", handleResize);

    // Check the initial width on mount
    handleResize();

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <img src="/grupo.png" alt="Logo" onClick={handleLandingPage} />

            <button>Experimente Grátis</button>
          </div>
        </div>

        <div className={styles.mainSection}>
          <div className={styles.leftSection}>
            <Link href={"/landing-page"}>
              <div className={styles.backButton}>
                <strong>
                  <span>{"<"}</span>
                </strong>
                <p>{"Voltar"}</p>
              </div>
            </Link>
            <h1>
              {isMobile
                ? "Preencha as informações abaixo para solicitar um teste grátis ou falar com um de nossos especialistas"
                : "Preencha as informações ao lado para solicitar um teste grátis ou falar com um de nossos especialistas"}
            </h1>

            <div className={styles.descriptionBox}>
              <p>
                Horário de atendimento: <br />
                <strong>Seg. a Sex. - 08:00 às 18:00</strong>
              </p>
              <p>
                Telefone: <br />
                <strong>(41) 99125-8315</strong>
              </p>
            </div>
            <div className={styles.socialIcons}>
              <h4>Siga-nos em nossas redes sociais</h4>
              <div>
                <Link
                  href="https://www.linkedin.com/company/lwtecnologia/"
                  passHref
                >
                  <img src="/lkdblue.svg" alt="LinkedIn" />
                </Link>
                <Link
                  href="https://www.facebook.com/lwtecnologia?mibextid=ZbWKwL"
                  passHref
                >
                  <img src="/fbblue.svg" alt="Facebook" />
                </Link>
                <Link
                  href="https://www.instagram.com/grupolw_gestaodefrotas/"
                  passHref
                >
                  <img src="/igblue.svg" alt="Instagram" />
                </Link>
                <Link href="/" passHref>
                  <img src="/linkblue.svg" alt="Link" />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.rightSection}>
            <form
              className={styles.contactForm}
              onSubmit={handleSubmitBackground}
            >
              <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <input
                type="email"
                placeholder="E-mail de contato"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className={styles.phoneInputContainer}>
                <InputMask
                  mask="(99) 99999-9999"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                >
                  {
                    // @ts-ignore: Ignore TypeScript check for this case
                    (inputProps) => (
                      <input
                        {...inputProps}
                        type="tel"
                        placeholder="Telefone"
                      />
                    )
                  }
                </InputMask>
              </div>

              <input
                type="text"
                placeholder="Empresa"
                value={enterprise}
                onChange={(e) => setEnterprise(e.target.value)}
              />
              <select
                value={segmento}
                onChange={(e) => setSegmento(e.target.value)}
              >
                <option value="">Selecione o Segmento</option>
                <option value="Concessionária">Concessionária</option>
                <option value="Frota Própria">Frota Própria</option>
                <option value="Locadora">Locadora</option>
                <option value="Transportadora">Transportadora</option>
                <option value="Outros">Outros</option>
              </select>

              <div className={styles.radioGroup}>
                <label>Quantidade de placas</label>
                <div>
                  <input
                    type="radio"
                    name="placas"
                    value="Até 500"
                    checked={carQuantity === "Até 500"}
                    onChange={(e) => setCarQuantity(e.target.value)}
                  />{" "}
                  <p>Até 500</p>
                </div>
                <div>
                  <input
                    type="radio"
                    name="placas"
                    value="De 501 até 1.000"
                    checked={carQuantity === "De 501 até 1.000"}
                    onChange={(e) => setCarQuantity(e.target.value)}
                  />{" "}
                  <p>De 501 até 1.000</p>
                </div>
                <div>
                  <input
                    type="radio"
                    name="placas"
                    value="De 1.001 até 10.000"
                    checked={carQuantity === "De 1.001 até 10.000"}
                    onChange={(e) => setCarQuantity(e.target.value)}
                  />{" "}
                  <p>De 1.001 até 10.000</p>
                </div>
                <div>
                  <input
                    type="radio"
                    name="placas"
                    value="Acima de 10.000"
                    checked={carQuantity === "Acima de 10.000"}
                    onChange={(e) => setCarQuantity(e.target.value)}
                  />{" "}
                  <p>Acima de 10.000</p>
                </div>
              </div>

              <div className={styles.captcha}>
                <input
                  type="text"
                  placeholder={`${captchaNum1} + ${captchaNum2}`}
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                />
              </div>

              <button type="submit">Enviar mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
