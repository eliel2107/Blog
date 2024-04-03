import styles from './styles.module.scss';

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
              Programa Municipal que está sob a gestão da Agência Curitiba de
              Desenvolvimento, criado com os objetivos de: Fomentar o
              desenvolvimento de empresas de base tecnológica e instituições de
              ciência e tecnologia Difundir a cultura de conhecimento
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
