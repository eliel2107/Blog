import Link from "next/link";
import styles from "./styles.module.scss";

export default function Bannerblog() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.overlay}>
          <div className={styles.text}>
            <div className={styles.title}>
              <h1>Consulta de CNH</h1>
              <p>
                Acompanhe a pontuação dos seus condutores de forma facilitada.
              </p>
            </div>
            <div className={styles.button}>
              <Link href={"/contato"}>
                <button>
                  Fale conosco{" "}
                  <img
                    src="https://d10fqir6n4h7sq.cloudfront.net/public/ArrowRightw.svg"
                    alt=""
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
