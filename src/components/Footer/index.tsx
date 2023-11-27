import Link from 'next/link';
import styles from './styles.module.scss';

export default function Footer() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.topcontent}>
            <div className={styles.pages}>
              <ul>
                <Link href={'/'}>
                  <li>Home</li>
                </Link>
                <Link href={'/sobre'}>
                  <li>Quem somos</li>
                </Link>
                <Link href={'/solucoes'}>
                  <li>soluções</li>
                </Link>
                <Link href={'/blog'}>
                  <li>Blog</li>
                </Link>
                <Link href={'/contato'}>
                  <li>Contato</li>
                </Link>
                <Link href={'/trabalhe'}>
                  <li>Trabalhe conosco</li>
                </Link>
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
          <div className={styles.middle}>
            <img src="logofooter.svg" alt="" />
            <div className={styles.undertitle}>
              <div className={styles.stars}>
                <img src="starsicon.svg" alt="" />
                <div className={styles.pro}>
                  <h2>Proffisionalismo</h2>
                  <p>Máxima qualidade</p>
                </div>
              </div>
              <div className={styles.satisfaction}>
                <img src="Like.svg" alt="" />
                <div className={styles.like}>
                  <h2>Satisfação dos clientes</h2>
                  <p>100%</p>
                </div>
              </div>
            </div>
          </div>
          <ul>
            <li>Termos de serviço</li>
            <li>Políticas de privacidade</li>
          </ul>
        </div>
      </section>
    </>
  );
}
