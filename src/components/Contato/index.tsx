import Link from "next/link";
import { useState } from "react";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import styles from "./styles.module.scss";
import { useLoading } from "@/context/LoadingContext";

export default function Contato() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [enterprise, setEnterprise] = useState("");
  const [carQuantity, setCarQuantity] = useState("");
  const { setLoading } = useLoading();
  const [segmento, setSegmento] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [emailInscricao, setEmailInscricao] = useState("");

  const isValidPhoneNumber = (phone: string) => {
    const phoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/;
    return phoneRegex.test(phone);
  };

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
      toast.error("Por favor, preencha todos os campos obrigatórios.", {
        position: "top-right",
        autoClose: 5000,
      });
      return false;
    }

    if (telefone && !isValidPhoneNumber(telefone)) {
      toast.error("Por favor, insira um número de telefone válido.", {
        position: "top-right",
        autoClose: 5000,
      });
      return false;
    }
    if (!isValidEmailFormat(email)) {
      toast.error("Por favor, insira um email válido.", {
        position: "top-right",
        autoClose: 5000,
      });
      return false;
    }
    if (!isCorporateEmail(email)) {
      toast.error("Por favor, insira um email corporativo.", {
        position: "top-right",
        autoClose: 5000,
      });
      return false;
    }
    if (!isValidCNPJ(cnpj)) {
      toast.error("Por favor, insira um CNPJ válido.", {
        position: "top-right",
        autoClose: 5000,
      });
      return false;
    }

    return true;
  };

  const handleSubmitBackground = async (event: {
    preventDefault: () => void;
  }) => {
    event.preventDefault();
    if (!verificaCamposContato()) return;

    const formDataBackground = {
      nome,
      telefone,
      mensagem,
      email,
      enterprise,
      segmento,
      cnpj,
      carQuantity,
    };

    try {
      setLoading(true); // Ativar a tela de loading

      const response = await fetch("/api/SendBackgroundForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataBackground),
      });

      if (response.ok) {
        toast.success("Mensagem enviada com sucesso!", {
          position: "top-right",
          autoClose: 5000,
        });
        if (window.dataLayer) {
          window.dataLayer.push({
            event: "formSubmission",
            formData: formDataBackground,
          });
        }
        console.log("Mensagem enviada com sucesso");
      } else {
        toast.error("Erro ao enviar a mensagem.", {
          position: "top-right",
          autoClose: 5000,
        });
        console.error("Erro ao enviar a mensagem");
      }
    } catch (error) {
      toast.error("Erro ao enviar a mensagem.", {
        position: "top-right",
        autoClose: 5000,
      });
      console.error("Erro ao enviar a mensagem:", error);
    } finally {
      setLoading(false); // Desativar a tela de loading
    }
  };

  const verificaEmailInscricao = () => {
    if (!emailInscricao) {
      toast.error("Por favor, insira seu email para inscrição.", {
        position: "top-right",
        autoClose: 5000,
      });
      return false;
    }
    return true;
  };

  const handleSubmitInscricao = async (event: {
    preventDefault: () => void;
  }) => {
    event.preventDefault();
    if (!verificaEmailInscricao()) return;

    const formDataInscricao = {
      email: emailInscricao,
    };

    try {
      setLoading(true);
      const response = await fetch("/api/SendInscricao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataInscricao),
      });

      if (response.ok) {
        toast.success("Inscrição realizada com sucesso!", {
          position: "top-right",
          autoClose: 5000,
        });
        console.log("Inscrição realizada com sucesso");
      } else {
        toast.error("Erro ao realizar a inscrição.", {
          position: "top-right",
          autoClose: 5000,
        });
        console.error("Erro ao realizar a inscrição");
      }
    } catch (error) {
      console.error("Erro ao realizar a inscrição:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <div className={styles.textcontent}>
              <div className={styles.title}>
                <h1>CONTATO</h1>
                <p>
                  Fale com a gente! Um especialista LW está sempre à disposição.
                </p>
              </div>
              <div className={styles.icon}>
                <div className={styles.addres}>
                  <div className={styles.map}>
                    <img
                      src="https://d10fqir6n4h7sq.cloudfront.net/public/map.svg"
                      alt=""
                    />
                  </div>{" "}
                  <div className={styles.location}>
                    <Link href={"https://maps.app.goo.gl/kUJqwdEun6XpRDg86"}>
                      <h1>Endereço</h1>{" "}
                      <p>
                        R. XV de Novembro, 621 2º andar Centro, Curitiba PR,
                        80020-310
                      </p>
                    </Link>
                  </div>
                </div>
                <div className={styles.email}>
                  <div className={styles.lettter}>
                    <img
                      src="https://d10fqir6n4h7sq.cloudfront.net/public/letter.svg"
                      alt=""
                    />
                  </div>
                  <div className={styles.contatos}>
                    <h1>Nossos contatos</h1>
                    <Link href="mailto:comercial@lwtecnologia.com.br">
                      <p>comercial@lwtecnologia.com.br</p>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightside}>
            <div className={styles.backgroundContainer}>
              <div className={styles.background}>
                <div className={styles.title}>
                  <h2>Entre em contato conosco</h2>
                </div>
                <div className={styles.name}>
                  <h3>Nome completo</h3>
                  <input
                    type="text"
                    placeholder="Escreva aqui seu nome..."
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
                <div className={styles.contactemail}>
                  <h3>Email*</h3>
                  <input
                    type="text"
                    placeholder="exemplo@mail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.phone}>
                  <h3>Telefone*</h3>
                  <input
                    type="text"
                    placeholder="61 99999-9999"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                  />
                </div>
                <div className={styles.phone}>
                  <h3>CNPJ</h3>
                  <InputMask
                    mask="99.999.999/9999-99"
                    value={cnpj}
                    onChange={(e) => setCnpj(e.target.value)}
                  >
                    {
                      ((inputProps: any) => (
                        <input
                          {...inputProps}
                          type="text"
                          placeholder="Insira o CNPJ da empresa"
                        />
                      )) as unknown as React.ReactNode
                    }
                  </InputMask>
                </div>
                <div className={styles.phone}>
                  <h3>Empresa</h3>
                  <input
                    type="text"
                    placeholder="nome da sua empresa"
                    value={enterprise}
                    onChange={(e) => setEnterprise(e.target.value)}
                  />
                </div>
                <div className={styles.phone}>
                  <h3>Segmento</h3>
                  <select
                    value={segmento}
                    onChange={(e) => setSegmento(e.target.value)}
                  >
                    <option value="">Selecione</option>
                    <option value="Concessionária">Concessionária</option>
                    <option value="Frota Própria">Frota Própria</option>
                    <option value="Locadora">Locadora</option>
                    <option value="Transportadora">Transportadora</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
                <div className={styles.phone}>
                  <h3>Quantidade de veículos</h3>
                  <select
                    value={carQuantity}
                    onChange={(e) => setCarQuantity(e.target.value)}
                  >
                    <option value="">Selecione</option>
                    <option value="Até 500">Até 500</option>
                    <option value="De 501 à 1.000">De 501 à 1.000</option>
                    <option value="De 1.001 à 10.000">De 1.001 à 10.000</option>
                    <option value="Acima de 10.000">Acima de 10.000</option>
                  </select>
                </div>

                <div className={styles.message}>
                  <h3>Mensagem*</h3>{" "}
                  <input
                    type="text"
                    placeholder="Nos conte um pouco sobre sua demanda..."
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                  />
                </div>
                <div className={styles.send}>
                  <button onClick={handleSubmitBackground}>Enviar</button>
                </div>
              </div>
              <div className={styles.newBackground}></div>
            </div>
            <div className={styles.iconresponsive}>
              <div className={styles.addres}>
                <div className={styles.map}>
                  <img
                    src="https://d10fqir6n4h7sq.cloudfront.net/public/map.svg"
                    alt=""
                  />
                </div>{" "}
                <div className={styles.location}>
                  <Link href={"https://maps.app.goo.gl/kUJqwdEun6XpRDg86"}>
                    <h1>Endereço</h1>{" "}
                    <p>
                      R. XV de Novembro, 621 2º andar Centro, Curitiba PR,
                      80020-310
                    </p>
                  </Link>
                </div>
              </div>
              <div className={styles.email}>
                <div className={styles.lettter}>
                  <img
                    src="https://d10fqir6n4h7sq.cloudfront.net/public/letter.svg"
                    alt=""
                  />
                </div>
                <div className={styles.contatos}>
                  <h1>Nossos contatos</h1>
                  <Link href="mailto:comercial@lwtecnologia.com.br">
                    <p>comercial@lwtecnologia.com.br</p>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomcontent}>
          <div className={styles.leftside}>
            <h1>FIQUE POR DENTRO DAS NOVIDADES</h1>
          </div>
          <div className={styles.rightsidebottom}>
            <form onSubmit={handleSubmitInscricao}>
              <div className={styles.inputcontainer}>
                <input
                  type="text"
                  placeholder="Digite seu email aqui"
                  value={emailInscricao}
                  onChange={(e) => setEmailInscricao(e.target.value)}
                />
                <button type="submit">Inscrever</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
