import Link from 'next/link';
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
              <Link href={'/sobre'}>
                <li>Quem somos</li>
              </Link>

              <Link href={'/solucoes'}>
                <li>soluções</li>
              </Link>
              <Link href={'/contato'}>
                <li>contato</li>
              </Link>
              <Link href={'/blog'}>
                <li>Blog</li>
              </Link>
              <Link href={'/trabalhe'}>
                <li>Trabalhe conosco</li>
              </Link>
              <li>|</li>
              <Link href={'/login'}>
                <li>área do cliente</li>
              </Link>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
