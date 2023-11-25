import styles from './styles.module.scss';

export default function Fleet() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <img src="Photo3.svg" alt="" />
            <div className={styles.overlay}>
              <div className={styles.rightside}>
                <div className={styles.serviços}>
                  <h2>FLEET</h2>
                  <div className={styles.top}>
                    <div className={styles.serviceslefttop}>
                      <img src="./lefttop.gif" alt="" />
                      <p>Maior prazo para indicação do condutor</p>
                    </div>
                    <div className={styles.servicesrighttop}>
                      <img src="./righttop.gif" alt="" />
                      <p>
                        Disparo automático de e-mail (notificação de trânsito)
                      </p>
                    </div>
                  </div>
                  <div className={styles.bottom}>
                    <div className={styles.servicesrightbottom}>
                      <img src="./rightbottom.gif" alt="" />
                      <p>Relatórios Gerenciais</p>
                    </div>
                    <div className={styles.servicesleftbottom}>
                      <img src="./leftbottom.gif" alt="" />
                      <p>Pagamento das multas com 20% desconto</p>
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
