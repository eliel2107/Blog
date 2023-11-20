import styles from "./styles.module.scss";

export default function Header() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <img src="/lwLOGO.svg" />
          <div className={styles.rightSide}>
            <ul>
              <li>sobre nós</li>
              <li>soluções</li>
              <li>contato</li>
              <li>|</li>
              <li>área do cliente</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
