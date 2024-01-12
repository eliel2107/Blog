import Link from 'next/link';
import styles from './styles.module.scss';

export default function AssistServices() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <img src="relatoriosmac.png" alt="" />
          </div>
          <div className={styles.rightside}>
            <h1>RELATÓRIOS</h1>
            <p>
              Com os relatórios, o usuário pode acompanhar o pagamentos dos
              débitos e ter acesso quando precisar aos relatórios e comprovantes
              bancários diretamente pelo sistema.
            </p>
            <p>Relatórios disponiveis:</p>
            <div className={styles.check}>
              <img src="iconrel.png" alt="" />
              <p>Relatório de consultas realizadas.</p>
            </div>
            <div className={styles.check}>
              <img src="iconrel.png" alt="" />
              <p>Relatório de pagamentos solicitados e realizados pela LW.</p>
            </div>
            <div className={styles.check}>
              <img src="iconrel.png" alt="" />
              <p>Relatório de pagamentos recusados</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
