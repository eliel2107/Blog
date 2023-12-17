import Link from 'next/link';
import styles from './styles.module.scss';

export default function Bannerblog() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.overlay}>
          <div className={styles.text}>
            <div className={styles.title}>
              <h1>LW DOC</h1>
              <p>Simplifique sua gestão documental através da tecnologia.</p>
            </div>
            <div className={styles.button}>
              <Link href={'/contato'}>
                <button>
                  Fale conosco <img src="ArrowRightw.svg" alt="" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
