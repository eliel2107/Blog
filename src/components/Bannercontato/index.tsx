import styles from './styles.module.scss';

export default function Bannercontato() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <div className={styles.title}>
              <h1>
                Entre em contato <br />
                conosco e tire suas dúvidas{' '}
              </h1>
            </div>
          </div>
          <div className={styles.rightside}>
            <div className={styles.email}>
              <img src="emailcont.svg" alt="" />
              <h1>EMAIL</h1>
              <p>Info@lwtecnologia.com</p>
            </div>
            <div className={styles.phone}>
              <img src="phonecont1.svg" alt="" />
              <h1>TELEFONE</h1>
              <p>11 99999-9999</p>
            </div>
            <div className={styles.email}>
              <img src="DenIcon.svg" alt="" />
              <h1>CANAL DE DENÚNCIA</h1>
              <p>compliance@lwtecnologia.com.br</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
