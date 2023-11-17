import styles from './styles.module.scss';

export default function sobre() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.topcontent}>
          <h2>UM POUCO SOBRE NÓS</h2>

          <div className={styles.youtube}>
            <div className={styles.leftbar}></div>
            <div className={styles.videobg}>
              <iframe
                width="1252"
                height="586"
                src="https://www.youtube.com/embed/5WmIwcTGO5Q"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className={styles.rightbar}></div>
          </div>
        </div>
        <div className={styles.bottomcontent}>
          <div className={styles.title}>
            <h2>Parceiros de sucesso</h2>
            <p>Trabalhando juntos para otimizar processos e reduzir custos</p>
          </div>
          <div className={styles.Parceiros}>
            <img src="\Logo.svg" alt="" />
            <img src="\Logo.svg" alt="" />
            <img src="\Logo.svg" alt="" />
            <img src="\Logo.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
