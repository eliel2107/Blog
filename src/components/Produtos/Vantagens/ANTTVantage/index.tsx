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
                <img src="EquipeIconW.svg" alt="" />
              </div>
              <div className={styles.text}>
                <h2>Processo de Consulta Automatizado</h2>
                <p>
                  Consulte as infrações da ANTT dos seus veículos em uma única
                  plataforma e facilite a gestão da sua frota.
                </p>
              </div>
            </div>
            <div className={styles.righttop}>
              <div className={styles.image}>
                <img src="MoneyIconW.svg" alt="" />
              </div>
              <div className={styles.text}>
                <h2>Controle Financeiro</h2>
                <p>
                  Consulte as infrações na plataforma e possibilite agilidade no
                  processo de pagamento, evitando cadastros no SERASA, CADIN ou
                  Dívida Ativa
                </p>
              </div>
            </div>
            <div className={styles.leftbottom}>
              <div className={styles.image}>
                <img src="VolanteIconW.svg" alt="" />
              </div>
              <div className={styles.text}>
                <h2>Tomada de Decisões</h2>
                <p>
                  Analise o comportamento da sua frota e tome decisões para
                  melhorar a conformidade regulatória e eficiência operacional.
                </p>
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
