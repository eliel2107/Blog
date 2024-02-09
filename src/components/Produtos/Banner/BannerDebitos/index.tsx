import Link from 'next/link';
import styles from './styles.module.scss';

export default function Bannerblog() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.overlay}>
          <div className={styles.text}>
            <div className={styles.title}>
              <img src="/DEBITOSLOGO.png" alt="" />
              <p>
                Elimine planilhas e processos manuais no pagamento dos débitos
                da sua frota de veículos.
              </p>
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
