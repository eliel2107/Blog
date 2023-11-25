import styles from './styles.module.scss';

export default function Conhecasobre() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <img src="business.svg" alt="" />
          </div>
          <div className={styles.rightside}>
            <div className={styles.title}>
              <h1>Conheça a LW</h1>
            </div>
            <div className={styles.text}>
              <p>
                A LW Tecnologia é uma empresa de tecnologia que desenvolve
                ferramentas de software para gestão de dados da mobilidade
                urbana, veiculares e pessoais. Nosso propósito é ajudar nossos
                clientes a economizar dinheiro, melhorar a gestão de processos e
                conscientizar sobre o trânsito. Como prever o que vai acontecer
                daqui a alguns anos em um segmento que tem o movimento em sua
                essência?Atualmente temos um time com mais de 6o colaboradores,
                simplificamos a burocracia dos órgãos autuadores e a
                descentralização das informações veiculares.Venha fazer parte de
                um time inovador e trabalhar junto com a gente na missão de
                utilizar a tecnologia a serviço da mobilidade.Se você gosta de
                tecnologia e acredita no futuro da mobilidade, venha para o
                nosso time.
              </p>
            </div>
            <button>Quero me inscrever</button>
          </div>
        </div>
      </section>
    </>
  );
}
