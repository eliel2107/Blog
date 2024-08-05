import Link from "next/link";
import styles from "./styles.module.scss";

export default function Bannerblog() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.overlay}>
          <div className={styles.text}>
            <div className={styles.title}>
              <h1>Pré-venda</h1>
              <p>
                Tenha as informações necessárias para uma negociação rápida e
                sem complicações.
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
