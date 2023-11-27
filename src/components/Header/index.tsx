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
                <li>Quem somos</li>
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
              <a href="/trabalhe">
                <li>Trabalhe conosco</li>
              </a>
              <li>|</li>
              <a href="/login">
                <li>área do cliente</li>
              </a>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
