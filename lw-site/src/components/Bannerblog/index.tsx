import styles from './styles.module.scss';

export default function Bannerblog() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.overlay}>
          <div className={styles.text}>
            <div className={styles.toptitle}>
              <button>Evento</button>
              <p>Leia em 5 min</p>
            </div>
            <div className={styles.title}>
              <h1>
                Tipos de frotas: conheça as <br />
                características de cada uma
              </h1>
              <p>
                Uma frota se caracteriza pelo conjunto de veículos que estão a
                serviço de uma empresa. É comum vermos as frotas de caminhões,
                mas além delas há diversos outros tipos de frotas. Cada tipo
                possui suas próprias características e modelos de veículos
                para...
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
