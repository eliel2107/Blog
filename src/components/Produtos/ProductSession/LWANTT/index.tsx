import Link from 'next/link';
import styles from './styles.module.scss';

export default function Transportadora() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.rightside}>
            <div className={styles.serviços}>
              <div className={styles.title}>
                <h2>MULTA ANTT</h2>
                <p>
                  Esse produto foi projetado para capturar infrações de
                  <strong> transportes terrestres</strong> de forma
                  <strong> automatizada.</strong>
                </p>
                <p>
                  Através dele, você possui <strong>maior controle</strong>{' '}
                  sobre seus veículos, <strong>evitando complicações</strong>{' '}
                  que impossibilitem o funcionamento da sua frota.
                </p>
              </div>
              <Link href={'/contato'}>
                <div className={styles.button}>
                  <button>Saiba mais</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
