import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Login.module.scss";
import axios from "axios";

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [csrfToken, setCsrfToken] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [step, setStep] = useState(1);

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

        setStep(2);
      } else if (step === 2) {
        const finalLoginResponse = await axios.post(
          "https://documentacao.lwtecnologia.com.br/api/ms_usuarios/v1/usuario/login",
          {
            email: email,
            senha: password,
            codigo: authCode,
            csrf: csrfToken,
          }
        );

        const accessToken = finalLoginResponse.data.access_token;
        console.log("Login successful!", accessToken);
        window.location.href = `https://documentacao.lwtecnologia.com.br?token=${accessToken}`;
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleDebitosLogin = async () => {
    try {
      if (step === 1) {
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

        setStep(2);
      } else if (step === 2) {
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
        window.location.href = `https://debitos.lwtecnologia.com.br?token=${accessToken}`;
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleMultasLogin = async () => {
    try {
      if (step === 1) {
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

        setStep(2);
      } else if (step === 2) {
        const finalLoginResponse = await axios.post(
          "https://api.sistemamultas.com.br/v2/auth",
          {
            login: email,
            senha: password,
            codigo2FA: authCode,
            csrf: csrfToken,
          }
        );

        const accessToken = finalLoginResponse.data.token;
        const urlValidar = finalLoginResponse.data.urlValidar;
        console.log(urlValidar);
        console.log("Login successful!", accessToken);
        window.location.href = urlValidar;
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <section className={styles.container}>
        <div className={styles.leftside}>
          <div className={styles.logo}>
            <img
              src="https://d10fqir6n4h7sq.cloudfront.net/public/LOGOLW.svg"
              alt=""
            />
          </div>
          <div className={styles.socials}>
            <img
              src="https://d10fqir6n4h7sq.cloudfront.net/public/fbicon.svg"
              alt=""
            />
            <img
              src="https://d10fqir6n4h7sq.cloudfront.net/public/igicon.svg"
              alt=""
            />
            <img
              src="https://d10fqir6n4h7sq.cloudfront.net/public/tticon.svg"
              alt=""
            />
          </div>
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
                  <div className={styles.forgot}>
                    <Link href={"/recuperar"}>
                      <p>Esqueci minha senha</p>
                    </Link>
                  </div>
                  <div className={styles.button}>
                    <button type="submit">Entrar</button>
                  </div>
                  <div className={styles.divisor}></div>
                  <div className={styles.create}>
                    <p>Ainda não tem uma conta?</p>
                    <Link href={"/cadastro"}>
                      <h4>Criar conta</h4>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
