import Link from "next/link";
import styles from "./styles.module.scss";

export default function Reduzir() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <video autoPlay muted loop className={styles.videoBackground}>
              <source
                src="https://d10fqir6n4h7sq.cloudfront.net/public/videos/follow.mp4"
                type="video/mp4"
              />
              Seu navegador não suporta a tag de vídeo.
            </video>
            <div className={styles.overlay}>
              <div className={styles.rightside}>
                <h1>VAMOS POTENCIALIZAR A GESTÃO DA SUA FROTA?</h1>
                <p>
                  Fale agora mesmo com um de nossos especialistas , receba
                  gratuitamente um diagnóstico da sua empresa e descubra como e
                  quanto você pode economizar, além de melhorar e simplificar a
                  gestão de sua frota.
                </p>
                <div className={styles.bottom}>
                  <Link href="/contato">
                    <button>
                      FALE CONOSCO{" "}
                      <img
                        src="https://d10fqir6n4h7sq.cloudfront.net/public/Chats.svg"
                        alt=""
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
