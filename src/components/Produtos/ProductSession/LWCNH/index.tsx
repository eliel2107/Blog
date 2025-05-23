import Link from "next/link";
import styles from "./styles.module.scss";

export default function Transportadora() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.rightside}>
            <div className={styles.serviços}>
              <div className={styles.title}>
                <h2>CONSULTA DE CNH</h2>
                <p>
                  O serviço atua como uma medida preventiva, assegurando que a
                  frota seja operada por motoristas devidamente habilitados e
                  com histórico de conduta exemplar no trânsito.
                </p>
                <p>
                  Essa funcionalidade traz informações atualizadas sobre a
                  pontuação dos motoristas, proporcionando:
                </p>
              </div>
              <div className={styles.top}>
                <div className={styles.serviceslefttop}>
                  <img
                    src="https://d10fqir6n4h7sq.cloudfront.net/public/./lefttop.gif"
                    alt=""
                  />

                  <p>Rapidez na informação</p>
                </div>
                <div className={styles.servicesrighttop}>
                  <img
                    src="https://d10fqir6n4h7sq.cloudfront.net/public/./righttop.gif"
                    alt=""
                  />

                  <p>Prevenção de penalidade</p>
                </div>
              </div>

              <div className={styles.button}>
                <div className={styles.serviceslefttop}>
                  <img
                    src="https://d10fqir6n4h7sq.cloudfront.net/public/./lefttop.gif"
                    alt=""
                  />

                  <p>Acompanhamento assertivo</p>
                </div>
                <Link href={"/contato"}>
                  <button>Saiba mais</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
