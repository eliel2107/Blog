import styles from "./styles.module.scss";

export default function Mobilidade() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <img src="/TECNO.svg" alt="" />
          </div>
          <div className={styles.rightside}>
            <h1>Curitiba Tecnoparque</h1>
            <p>
              Somos parte do programa de inovação e desenvolvimento do
              Tecnoparque de Curitiba.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
