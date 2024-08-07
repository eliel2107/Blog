import styles from "./styles.module.scss";

export default function Embarcador1() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <img src="https://d10fqir6n4h7sq.cloudfront.net/public/" alt="" />
            <div className={styles.overlay}>
              <div className={styles.rightside}>
                <div className={styles.serviços}>
                  <h2>LW REMARKETING</h2>
                  <p>
                    Plataforma de devolução e venda de veículos <br />
                    ao final de contrato com agilidade, segurança e controle.
                  </p>
                  <div className={styles.top}>
                    <div className={styles.serviceslefttop}>
                      <img
                        src="https://d10fqir6n4h7sq.cloudfront.net/public/./lefttop.gif"
                        alt=""
                      />
                      <h1>Gestão de Devolução</h1>
                      <p>
                        Devolução do veículo após envios periódicos de avisos ao
                        condutor sobre o fim do contrato e pré-agendamento de
                        devolução.
                      </p>
                    </div>
                    <div className={styles.servicesrighttop}>
                      <img
                        src="https://d10fqir6n4h7sq.cloudfront.net/public/./righttop.gif"
                        alt=""
                      />
                      <h1>Gestão de Vistoria</h1>
                      <p>
                        Armazenamento, análise e visualização dos itens do laudo
                        de vistoria além do processo de avaliação de avarias.
                      </p>
                    </div>
                    <div className={styles.servicesleftbottom}>
                      <img
                        src="https://d10fqir6n4h7sq.cloudfront.net/public/./leftbottom.gif"
                        alt=""
                      />
                      <h1>Gestão de Orçamento</h1>
                      <p>
                        Auxilia a criação de um orçamento do veículo com o valor
                        total de avarias, multas e débitos durante o período
                        utilizado pelo condutor.
                      </p>
                    </div>
                  </div>

                  <div className={styles.bottom}>
                    <button>Quero o LW Remarketing</button>
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
