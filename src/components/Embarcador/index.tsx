import styles from './styles.module.scss';

export default function Embarcador() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <img src="Photo5.png" alt="" />
            <div className={styles.overlay}>
              <div className={styles.rightside}>
                <div className={styles.serviços}>
                  <h2>EMBARCADOR</h2>
                  <div className={styles.top}>
                    <div className={styles.serviceslefttop}>
                      <img src="./lefttop.gif" alt="" />
                      <p>Consulta ativa das multas por excesso de peso</p>
                    </div>
                    <div className={styles.servicesrighttop}>
                      <img src="./righttop.gif" alt="" />
                      <p>Multas cadastradas no CNPJ</p>
                    </div>
                  </div>
                  <div className={styles.bottom}>
                    <div className={styles.servicesrightbottom}>
                      <img src="./rightbottom.gif" alt="" />
                      <p>Entre com recursos das multas dentro do prazo</p>
                    </div>
                    <div className={styles.servicesleftbottom}>
                      <img src="./leftbottom.gif" alt="" />
                      <p>Pagamento com desconto</p>
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
