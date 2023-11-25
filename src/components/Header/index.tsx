import styles from './styles.module.scss';

export default function Header() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <a href="/">
            <img src="/lwLOGO.svg" />
          </a>
          <div className={styles.rightSide}>
            <ul>
              <a href="/sobre">
                <li>sobre nós</li>
              </a>
              <a href="/solucoes">
                <li>soluções</li>
              </a>
              <a href="/contato">
                <li>contato</li>
              </a>
              <a href="/blog">
                <li>Blog</li>
              </a>
              <li>|</li>
              <li>área do cliente</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
