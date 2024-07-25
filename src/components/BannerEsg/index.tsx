import styles from "./styles.module.scss";

export default function BannerEsg() {
  return (
    <>
      <section className={styles.container}>
        <video autoPlay muted loop className={styles.videoBackground}>
          <source src="/video.mp4" type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
        <div className={styles.videogradient}></div>
        <div className={styles.middlecontent}>
          <img src="esgLogo.png" alt="" />
          <div className={styles.title}>
            <h1>
              <strong>E</strong>nvironmental
            </h1>
            <h1>
              <strong>S</strong>ocial
            </h1>
            <h1>
              <strong>G</strong>overnance
            </h1>
          </div>
          <div className={styles.description}>
            <p>
              As considerações ambientais, sociais e de governança (ESG) estão
              integradas nas políticas e princípios que regem o nosso negócio e
              refletem o nosso compromisso com o crescimento inclusivo e
              sustentável.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
