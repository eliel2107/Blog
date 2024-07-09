import Link from 'next/link';
import styles from './styles.module.scss';

export default function ConhecaTrabalhe() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <img
              src="https://d10fqir6n4h7sq.cloudfront.net/public/fotos/Escritorio3.JPG"
              alt=""
            />
          </div>
          <div className={styles.rightside}>
            <div className={styles.title}>
              <h1>POR QUE A LW?</h1>
            </div>
            <div className={styles.text}>
              <p>
                No Grupo LW somos um espaço onde a inovação converge com as
                necessidades de constante evolução da mobilidade urbana,
                veicular e pessoal. Aqui não apenas representamos uma empresa de
                tecnologia; somos os visionários que estão moldando o amanhã,
                reinventando a forma como nos movemos e nos conectamos. Nosso
                trabalho se concentra em criar ferramentas de software que não
                apenas gerenciam, mas transformam e potencializam a gestão de
                frotas. Nossa missão é clara: facilitar a gestão para nossos
                clientes, reduzir custos, simplificarprocessos e, acima de tudo,
                impulsar uma revolução na consciência do trânsito. Antecipar as
                necessidades futuras em um mundo onde o movimento é constante é
                o nosso diferencial. Com uma equipe composta por mais de 100
                mentes dedicadas, superamos barreiras burocráticas e
                democratizamos o acesso às informações veiculares, pavimentando
                o caminho por uma gestão de frotas mais acessível e eficiente.
                Junte-se a nós nesta era de descobertas, onde cada ideia é
                valorizada e a tecnologia é o cerne das soluções de mobilidade.
                Se você compartilha da nossa paixão pela tecnologia e enxerga um
                futuro promissor onde a mobilidade prospera, então é hora de
                fazer partedo Grupo LW. Esperamos você!
              </p>
            </div>
            <Link href="/debitos">
              <button>Conheça nossos produtos</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
