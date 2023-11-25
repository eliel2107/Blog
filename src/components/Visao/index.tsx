import styles from './styles.module.scss';

export default function Visao() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.mission}>
            <img src="Rocket.svg" alt="" />
            <h2>Missão</h2>
            <p>
              Nosso propósito é desenvolver ferramentas de software para gestão
              de dados da mobilidade urbana, veiculares e pessoais. Com isso,
              queremos ajudar nossos clientes a economizar dinheiro, melhorar a
              gestão de processos e conscientizar sobre o trânsito.
            </p>
          </div>
          <div className={styles.eye}>
            <img src="eye.svg" alt="" />
            <h2>Visão</h2>
            <p>
              A melhor gestão de inteligência de dados em mobilidade urbana,
              veicular e pessoal é essencial para um futuro mais sustentável e
              eficiente. Através do uso de tecnologias inovadoras, é possível
              coletar e analisar dados de diversas fontes, como sensores,
              câmeras e aplicativos.
            </p>
          </div>
          <div className={styles.valores}>
            <img src="HeartH.svg" alt="" />
            <h2>Valores</h2>
            <p>
              A empresa atua de forma ética, honesta e comprometida, buscando a
              excelência em tudo o que faz. Está em constante desenvolvimento e
              inovação, e respeita o próximo e a individualidade de cada um.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
