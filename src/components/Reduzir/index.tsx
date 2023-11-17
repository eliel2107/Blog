import styles from './styles.module.scss';

export default function Reduzir() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            {' '}
            <video autoPlay muted loop className={styles.videoBackground}>
              <source src="/videos/follow.mp4" type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
          <div className={styles.rightside}>
            <h1>VAMOS JUNTOS REDUZIR CUSTOS?</h1>
            <p>
              Tem alguma pergunta ou precisa de mais informações? Nossa equipe
              está pronta para ajudar
            </p>
            <div className={styles.bottom}>
              <button>
                FALE CONOSCO <img src="Chats.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
      c
    </>
  );
}
