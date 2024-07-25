import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Login.module.scss";

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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
                <form>
                  <div className={styles.flexInput}>
                    <p>Email</p>
                    <input placeholder="Email" type="email" />
                  </div>
                  <div className={styles.flexInput}>
                    <p>Senha</p>
                    <input
                      placeholder="Senha"
                      type={passwordVisible ? "text" : "password"}
                    />
                  </div>
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
