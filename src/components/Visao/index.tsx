import styles from "./styles.module.scss";

export default function Visao() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.mission}>
            <img
              src="https://d10fqir6n4h7sq.cloudfront.net/public/Rocket.svg"
              alt=""
            />
            <h2>Missão</h2>
            <p>Fornecer as melhores soluções tecnológicas para a mobilidade.</p>
          </div>
          <div className={styles.eye}>
            <img
              src="https://d10fqir6n4h7sq.cloudfront.net/public/eye.svg"
              alt=""
            />
            <h2>Visão</h2>
            <p>
              Até 2028 ser a principal solução tecnológica para a mobilidade no
              Brasil, com expansão internacional.
            </p>
          </div>
          <div className={styles.valores}>
            <img
              src="https://d10fqir6n4h7sq.cloudfront.net/public/HeartH.svg"
              alt=""
            />
            <h2>Valores</h2>
            <p>
              Para alcançar nossos objetivos, estabelecemos valores inegociáveis
              como: respeito, inovação, comprometimento, honestidade e
              seriedade.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
