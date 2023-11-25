import styles from './styles.module.scss';

export default function Bannersolucoes() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <div className={styles.title}>
              <h1>
                Nossas <br />
                soluções
              </h1>
            </div>
          </div>
          <div className={styles.rightside}>
            <p>
              Cras imperdiet est eget nulla fringilla, sit amet volutpat sem
              tristique. Pellentesque quis augue ac mauris posuere vehicula.
            </p>
            <a href="/contato">
              <button>
                Fale Conosco <img src="ArrowRight.svg" alt="" />
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
