import styles from "./styles.module.scss";

export default function BannerNossoTime() {
  return (
    <>
      <section className={styles.container}>
        <video autoPlay muted loop className={styles.videoBackground}>
          <source src="/nosso-time.mp4" type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
        <div className={styles.videogradient}></div>
        <div className={styles.middlecontent}>
          <div className={styles.title}>
            <h1>
              <strong>Time LW</strong>
            </h1>
            <p>
              No <strong>Grupo LW</strong>, acreditamos que o sucesso de nossa
              empresa é construído pelas pessoas extraordinárias que fazem parte
              do nosso time. É com grande orgulho que apresentamos nossos
              gestores, líderes que são a força motriz por trás de cada inovação
              e conquista. Eles são profissionais dedicados e talentosos,
              comprometidos com a excelência e apaixonados pelo que fazem. Nosso
              time de gestores não apenas impulsiona nosso crescimento, mas
              também inspira toda a equipe a alcançar novos patamares de
              desempenho e qualidade.
            </p>
          </div>
          <div>
            <button>Faça parte!</button>
          </div>
        </div>
      </section>
    </>
  );
}
