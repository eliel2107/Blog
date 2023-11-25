import styles from './styles.module.scss';

export default function Footer() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.topcontent}>
            <div className={styles.pages}>
              <ul>
                <a href="/">
                  <li>Home</li>
                </a>
                <a href="/sobre">
                  <li>sobre nós</li>
                </a>
                <a href="/solucoes">
                  <li>soluções</li>
                </a>
                <a href="/blog">
                  <li>Blog</li>
                </a>
                <a href="/contato">
                  <li>Contato</li>
                </a>
              </ul>
            </div>
            <div className={styles.social}>
              <img src="facebook-lw.svg" alt="" />
              <img src="twitter-lw.svg" alt="" />
              <img src="vimeo-lw.svg" alt="" />
              <img src="youtube-lw.svg" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.bottomcontent}>
          <p>© 2023 LW Tecnologia. Todos os direitos reservados</p>
          <img src="logofooter.svg" alt="" />
          <ul>
            <li>Termos de serviço</li>
            <li>Políticas de privacidade</li>
          </ul>
        </div>
      </section>
    </>
  );
}
