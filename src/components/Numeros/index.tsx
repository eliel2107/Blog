import styles from './styles.module.scss';

export default function Numeros() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.middlecontent}>
            <div className={styles.topcontent}>
              <h2>ALGUNS NÚMEROS QUE NOS ORGULHAMOS</h2>
              <p>
                Estamos orgulhosos do impacto positivo que tivemos na gestão de
                frotas. Alguns números que definem nossa jornada:
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.leftcard}>
                <div className={styles.card1}>
                  <img src="arrow.gif" alt="" />
                  <p>Mais de 25 anos de experiência no setor</p>
                </div>

                <div className={styles.card2}>
                  <img src="hand.gif" alt="" />
                  <p>Mais de 100 parceiros muito satisfeitos</p>
                </div>
              </div>
              <div className={styles.rightcard}>
                <div className={styles.card3}>
                  <img src="pencil.gif" alt="" />
                  <p>Uma média de 90% de redução da burocracia</p>
                </div>
                <div className={styles.card4}>
                  <img src="rocket.gif" alt="" />
                  <p>Em média 95% de melhora da eficiência</p>
                </div>
              </div>
            </div>
            <div className={styles.bottomcontent}>
              <button>Saiba Mais</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
