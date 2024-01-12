import styles from './styles.module.scss';
export default function Fleet1() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <img src="" alt="" />
            <div className={styles.overlay}>
              <div className={styles.rightside}>
                <div className={styles.serviços}>
                  <h2>LW DÉBITOS</h2>
                  <p>Solução completa para gestão de débitos e documentação.</p>
                  <div className={styles.top}>
                    <div className={styles.serviceslefttop}>
                      <img src="./lefttop.gif" alt="" />
                      <h1>Consulta de Débitos</h1>
                      <p>
                        Consulta de valor e data de vencimento dos débitos de
                        IPVA e Licenciamento.
                      </p>
                    </div>
                    <div className={styles.servicesrighttop}>
                      <img src="./righttop.gif" alt="" />
                      <h1>Pagamento</h1>
                      <p>
                        Solicitação de pagamento dos débitos diretamente pelo
                        sistema.
                      </p>
                    </div>
                    <div className={styles.servicesleftbottom}>
                      <img src="./leftbottom.gif" alt="" />
                      <h1>Emissão CRLV</h1>
                      <p>
                        Após a consulta e pagamento dos débitos, é emitido e
                        disponibilizado o CRLV.
                      </p>
                    </div>
                  </div>

                  <div className={styles.bottom}>
                    <button>Quero o LW Débitos</button>
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
