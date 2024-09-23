import { useEffect, useState } from "react";
import "swiper/swiper-bundle.css";
import styles from "../styles/landing-page.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import Link from "next/link";
import { toast } from "react-toastify";
import { useLoading } from "@/context/LoadingContext";
SwiperCore.use([Pagination]);

export default function LandingPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [enterprise, setEnterprise] = useState("");
  const [segmento, setSegmento] = useState("");
  const [carQuantity, setCarQuantity] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [cnpj, setCNPJ] = useState("");
  const { setLoading } = useLoading();
  const isValidPhoneNumber = (phone: string) => {
    const phoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/;
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
  const isValidCNPJ = (cnpj: string) => {
    cnpj = cnpj.replace(/[^\d]+/g, "");

    if (cnpj.length !== 14) return false;

    // Eliminate known invalid CNPJs
    if (/^(\d)\1+$/.test(cnpj)) return false;

    let length = cnpj.length - 2;
    let numbers = cnpj.substring(0, length);
    let digits = cnpj.substring(length);
    let sum = 0;
    let pos = length - 7;

    for (let i = length; i >= 1; i--) {
      sum += +numbers.charAt(length - i) * pos--;
      if (pos < 2) pos = 9;
    }

    let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result !== +digits.charAt(0)) return false;

    length += 1;
    numbers = cnpj.substring(0, length);
    sum = 0;
    pos = length - 7;

    for (let i = length; i >= 1; i--) {
      sum += +numbers.charAt(length - i) * pos--;
      if (pos < 2) pos = 9;
    }

    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    return result === +digits.charAt(1);
  };
  const verificaCamposContato = () => {
    if (
      !nome ||
      !email ||
      !telefone ||
      !mensagem ||
      !enterprise ||
      !segmento ||
      !cnpj ||
      !carQuantity
    ) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return false;
    }
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
    if (!isValidCNPJ(cnpj)) {
      toast.error("Por favor, insira um CNPJ válido.");
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
      mensagem,
      email,
      enterprise,
      segmento, // Make sure this value matches RD Station's options
      cnpj,
      carQuantity,
    };

    try {
      setLoading(true);
      const response = await fetch("/api/SendBackgroundForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataBackground),
      });

      if (response.ok) {
        toast.success("Mensagem enviada com sucesso!");
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
            <img src="/biscoito.png" alt="Logo" onClick={handleLandingPage} />

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
                <strong>(41) 99999-9999</strong>
              </p>
            </div>
            <div className={styles.socialIcons}>
              <h4>Siga-nos em nossas redes sociais</h4>
              <div>
                <a href="#">
                  <img src="/biscoito.png" alt="LinkedIn" />
                </a>
                <a href="#">
                  <img src="/biscoito.png" alt="Facebook" />
                </a>
                <a href="#">
                  <img src="/biscoito.png" alt="Instagram" />
                </a>
                <a href="#">
                  <img src="/biscoito.png" alt="Website" />
                </a>
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
              <input
                type="tel"
                placeholder="Telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
              <input
                type="text"
                placeholder="CNPJ"
                value={cnpj}
                onChange={(e) => setCNPJ(e.target.value)}
              />
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
                    value="De 501 à 1.000"
                    checked={carQuantity === "De 501 à 1.000"}
                    onChange={(e) => setCarQuantity(e.target.value)}
                  />{" "}
                  <p>De 501 à 1.000</p>
                </div>
                <div>
                  <input
                    type="radio"
                    name="placas"
                    value="De 1.001 à 10.000"
                    checked={carQuantity === "De 1.001 à 10.000"}
                    onChange={(e) => setCarQuantity(e.target.value)}
                  />{" "}
                  <p>De 1.001 à 10.000</p>
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
                  placeholder="Digite aqui sua mensagem!"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
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
