import Link from "next/link";
import styles from "./styles.module.scss";

export default function Bannerblog() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.overlay}>
          <div className={styles.text}>
            <div className={styles.title}>
              <img
                src="https://d10fqir6n4h7sq.cloudfront.net/public/ASSISTLOGO.png"
                alt=""
              />

              <p>Sua frota com mais segurança e suporte aos condutores.</p>
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
