import Link from 'next/link';
import styles from './styles.module.scss';

export default function Numeros() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.middlecontent}>
            <div className={styles.topcontent}>
              <h2>NÚMEROS QUE NOS ORGULHAM</h2>
              <p>
                Estamos orgulhosos do impacto positivo que tivemos na gestão de
                frotas. Alguns números que definem nossa jornada:
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.leftcard}>
                <div className={styles.card1}>
                  <img
                    src="https://d10fqir6n4h7sq.cloudfront.net/public/arrow.gif"
                    alt=""
                  />
                  <p>Mais de 25 anos de experiência no setor</p>
                </div>

                <div className={styles.card2}>
                  <img
                    src="https://d10fqir6n4h7sq.cloudfront.net/public/hand.gif"
                    alt=""
                  />
                  <p>Mais de 140 clientes satisfeitos</p>
                </div>
              </div>
              <div className={styles.rightcard}>
                <div className={styles.card3}>
                  <img
                    src="https://d10fqir6n4h7sq.cloudfront.net/public/pencil.gif"
                    alt=""
                  />
                  <p>Mais de 90% de redução na burocracia</p>
                </div>
                <div className={styles.card4}>
                  <img
                    src="https://d10fqir6n4h7sq.cloudfront.net/public/rocket.gif"
                    alt=""
                  />
                  <p>Média de 95% de melhora da eficiência</p>
                </div>
              </div>
            </div>
            <div className={styles.bottomcontent}>
              <Link href="/sobre">
                <button>Saiba Mais</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
