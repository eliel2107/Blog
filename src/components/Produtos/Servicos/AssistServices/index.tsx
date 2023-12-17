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
              <h1>SERVIÇOS</h1>
            </div>
            <div className={styles.middlecontent}>
              <div className={styles.lefttop}>
                <div className={styles.image}>
                  <img src="SecurityCar.svg" alt="" />
                </div>
                <div className={styles.text}>
                  <h2>RECUPERAÇÃO DE VEÍCULOS E ATIVOS</h2>
                  <p>
                    Atuamos em situação de roubo e furto de veículos leves,
                    pesados e cargas que possuem ou não dispositivo de
                    rastreamento. Somos representantes dos nossos clientes,
                    responsáveis por entender toda situação e detalhar a central
                    solicitante
                  </p>
                </div>
              </div>
              <div className={styles.righttop}>
                <div className={styles.image}>
                  <img src="RadarIcon.svg" alt="" />
                </div>
                <div className={styles.text}>
                  <h2>ANTENISTAS (T-HUNTER´S RF)</h2>
                  <p>
                    Possuímos agentes específicos munidos de antenas de captação
                    de sinal que fazem o trabalho de busca e recuperação de
                    veículos ou cargas que possuem equipamento de rastreamento
                    com tecnologia RF 433Mhz ou 900Mhz.
                  </p>
                </div>
              </div>
              <div className={styles.leftbottom}>
                <div className={styles.image}>
                  <img src="CarGlow.svg" alt="" />
                </div>
                <div className={styles.text}>
                  <h2>ATENDIMENTO A APROPRIAÇÃO INDÉBITA</h2>
                  <p>
                    Nossos agentes são acionados e munidos de todas as
                    informações e devidamente instruídos, buscando um acordo
                    amigável com a devolução do bem ou pagamentos dos valores
                    devidos.
                  </p>
                </div>
              </div>
              <div className={styles.rightbottom}>
                <div className={styles.image}>
                  <img src="HeadsetIcon.svg" alt="" />
                </div>
                <div className={styles.text}>
                  <h2>CENRAL DE EMERGÊNCIA 24H E AS A SERVICE</h2>
                  <p>
                    Realizamos os atendimentos telefônicos direcionados a
                    Central de Atendimento, dando todo suporte e atenção
                    necessária, com atendimento personalizado e de excelência
                  </p>
                </div>
              </div>
            </div>
            {isAccordionOpen && (
              <>
                <div className={styles.middlecontent}>
                  <div className={styles.lefttop}>
                    <div className={styles.image}>
                      <img src="TruckSecurity.svg" alt="" />
                    </div>
                    <div className={styles.text}>
                      <h2>ACOMPANHAMENTO VELADO</h2>
                      <p>
                        Realizamos o acompanhamento a paisano do trajeto de
                        veículos que estão realizando o transporte de cargas de
                        alto valor agregado, da sua origem ao seu destino.
                      </p>
                    </div>
                  </div>
                  <div className={styles.righttop}>
                    <div className={styles.image}>
                      <img src="PersonDocument.svg" alt="" />
                    </div>
                    <div className={styles.text}>
                      <h2>OITIVAS</h2>
                      <p>
                        Realizamos o acompanhamento junto aos envolvidos em
                        situações onde haja a necessidade de uma explicação e
                        detalhamento do ocorrido.
                      </p>
                    </div>
                  </div>
                  <div className={styles.leftbottom}>
                    <div className={styles.image}>
                      <img src="ToolsIcon.svg" alt="" />
                    </div>
                    <div className={styles.text}>
                      <h2>PRESERVAÇÃO</h2>
                      <p>
                        Realizamos o acompanhamento de situação específica onde
                        haja a necessidade de uma equipe tática especializada,
                        por exemplo: manutenção, tombamento de carga, etc.
                      </p>
                    </div>
                  </div>
                  <div className={styles.rightbottom}>
                    <div className={styles.image}>
                      <img src="LupaIcon.svg" alt="" />
                    </div>
                    <div className={styles.text}>
                      <h2>SINDICÂNCIAS</h2>
                      <p>
                        Auxiliamos a reconstituição de situações onde haja a
                        necessidade de uma apuração mais detalhada do evento,
                        buscando fatos e dados.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.bottomcontent}>
                  <div className={styles.image}>
                    <img src="PranchetaIcon.svg" alt="" />
                  </div>
                  <div className={styles.text}>
                    <h2>LIBERAÇÃO LEGAL EM PÁTIOS</h2>
                    <p>
                      Realizamos a liberação de veículos apreendidos por
                      qualquer motivo, desde que o cliente nos forneça uma
                      procuração nomeando nosso agente para o trabalho.
                    </p>
                  </div>
                </div>
              </>
            )}
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
          </div>
        </div>
      </>
    );
  };
  return <Accordion />;
}
