import Link from "next/link";
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
            Reconhecemos a <strong>importância</strong> de gerar um impacto
            positivo nos contextos em que estamos inseridos. Como parte desse
            compromisso, orientamos nossas práticas de negócios pela dedicação à
            sustentabilidade ambiental, responsabilidade social e forte
            governança corporativa. Nossos compromissos incluem:
          </p>
        </div>
        <div className={styles.cards}>
          <div className={styles.cardWrap}>
            <div className={styles.cardTitle}>
              <h3>Preservação ambiental</h3>
            </div>
            <div className={styles.cardDescription}>
              <p>
                • Cumprir todas as leis e regulamentações ambientais aplicáveis;
                <br />
                <br />
                • Trabalhar continuamente para a redução da geração de resíduos;
                <br />
                <br />
                • Apoiar iniciativas que contribuam para a proteção e
                preservação do meio ambiente; <br />
                <br />• Conscientizar nossos colaboradores e parceiros de
                negócios sobre responsabilidade ambiental;
              </p>
            </div>
          </div>
          <div className={styles.cardWrap}>
            <div className={styles.cardTitle}>
              <h3>Responsabilidade Social</h3>
            </div>
            <div className={styles.cardDescription}>
              <p>
                • Promover a diversidade, inclusão e equidade; <br />
                <br />• Proporcionar um ambiente de trabalho seguro e inclusivo
                para todos os colaboradores; <br />
                <br />• Apoiar iniciativas sociais que estejam alinhadas aos
                nossos valores e missão;
              </p>
            </div>
          </div>
          <div className={styles.cardWrap}>
            <div className={styles.cardTitle}>
              <h3>Governança Corporativa</h3>
            </div>
            <div className={styles.cardDescription}>
              <p>
                • Manter os mais altos padrões de ética, integridade e
                transparência em todas as nossas operações; <br />
                <br />• Reforçar todos os requisitos de Segurança da informação
                e Privacidade em todas as nossas operações; <br />
                <br />• Revisar e otimizar periodicamente nossos documentos
                normativos internos e mecanismos de governança, a fim de sempre
                adotar as melhores práticas;
              </p>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <Link
            href={
              "https://d10fqir6n4h7sq.cloudfront.net/public/esg/Pol%C3%ADtica%20de%20Compliance.pdf"
            }
          >
            <p>Políticas de Compilance</p>
          </Link>
          <Link
            href={
              "https://d10fqir6n4h7sq.cloudfront.net/public/esg/Politica%20de%20Brindes%20e%20Presentes.pdf"
            }
          >
            <p>Políticas de Brindes e Presentes</p>
          </Link>
          <Link
            href={
              "https://d10fqir6n4h7sq.cloudfront.net/public/esg/C%C3%B3digo%20de%20Conduta%20LW.pdf"
            }
          >
            <p>Código de conduta</p>
          </Link>
        </div>
      </div>
    </>
  );
}
