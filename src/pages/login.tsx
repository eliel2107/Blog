import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Login.module.scss";
import axios from "axios";
import { useLoading } from "@/context/LoadingContext";
import { toast } from "react-toastify";

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [csrfToken, setCsrfToken] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [step, setStep] = useState(1);
  const { setLoading } = useLoading();
  useEffect(() => {
    const interval = setInterval(() => {
      const sectionToRemove = document.getElementById(
        "bricks-component-RhBWLcUL9wEqpIyJF77xrw"
      );
      if (sectionToRemove) {
        sectionToRemove.remove();
        clearInterval(interval); // Remove o intervalo assim que o elemento for encontrado e removido
      }
    }, 1); // Verifica a cada 100ms se o elemento está presente no DOM

    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
  }, []);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleImageClick = (index: any) => {
    setSelectedImage(index);
  };

  const buttonGradients = [
    "linear-gradient(45deg, #ff4b2b, #ff416c, #ff4b2b, #ff416c)",
    "linear-gradient(45deg, #11998e, #38ef7d, #11998e, #38ef7d)",
    "linear-gradient(45deg, #f7971e, #ffd200, #f7971e, #ffd200)",
  ];

  useEffect(() => {
    if (selectedImage !== null) {
      document.documentElement.style.setProperty(
        "--button-gradient",
        buttonGradients[selectedImage]
      );
    }
  }, [selectedImage]);
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (selectedImage === 0) {
      await handleDocLogin();
    } else if (selectedImage === 1) {
      await handleDebitosLogin();
    } else if (selectedImage === 2) {
      await handleMultasLogin();
    } else {
      console.log("Other logins not implemented.");
    }
  };
  const handleDocLogin = async () => {
    try {
      if (step === 1) {
        setLoading(true); // Ativar a tela de loading

        const csrfResponse = await axios.get(
          "https://documentacao.lwtecnologia.com.br/api/ms_usuarios/v1/usuario/csrf"
        );
        const csrfToken = csrfResponse.data.tokenCSRF;
        setCsrfToken(csrfToken);
        console.log(csrfToken);

        const loginResponse = await axios.post(
          "https://documentacao.lwtecnologia.com.br/api/ms_usuarios/v1/usuario/login",
          {
            email: email,
            senha: password,
            csrf: csrfToken,
          }
        );
        const idEnvioEmail = loginResponse.data.idEnvioEmail;
        console.log(idEnvioEmail);

        toast.success("Primeiro passo concluído!", {
          position: "top-right",
          autoClose: 5000,
        });

        setLoading(false); // Desativar a tela de loading após o primeiro step
        setStep(2);
      } else if (step === 2) {
        setLoading(true); // Reativar a tela de loading no segundo step

        const finalLoginResponse = await axios.post(
          "https://documentacao.lwtecnologia.com.br/api/ms_usuarios/v1/usuario/login",
          {
            email: email,
            senha: password,
            codigo: authCode,
            csrf: csrfToken,
          }
        );

        const accessToken = finalLoginResponse.data.token;
        console.log("Login successful!", accessToken);
        toast.success("Login realizado com sucesso!", {
          position: "top-right",
          autoClose: 5000,
        });
        window.location.href = `https://documentacao.lwtecnologia.com.br?token=${accessToken}`;
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Erro durante o login.", {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setLoading(false); // Desativar a tela de loading após o segundo step
    }
  };

  const handleDebitosLogin = async () => {
    try {
      if (step === 1) {
        setLoading(true); // Ativar a tela de loading

        const csrfResponse = await axios.get(
          "https://api.sistemamultas.com.br/v2/auth/csrf"
        );
        const csrfToken = csrfResponse.data.tokenCSRF;
        setCsrfToken(csrfToken);
        console.log(csrfToken);

        const loginResponse = await axios.post(
          "https://api.sistemamultas.com.br/v2/auth/plataforma",
          {
            email: email,
            senha: password,
            csrf: csrfToken,
            plataforma: "DEBITOS",
          }
        );
        const idEnvioEmail = loginResponse.data.idEnvioEmail;
        console.log(idEnvioEmail);

        toast.success("Primeiro passo concluído!", {
          position: "top-right",
          autoClose: 5000,
        });

        setLoading(false); // Desativar a tela de loading após o primeiro step
        setStep(2);
      } else if (step === 2) {
        setLoading(true); // Reativar a tela de loading no segundo step

        const finalLoginResponse = await axios.post(
          "https://api.sistemamultas.com.br/v2/auth/plataforma",
          {
            email: email,
            senha: password,
            codigo: authCode,
            csrf: csrfToken,
            plataforma: "DEBITOS",
          }
        );

        const accessToken = finalLoginResponse.data.token;
        console.log("Login successful!", accessToken);
        toast.success("Login realizado com sucesso!", {
          position: "top-right",
          autoClose: 5000,
        });
        window.location.href = `https://debitos.lwtecnologia.com.br?token=${accessToken}`;
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Erro durante o login.", {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setLoading(false); // Desativar a tela de loading após o segundo step
    }
  };
  const handleMultasLogin = async () => {
    try {
      if (step === 1) {
        setLoading(true); // Ativar a tela de loading

        const csrfResponse = await axios.get(
          "https://api.sistemamultas.com.br/v2/auth/csrf"
        );
        const csrfToken = csrfResponse.data.tokenCSRF;
        setCsrfToken(csrfToken);
        console.log(csrfToken);

        const loginResponse = await axios.post(
          "https://api.sistemamultas.com.br/v2/auth",
          {
            login: email,
            senha: password,
            csrf: csrfToken,
          }
        );
        const idEnvioEmail = loginResponse.data.idEnvioEmail;
        console.log(idEnvioEmail);

        toast.success("Primeiro passo concluído!", {
          position: "top-right",
          autoClose: 5000,
        });

        setLoading(false); // Desativar a tela de loading após o primeiro step
        setStep(2);
      } else if (step === 2) {
        setLoading(true); // Reativar a tela de loading no segundo step

        const finalLoginResponse = await axios.post(
          "https://api.sistemamultas.com.br/v2/auth",
          {
            login: email,
            senha: password,
            codigo2FA: authCode,
            csrf: csrfToken,
          }
        );
        console.log(finalLoginResponse.data);
        const accessToken = finalLoginResponse.data.token;
        const urlValidar = finalLoginResponse.data.urlValidar;
        console.log(urlValidar);
        console.log("Login successful!", accessToken);
        toast.success("Login realizado com sucesso!", {
          position: "top-right",
          autoClose: 5000,
        });
        window.location.href = `${urlValidar}`;
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Erro durante o login.", {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setLoading(false); // Desativar a tela de loading após o segundo step
    }
  };

  return (
    <>
      <section className={styles.container}>
        <div className={styles.leftside}>
          <div className={styles.logo}>
            <Link href={"/"}>
              <img
                src="https://d10fqir6n4h7sq.cloudfront.net/public/LOGOPRINCIPAL.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div className={styles.socials}>
            <Link
              href="https://www.facebook.com/lwtecnologia?mibextid=ZbWKwL"
              passHref
            >
              <img
                src="https://d10fqir6n4h7sq.cloudfront.net/public/fbicon.svg"
                alt="Facebook"
              />
            </Link>
            <Link
              href="https://www.instagram.com/grupolw_gestaodefrotas/"
              passHref
            >
              <img
                src="https://d10fqir6n4h7sq.cloudfront.net/public/igicon.svg"
                alt="Instagram"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/lwtecnologia/"
              passHref
            >
              <img src="/linkedin.svg" alt="Instagram" />
            </Link>
          </div>{" "}
        </div>
        <div className={styles.rightside}>
          <div className={styles.title}>
            <div className={styles.top}>
              {["/doc.svg", "/debitos.svg", "/multas.svg"].map((src, index) => (
                <div
                  key={index}
                  onClick={() => handleImageClick(index)}
                  style={{ position: "relative", cursor: "pointer" }}
                >
                  <img src={src} />
                  {selectedImage === index && (
                    <hr
                      style={{
                        backgroundColor: ["#900", "#093", "#FC0"][index],
                        height: "3px",
                        borderRadius: "20px",
                        border: "none",
                        position: "absolute",
                        bottom: "-5px",
                        left: "0",
                        right: "0",
                        margin: "0 auto",
                        width: "100%",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className={styles.body}>
              <div className={styles.logoR}>
                <img
                  src="https://d10fqir6n4h7sq.cloudfront.net/public/LWLOGOB.png"
                  alt=""
                />
              </div>
              <h1>Login</h1>
              <p>Informe seu acesso para entrar</p>
              <div className={styles.formblock}>
                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <>
                      <div className={styles.flexInput}>
                        <p>Email</p>
                        <input
                          placeholder="Email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className={styles.flexInput}>
                        <p>Senha</p>
                        <input
                          placeholder="Senha"
                          type={passwordVisible ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </>
                  )}
                  {step === 2 && (
                    <>
                      <div className={styles.flexInput}>
                        <p>Código de Autenticação</p>
                        <input
                          placeholder="Código de Autenticação"
                          type="text"
                          value={authCode}
                          onChange={(e) => setAuthCode(e.target.value)}
                        />
                      </div>
                    </>
                  )}

                  <div className={styles.button}>
                    <button type="submit">Entrar</button>
                  </div>
                  <div className={styles.divisor}></div>
                  <div className={styles.forgot}>
                    <Link href={"/"}>
                      <p>Voltar para home!</p>
                    </Link>
                  </div>
                  {/* <div className={styles.create}>
                    <p>Ainda não tem uma conta?</p>
                    <Link href={"/cadastro"}>
                      <h4>Criar conta</h4>
                    </Link>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
