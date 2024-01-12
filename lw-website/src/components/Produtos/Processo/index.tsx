import styles from './styles.module.scss';

export default function Processo() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>COMO O PROCESSO É REALIZADO</h1>
          </div>
          <div className={styles.topcontent}>
            <img src="PROCESSO.svg" alt="" />
          </div>
          <div className={styles.responsive}>
            <img src="ProcessoResponsiveW.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
