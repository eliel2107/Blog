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
                  <img src="CNHIcon.svg" alt="" />
                </div>
                <div className={styles.text}>
                  <h2>2ª VIA DE CRV</h2>
                  <p>
                    Solicite a 2ª via do documento, em casos de dano, perda,
                    roubo ou furto do CRV Original.
                  </p>
                </div>
              </div>
              <div className={styles.righttop}>
                <div className={styles.image}>
                  <img src="LicencimentoIcon.svg" alt="" />
                </div>
                <div className={styles.text}>
                  <h2>LICENCIMENTO DIGITAL</h2>
                  <p>
                    Emita o seu Certificado de Registro e Licenciamento do
                    Veículo Eletrônico (CRLV-e)
                  </p>
                </div>
              </div>
              <div className={styles.leftbottom}>
                <div className={styles.image}>
                  <img src="DocIcon.svg" alt="" />
                </div>
                <div className={styles.text}>
                  <h2>EMPLACAMENTO</h2>
                  <p>
                    Registre seu veículo 0Km no Detran e realize o primeiro
                    emplacamento.
                  </p>
                </div>
              </div>
              <div className={styles.rightbottom}>
                <div className={styles.image}>
                  <img src="VolanteIcon.svg" alt="" />
                </div>
                <div className={styles.text}>
                  <h2>ALTERAÇÃO DE DADOS</h2>
                  <p>
                    Regularize os documentos quando alterado alguma
                    característica ou dado do veículo
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
                      <h2>TRANSFERÊNCIA</h2>
                      <p>
                        Emita os documentos com os dados do novo proprietário em
                        casos de venda do veículo.
                      </p>
                    </div>
                  </div>
                  <div className={styles.righttop}>
                    <div className={styles.image}>
                      <img src="PhoneIcon.svg" alt="" />
                    </div>
                    <div className={styles.text}>
                      <h2>COMUNICAÇÃO DE VENDA</h2>
                      <p>
                        Realize a comunicação para se isentar de ocorrências
                        indevidas em casos de venda.
                      </p>
                    </div>
                  </div>
                  <div className={styles.leftbottom}>
                    <div className={styles.image}>
                      <img src="SucataIcon.svg" alt="" />
                    </div>
                    <div className={styles.text}>
                      <h2>BAIXA DE SUCATA</h2>
                      <p>
                        Solicite a baixa do veículo em casos de sinistro com
                        perda total ou leilão como sucata.
                      </p>
                    </div>
                  </div>
                  <div className={styles.rightbottom}>
                    <div className={styles.image}>
                      <img src="PranchetaIcon.svg" alt="" />
                    </div>
                    <div className={styles.text}>
                      <h2>CERTIDÕES</h2>
                      <p>
                        Registro do Véiculo, Propriedade de Veículo, Histórico
                        de Veículo, Histórico do Proprietário e Débitos de
                        Veículos.
                      </p>
                    </div>
                  </div>
                  <div className={styles.leftbottom}>
                    <div className={styles.image}>
                      <img src="PlacaIcon.svg" alt="" />
                    </div>
                    <div className={styles.text}>
                      <h2>SOLICITAÇÃO DE PLACA</h2>
                      <p>
                        Solicite a fabricação de 2º via de placa quando
                        extraviada ou danificada. Necessário B.O, decalque e
                        CRLV.
                      </p>
                    </div>
                  </div>
                  <div className={styles.rightbottom}>
                    <div className={styles.image}>
                      <img src="LiberaçãoIcon.svg" alt="" />
                    </div>
                    <div className={styles.text}>
                      <h2>LIBERAÇÃO CSV</h2>
                      <p>
                        Emissão da liberação junto ao Detran para que a vistoria
                        do Inmetro possa ocorrer
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.bottomcontent}>
                  <div className={styles.image}>
                    <img src="DownloadIcon.svg" alt="" />
                  </div>
                  <div className={styles.text}>
                    <h2>BAIXA DE BLOQUEIO</h2>
                    <p>
                      Realize a baixa de bloqueio do veículo em casos de furto,
                      roubo, restrição financeira, acidentes de trânsito, ações
                      trabalhistas e disputas de bens (herança ou divórcio).
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
