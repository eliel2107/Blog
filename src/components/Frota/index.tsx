import styles from "./styles.module.scss";

export default function Frota() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <img src="https://d10fqir6n4h7sq.cloudfront.net/public/" alt="" />
            <div className={styles.overlay}>
              <div className={styles.rightside}>
                <div className={styles.serviços}>
                  <h2>LW ONE SMART TRACK</h2>
                  <p>Serviço operacional de controle de frotas de veículos.</p>
                  <div className={styles.top}>
                    <div className={styles.serviceslefttop}>
                      <img
                        src="https://d10fqir6n4h7sq.cloudfront.net/public/./lefttop.gif"
                        alt=""
                      />
                      <h1>Tecnologia Sentinelas</h1>

                      <ul>
                        <li>Ferramenta para controle de frota;</li>
                        <li>
                          Informações em tempo real sobre períodos de
                          inatividade e eventos gerados pelo sistema.
                        </li>
                      </ul>
                    </div>
                    <div className={styles.servicesrighttop}>
                      <img
                        src="https://d10fqir6n4h7sq.cloudfront.net/public/./righttop.gif"
                        alt=""
                      />
                      <h1>Sistema Anti-Fraude</h1>

                      <ul>
                        <li>
                          Ferramentas que auxiliam na emissão de relatórios de
                          sindicância;
                        </li>
                        <li>
                          É possível definir se houve imprudência por parte do
                          condutor.
                        </li>
                      </ul>
                    </div>
                    <div className={styles.servicesleftbottom}>
                      <img
                        src="https://d10fqir6n4h7sq.cloudfront.net/public/./leftbottom.gif"
                        alt=""
                      />
                      <h1>White Label Mobile + Web</h1>

                      <ul>
                        <li>
                          Plataforma personalizada com logo e URL do cliente,
                          disponibilizado para mobile e Web.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className={styles.bottom}>
                    <button>Quero o LW ONE SMART TRACK</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
