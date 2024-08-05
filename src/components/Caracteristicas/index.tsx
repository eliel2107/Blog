import styles from "./styles.module.scss";

export default function Caracteristicas() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>Conheça as características de cada uma</h1>
            <p>
              1.Escolha um tema. <br />
              2.Planeje o conteúdo. <br />
              3.Escolha um nome e registre um domínio. <br />
              4.Escolha uma plataforma. <br />
              5.Assine uma hospedagem. <br />
              6.Instale e configure seu blog.
            </p>
          </div>
          <div className={styles.middle}>
            <img
              src="https://d10fqir6n4h7sq.cloudfront.net/public/caminhaoo.svg"
              alt=""
            />
          </div>
          <div className={styles.bottom}>
            <p>
              Se você está gerenciando um projeto ou uma empresa, ter um blog
              sobre os serviços, produtos e a missão da empresa é uma excelente
              ferramenta. Com um blog você atrairá pessoas realmente
              interessadas no que você faz. E com isso você ganha e sua
              audiência também. <br />
              Caso você queira começar um blog para um projeto pessoal, um hobby
              talvez, você tem muito mais opções à sua frente, acredite, um
              mundo cheio de possibilidades. Desde blog de viagens, tecnologia,
              receitas, música, moda – há muitos assuntos que você pode escolher
              como tema principal do seu blog. <br />
              Como esse é um dos passos mais importantes, tire um tempo para
              pensar e escolher. Nada de pressa aqui, ok? Pesquise suas opções e
              encontre um segmento, o nicho que você realmente quer! Se é que
              podemos te dar alguma dica, a sua melhor aposta sempre é escrever
              sobre algo que você já gosta. Ao fazer algo que você gosta, os
              resultados são sempre melhores. E seu público, sem dúvida,
              perceberá isso. O trabalho será natural.
            </p>
          </div>
          <div className={styles.divisor}></div>
          <div className={styles.underdiv}>
            <div className={styles.category}>
              <p>Categoria</p>
            </div>

            <p>10 mar 2023</p>
            <p>LW DIGITAL</p>
            <p>16 min de leitura</p>
          </div>
        </div>
      </section>
    </>
  );
}
