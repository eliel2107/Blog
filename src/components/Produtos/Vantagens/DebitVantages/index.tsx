import Link from 'next/link';
import styles from './styles.module.scss';

export default function AssistServices() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>VANTAGENS</h1>
          </div>
          <div className={styles.middlecontent}>
            <div className={styles.lefttop}>
              <div className={styles.image}>
                <img src="PCIconW.svg" alt="" />
              </div>
              <div className={styles.text}>
                <h2>Tecnologia e Inovação</h2>
                <p>
                  Facilite e agilize os processos do seu negócio através do
                  nosso sistema.
                </p>
              </div>
            </div>
            <div className={styles.righttop}>
              <div className={styles.image}>
                <img src="CentroW.svg" alt="" />
              </div>
              <div className={styles.text}>
                <h2>Informações Centralizadas</h2>
                <p>
                  Visualize os dados dos débitos veículares da sua frota em um
                  único lugar.
                </p>
              </div>
            </div>
            <div className={styles.leftbottom}>
              <div className={styles.image}>
                <img src="LupaIconW.svg" alt="" />
              </div>
              <div className={styles.text}>
                <h2>Monitoramento</h2>
                <p>Acompanhe todo o processo de pagamento dos débitos</p>
              </div>
            </div>
          </div>
          <Link href={'/contato'}>
            <div className={styles.button}>
              <button>Fale conosco</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
