import styles from './styles.module.scss';

export default function Transportadora() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <img src="Photo2.png" alt="" />
            <div className={styles.overlay}>
              <div className={styles.rightside}>
                <div className={styles.serviços}>
                  <h2>TRANSPORTADORA</h2>
                  <div className={styles.top}>
                    <div className={styles.serviceslefttop}>
                      <img src="./lefttop.gif" alt="" />
                      <p>Maior prazo para indicação do condutor</p>
                    </div>
                    <div className={styles.servicesrighttop}>
                      <img src="./righttop.gif" alt="" />
                      <p>Consulta de Multas ANTT</p>
                    </div>
                  </div>
                  <div className={styles.bottom}>
                    <div className={styles.servicesrightbottom}>
                      <img src="./rightbottom.gif" alt="" />
                      <p>Consulta CNH</p>
                    </div>
                    <div className={styles.servicesleftbottom}>
                      <img src="./leftbottom.gif" alt="" />
                      <p>Pagamento das multas com desconto</p>
                    </div>
                  </div>
                  <div className={styles.top}>
                    <div className={styles.serviceslefttop}>
                      <img src="./lefttop.gif" alt="" />
                      <p>Rankings e Indicadores</p>
                    </div>
                    <div className={styles.servicesrighttop}>
                      <img src="./righttop.gif" alt="" />
                      <p>Gráficos e relatórios gerenciais</p>
                    </div>
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
