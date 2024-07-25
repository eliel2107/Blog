import styles from "./styles.module.scss";
export default function NossosCompromissos() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Nossos Compromissos</h1>
          <div className={styles.underline}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="396"
              height="13"
              viewBox="0 0 396 13"
              fill="none"
            >
              <path
                d="M1 11.3431C156.482 -1.22087 243.099 -1.00743 395 11.3431"
                stroke="#336699"
                stroke-width="3"
              />
            </svg>
          </div>
        </div>
        <div className={styles.text}>
          <p>
            Na <strong>LW</strong>, levamos nossos compromissos com práticas
            ambientais, sociais e de governança muito a sério. Entendemos que o
            futuro sustentável do nosso planeta e das próximas gerações depende
            das <strong>decisões que tomamos hoje.</strong> Por isso, estamos
            dedicados a:
          </p>
        </div>
        <div className={styles.cards}>
          <div className={styles.cardWrap}>
            <div className={styles.cardTitle}>
              <h3>Preservação ambiental</h3>
            </div>
            <div className={styles.cardDescription}>
              <p>
                Minimizar nosso impacto ambiental através de inovações
                sustentáveis e práticas operacionais que reduzem o consumo de
                recursos e a emissão de poluentes.
              </p>
            </div>
          </div>
          <div className={styles.cardWrap}>
            <div className={styles.cardTitle}>
              <h3>Responsabilidade Social</h3>
            </div>
            <div className={styles.cardDescription}>
              <p>
                Minimizar nosso impacto ambiental através de inovações
                sustentáveis e práticas operacionais que reduzem o consumo de
                recursos e a emissão de poluentes.
              </p>
            </div>
          </div>
          <div className={styles.cardWrap}>
            <div className={styles.cardTitle}>
              <h3>Governança Corporativa</h3>
            </div>
            <div className={styles.cardDescription}>
              <p>
                Minimizar nosso impacto ambiental através de inovações
                sustentáveis e práticas operacionais que reduzem o consumo de
                recursos e a emissão de poluentes.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <p>Políticas da LW</p>
          <p>Código de conduta</p>
        </div>
      </div>
    </>
  );
}
