import styles from './styles.module.scss';

export default function Reduzir() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <video autoPlay muted loop className={styles.videoBackground}>
              <source src="/videos/follow.mp4" type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
            <div className={styles.overlay}>
              <div className={styles.rightside}>
                <h1>VAMOS COMEÇAR NOSSA JORNADA JUNTOS?</h1>
                <p>
                  Fale agora mesmo com um de nossos especialistas e receba
                  gratuitamente um diagnóstico da sua empresa e descubra como e
                  quanto você pode economizar, além de melhorar e simplificar a
                  gestão de sua frota.
                </p>
                <div className={styles.bottom}>
                  <a href="/contato">
                    <button>
                      FALE CONOSCO <img src="Chats.svg" alt="" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
