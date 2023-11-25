import styles from './styles.module.scss';

export default function Bannertrabalhe() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <div className={styles.title}>
              <h1>Faça parte do nosso time de especialistas</h1>
            </div>
          </div>
          <div className={styles.rightside}>
            <p>
              Faça parte desse super time de especialistas e vamos juntos levar
              essa revolução do para nossos clientes parceiros.
            </p>
            <button>
              Quero me inscrever <img src="ArrowRight.svg" alt="" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
