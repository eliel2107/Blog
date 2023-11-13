import styles from "./styles.module.scss";

export default function Header() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <img src="/lwLOGO.svg" />
          <div className={styles.rightSide}>
            <ul>
              <li>início</li>
              <li>sobre nós</li>
              <li>soluções</li>
              <li>blog</li>
              <li>contato</li>
              <li>trabalhe conosco</li>
              <li>|</li>
              <li>área do cliente</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
