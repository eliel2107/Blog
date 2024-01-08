import Link from 'next/link';
import styles from './styles.module.scss';

export default function Transportadora() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.rightside}>
            <div className={styles.serviços}>
              <div className={styles.title}>
                <h2>LW ASSIST</h2>
                <p>
                  Esse produto foi projetado visando o atendimento de emergência
                  via pronta-resposta nacional, como:
                </p>
              </div>
              <div className={styles.top}>
                <div className={styles.serviceslefttop}>
                  <img src="./lefttop.gif" alt="" />

                  <p>Recuperação de Veículos e Ativos</p>
                </div>
                <div className={styles.servicesrighttop}>
                  <img src="./righttop.gif" alt="" />

                  <p>Atendimento a Apropriação Indébita</p>
                </div>
              </div>
              <div className={styles.bottom}>
                <div className={styles.servicesrightbottom}>
                  <img src="./rightbottom.gif" alt="" />

                  <p>Antenistas (T-Hunter´s RF)</p>
                </div>
                <div className={styles.servicesleftbottom}>
                  <img src="./leftbottom.gif" alt="" />

                  <p>Central de Emergência 24h e As A Service</p>
                </div>
              </div>
              <div className={styles.top2}>
                <div className={styles.serviceslefttop}>
                  <img src="./lefttop.gif" alt="" />

                  <p>Acompanhamento Velado e Preservação</p>
                </div>
                <div className={styles.servicesrighttop}>
                  <img src="./righttop.gif" alt="" />

                  <p>Oitivas e Sindicância</p>
                </div>
              </div>
              <div className={styles.button}>
                <Link className={styles.buttonLink} href={'/contato'}>
                  <button>Saiba mais</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
