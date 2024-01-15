import Link from 'next/link';
import styles from './styles.module.scss';

export default function ConhecaTrabalhe() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <img src="business.svg" alt="" />
          </div>
          <div className={styles.rightside}>
            <div className={styles.title}>
              <h1>POR QUE A LW?</h1>
            </div>
            <div className={styles.text}>
              <p>
                Bem-vindo à LW Tecnologia, onde a inovação encontra o pulso do
                movimento na mobilidade urbana, veicular e pessoal. Não somos
                apenas uma empresa de tecnologia; somos pioneiros moldando o
                futuro de como nos movemos e nos conectamos. Na LW Tecnologia,
                criamos ferramentas de software que redefinem o gerenciamento de
                dados de mobilidade urbana, veicular e pessoal. Nossa missão é
                simples, mas poderosa: capacitar nossos clientes economizando
                custos, simplificando processos e provocando uma revolução na
                conscientização sobre o trânsito. Prever o futuro num domínio
                movido pelo movimento perpétuo é o nosso forte. Com uma equipe
                de mais de 160 mentes dedicadas, simplificamos os obstáculos
                burocráticos e descentralizamos as informações dos veículos,
                abrindo caminho para um futuro mais acessível e eficiente.
                Junte-se a nós nesta era de inovação, onde cada ideia importa e
                a tecnologia é o coração das soluções de mobilidade. Faça parte
                de uma equipe apaixonada, trabalhando em conjunto para
                aproveitar o potencial da tecnologia na remodelação do cenário
                da mobilidade. Se você é movido por tecnologia e imagina um
                futuro onde a mobilidade prospere, venha para o mundo da LW
                Tecnologia. Sua hora é agora!
              </p>
            </div>
            <Link href="/assist">
              <button>Conheça nossos produtos</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
