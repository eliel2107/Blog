import styles from './styles.module.scss';

export default function Banner() {
  return (
    <>
      <section className={styles.container}>
        <video autoPlay muted loop className={styles.videoBackground}>
          <source src="/videos/carro.mp4" type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
        <div className={styles.videogradient}></div>
        <div className={styles.middlecontent}>
          <h1>TECNOLOGIA Á SERVIÇO DA MOBILIDADE</h1>
          <button>saiba mais</button>
        </div>
      </section>
    </>
  );
}
