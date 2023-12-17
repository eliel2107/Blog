import { useState } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

export default function AssistServices() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>SERVIÇOS</h1>
          </div>
          <div className={styles.middlecontent}>
            <div className={styles.lefttop}>
              <div className={styles.image}>
                <img src="LupaIcon.svg" alt="" />
              </div>
              <div className={styles.text}>
                <h2>CONSULTAS</h2>
                <p>
                  Consulte o valor e data de vencimentos dos débitos de <br />
                  IPVA e Licenciamento.
                </p>
              </div>
            </div>
            <div className={styles.righttop}>
              <div className={styles.image}>
                <img src="PranchetaIcon.svg" alt="" />
              </div>
              <div className={styles.text}>
                <h2>RELATÓRIOS</h2>
                <p>
                  Acompanhe o pagamento dos débitos e extraia relatórios e
                  comprovantes quando precisar.
                </p>
              </div>
            </div>
            <div className={styles.leftbottom}>
              <div className={styles.image}>
                <img src="MoneyIcon.svg" alt="" />
              </div>
              <div className={styles.text}>
                <h2>PAGAMENTOS</h2>
                <p>
                  Solicitação de pagamento dos débitos diretamente pelo sistema.
                </p>
              </div>
            </div>
            <div className={styles.rightbottom}>
              <div className={styles.image}>
                <img src="UploadIcon.svg" alt="" />
              </div>
              <div className={styles.text}>
                <h2>PROCESSAMENTO EM LOTE</h2>
                <p>Consulta e pagamento de débitos em lotes</p>
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
