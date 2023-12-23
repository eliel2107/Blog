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
                <h2>LW PRÉ-VENDA</h2>
                <p>
                  Seu principal objetivo é agilizar o processo de venda e
                  transferência de propriedade do veículo, tornando-o simples e
                  eficiente.
                </p>
                <p>
                  Esse produto foi projetado para fornecer informações
                  detalhadas sobre pendências de veículos, como:
                </p>
              </div>
              <div className={styles.top}>
                <div className={styles.serviceslefttop}>
                  <img src="./lefttop.gif" alt="" />

                  <p>Infrações</p>
                </div>
                <div className={styles.servicesrighttop}>
                  <img src="./righttop.gif" alt="" />

                  <p>Impedimentos</p>
                </div>
              </div>
              <div className={styles.bottom}>
                <div className={styles.servicesrightbottom}>
                  <img src="./rightbottom.gif" alt="" />

                  <p>Restrições</p>
                </div>
                <div className={styles.servicesleftbottom}>
                  <img src="./leftbottom.gif" alt="" />

                  <p>Proprietário</p>
                </div>
              </div>

              <div className={styles.button}>
                <div className={styles.serviceslefttop}>
                  <img src="./lefttop.gif" alt="" />

                  <p>Status de transferência</p>
                </div>
                <Link href={'/contato'}>
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
