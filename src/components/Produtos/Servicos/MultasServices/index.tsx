import { useState } from "react";
import styles from "./styles.module.scss";

export default function AssistServices() {
  const Accordion = () => {
    const [isAccordionOpen, setAccordionOpen] = useState(false);

    const toggleAccordion = () => {
      setAccordionOpen(!isAccordionOpen);
    };
    return (
      <>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.title}>
              <h1>SERVIÇOS</h1>
            </div>
            <div className={styles.middlecontent}>
              <div className={styles.lefttop}>
                <div className={styles.image}>
                  <img
                    src="https://d10fqir6n4h7sq.cloudfront.net/public/CNHIcon.svg"
                    alt=""
                  />
                </div>
                <div className={styles.text}>
                  <h2>CONSULTA DE INFRAÇÕES</h2>
                  <p>
                    Infrações disponíveis para consulta, conforme região
                    homologada
                  </p>
                </div>
              </div>
              <div className={styles.righttop}>
                <div className={styles.image}>
                  <img
                    src="https://d10fqir6n4h7sq.cloudfront.net/public/EmailIcon.svg"
                    alt=""
                  />
                </div>
                <div className={styles.text}>
                  <h2>AVISO DE E-MAIL</h2>
                  <p>
                    Recebimento de e-mail referente a nova infração, validação
                    ou rejeição da indicação do condutor.
                  </p>
                </div>
              </div>
              <div className={styles.leftbottom}>
                <div className={styles.image}>
                  <img
                    src="https://d10fqir6n4h7sq.cloudfront.net/public/PranchetaIcon.svg"
                    alt=""
                  />
                </div>
                <div className={styles.text}>
                  <h2>GESTÃO DE INDICAÇÃO</h2>
                  <p>
                    Validação da indicação realizada pelo condutor pelo LW
                    Multas.
                  </p>
                </div>
              </div>
              <div className={styles.rightbottom}>
                <div className={styles.image}>
                  <img
                    src="https://d10fqir6n4h7sq.cloudfront.net/public/MoneyIcon.svg"
                    alt=""
                  />
                </div>
                <div className={styles.text}>
                  <h2>GESTÃO DE PAGAMENTOS</h2>
                  <p>
                    Realização de pagamentos de infrações dos veículos de forma
                    automatizada pelo LW Multas.
                  </p>
                </div>
              </div>
            </div>
            {isAccordionOpen && (
              <>
                <div className={styles.middlecontent}>
                  <div className={styles.lefttop}>
                    <div className={styles.image}>
                      <img
                        src="https://d10fqir6n4h7sq.cloudfront.net/public/CNHIcon.svg"
                        alt=""
                      />
                    </div>
                    <div className={styles.text}>
                      <h2>CONSULTA AO ORGÃO ANTT</h2>
                      <p>
                        Capturamos e organizamos as infrações da ANTT em uma
                        única plataforma de fácil acesso.
                      </p>
                    </div>
                  </div>
                  <div className={styles.righttop}>
                    <div className={styles.image}>
                      <img
                        src="https://d10fqir6n4h7sq.cloudfront.net/public/DocIcon.svg"
                        alt=""
                      />
                    </div>
                    <div className={styles.text}>
                      <h2>LINK DE INDICAÇÃO</h2>
                      <p>
                        Recebimento de link para indicação no e-mail do
                        condutor.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
            {!isAccordionOpen && (
              <div className={styles.button}>
                <button
                  className={`${styles.button} ${
                    isAccordionOpen ? styles.open : ""
                  }`}
                  onClick={toggleAccordion}
                >
                  Ver todos
                </button>
              </div>
            )}
          </div>
        </div>
      </>
    );
  };
  return <Accordion />;
}
