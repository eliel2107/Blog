import Link from 'next/link';
import styles from './styles.module.scss';

export default function AssistServices() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <img src="multasiphone.png" alt="" />
          </div>
          <div className={styles.rightside}>
            <h1>Faça um upgrade do seu plano</h1>
            <p>Com nosso app você pode:</p>

            <div className={styles.check}>
              <img src="iconrel.png" alt="" />
              <p>
                Realizar a indicação do condutor sem a necessidade de imprimir
                ou assinar nenhum documento;
              </p>
            </div>
            <div className={styles.check}>
              <img src="iconrel.png" alt="" />
              <p>
                Consultar e visualizar as infrações relacionadas ao veículo;
              </p>
            </div>
            <div className={styles.check}>
              <img src="iconrel.png" alt="" />
              <p>Cadastrar novos condutores;</p>
            </div>
            <div className={styles.check}>
              <img src="iconrel.png" alt="" />
              <p>Receber avisos de inconsistências de dados;</p>
            </div>
            <div className={styles.check}>
              <img src="iconrel.png" alt="" />
              <p>
                Acessar o documento digital do veículo de forma rápida e
                prática.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
