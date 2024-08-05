import styles from "./styles.module.scss";

export default function AssistServices() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <h1>CONSULTA DE DÉBITOS</h1>
            <p>
              Na tela de consulta de débitos, o usuário pode realizar a consulta
              individual de uma placa específica ou a consulta em lote, fazendo
              o upload de uma planilha com os dados dos veículos.
            </p>
          </div>
          <div className={styles.rightside}>
            <img
              src="https://d10fqir6n4h7sq.cloudfront.net/public/macconsulta.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
