import { useState } from 'react';
import styles from './styles.module.scss';

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
              <h1>TIPOS DE INFRAÇÕES FORNECIDAS</h1>
            </div>
            <div className={styles.middlecontent}>
              <div className={styles.lefttop}>
                <div className={styles.image}>
                  <img src="KGIcon.svg" alt="" />
                </div>
                <div className={styles.text}>
                  <h2>EXCESSO DE PESO</h2>
                  <p>
                    Infração aplicada quando um veículo de transporte de carga
                    ultrapassa os limites de peso permitidos por lei.
                  </p>
                </div>
              </div>
              <div className={styles.righttop}>
                <div className={styles.image}>
                  <img src="CNHIcon.svg" alt="" />
                </div>
                <div className={styles.text}>
                  <h2>
                    REGISTRO NACIONAL DE TRANSPORTADORES RODOVIÁRIOS DE CARGAS
                    (RNTRC)
                  </h2>
                  <p>
                    Infração aplicada quando uma empresa de transporte de cargas
                    não está devidamente registrada.
                  </p>
                </div>
              </div>
              <div className={styles.leftbottom}>
                <div className={styles.image}>
                  <img src="PedagioIcon.svg" alt="" />
                </div>
                <div className={styles.text}>
                  <h2>VALE PEDÁGIO</h2>
                  <p>
                    Infração aplicada quando um veículo de transporte rodoviário
                    de cargas não utiliza corretamente o vale-pedágio
                    obrigatório.
                  </p>
                </div>
              </div>
              <div className={styles.rightbottom}>
                <div className={styles.image}>
                  <img src="MoneyIcon.svg" alt="" />
                </div>
                <div className={styles.text}>
                  <h2>PAGAMENTO ELETRÔNICO DE FRETE (PEF)</h2>
                  <p>
                    Infração aplicada quando não há o cumprimento de
                    regulamentações ou procedimentos de pagamento eletrônico de
                    frete.
                  </p>
                </div>
              </div>
            </div>
            {isAccordionOpen && (
              <>
                <div className={styles.bottomcontent}>
                  <div className={styles.image}>
                    <img src="DangerIcon.svg" alt="" />
                  </div>
                  <div className={styles.text}>
                    <h2>TRANSPORTE RODOVIÁRIO DE PRODUTOS PERIGOSOS (TRPP)</h2>
                    <p>
                      Infração aplicada quando há violações nas regulamentações
                      relacionadas ao transporte de substâncias perigosas.
                    </p>
                  </div>
                </div>
              </>
            )}
            {!isAccordionOpen && (
              <div className={styles.button}>
                <button
                  className={`${styles.button} ${
                    isAccordionOpen ? styles.open : ''
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
