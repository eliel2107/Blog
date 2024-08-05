import styles from "./styles.module.scss";

export default function Locadora() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.overlay}>
            <div className={styles.rightside}>
              <div className={styles.serviços}>
                <h2>LW MULTAS</h2>
                <p>
                  Agilidade e eficiência na Gestão de Infrações, com 3 opções de
                  planos:
                </p>
                <div className={styles.top}>
                  <div className={styles.serviceslefttop}>
                    <img
                      src="https://d10fqir6n4h7sq.cloudfront.net/public/./lefttop.gif"
                      alt=""
                    />
                    <h1>Lite</h1>
                    <p>
                      <em>Auto-gestão</em>
                    </p>
                    <ul>
                      <li>Consulta de multas em uma plataforma Web;</li>
                      <li>Gestão de notificações e boleto;</li>
                      <li>Relatórios financeiros e indicadores.</li>
                    </ul>
                  </div>
                  <div className={styles.servicesrighttop}>
                    <img
                      src="https://d10fqir6n4h7sq.cloudfront.net/public/./righttop.gif"
                      alt=""
                    />
                    <h1>Plus+</h1>
                    <p>
                      <em>Gesão de indicação</em>
                    </p>
                    <ul>
                      <li>Plano Lite +</li>
                      <li>Gestão terceirizada de indicação do condutor;</li>
                      <li>Acesso às tratativas e indicações realizadas.</li>
                    </ul>
                  </div>
                  <div className={styles.servicesleftbottom}>
                    <img
                      src="https://d10fqir6n4h7sq.cloudfront.net/public/./leftbottom.gif"
                      alt=""
                    />
                    <h1>PREMIUM</h1>
                    <p>
                      <em>Auto-gestão</em>
                    </p>
                    <ul>
                      <li>Plano plus +</li>
                      <li>Prestação de contas dos pagamentos realizados</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.bottom}>
                  <button>Quero o LW Multas</button>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </section>
    </>
  );
}
