import React, { useRef, useState } from "react";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./styles.module.scss";

export default function Faleconosco() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [carQuantity, setCarQuantity] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [segmento, setSegmento] = useState("");
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
      !empresa ||
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

  const handleAttachmentButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    console.log("Selected File:", selectedFile);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!verificaCamposContato()) return;

    const formData = new FormData();
    formData.append("name", nome);
    formData.append("email", email);
    formData.append("company", empresa);
    formData.append("message", mensagem);
    formData.append("phone", telefone);
    formData.append("cnpj", cnpj);
    formData.append("carQuantity", carQuantity);
    formData.append("segmento", segmento);

    try {
      const response = await fetch("/api/SendContactForm", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Mensagem enviado com sucesso", {
          position: "top-right",
          autoClose: 5000,
        });
        console.log("Mensagem enviado com sucesso");
      } else {
        toast.error("Erro ao enviar o Mensagem", {
          position: "top-right",
          autoClose: 5000,
        });
        console.error("Erro ao enviar o Mensagem");
      }
    } catch (error) {
      console.error("Erro ao enviar o Mensagem:", error);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <img
              src="https://d10fqir6n4h7sq.cloudfront.net/public/CONTATO.jpg"
              alt=""
            />
          </div>
          <div className={styles.rightside}>
            <div className={styles.title}>
              <h1>Fale conosco</h1>
            </div>
            <div className={styles.formblock}>
              <form onSubmit={handleSubmit}>
                <div className={styles.flexInputdp}>
                  <div>
                    <p>Seu nome</p>
                    <input
                      placeholder="Nome completo"
                      type="name"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                    />
                  </div>
                  <div>
                    <p>Email</p>
                    <input
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className={styles.flexInput}>
                  <p>Empresa</p>
                  <input
                    placeholder="Nome da empresa"
                    type="text"
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                  />
                </div>
                <div className={styles.flexInputb}>
                  <p>Mensagem</p>
                  <input
                    placeholder="Nos conte mais..."
                    type="text"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                  />
                </div>
                <div className={styles.flexInput}>
                  <p>Segmento</p>
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
                <div className={styles.flexInput}>
                  <p>Telefone</p>
                  <input
                    type="text"
                    placeholder="61 99999-9999"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                  />
                </div>
                <div className={styles.flexInput}>
                  <p>CNPJ</p>
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
                <div className={styles.flexInput}>
                  <p>Quantidade de veículos</p>
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

                <div className={styles.button}>
                  <button type="submit">
                    Enviar{" "}
                    <img
                      src="https://d10fqir6n4h7sq.cloudfront.net/public/ArrowRightw.svg"
                      alt=""
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
