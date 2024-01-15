import Link from 'next/link';
import styles from './styles.module.scss';

export default function Bannertrabalhe() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <div className={styles.title}>
              <h1>Faça parte do nosso time de especialistas</h1>
              <p>#RODAMOSJUNTOS</p>
            </div>
          </div>
          <div className={styles.rightside}>
            <p>
              Faça parte desse super time de especialistas e vamos juntos levar
              essa revolução para nossos clientes.
            </p>
            <Link href="#trabalhe">
              <button>
                Quero deixar meu currículo <img src="ArrowRight.svg" alt="" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
