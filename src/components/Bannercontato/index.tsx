import styles from "./styles.module.scss";

export default function Bannercontato() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <div className={styles.title}>
              <h1>
                Entre em contato <br />
                conosco e tire suas dúvidas{" "}
              </h1>
            </div>
          </div>
          <div className={styles.rightside}>
            <div className={styles.email}>
              <img
                src="https://d10fqir6n4h7sq.cloudfront.net/public/emailcont.svg"
                alt=""
              />
              <h1>EMAIL</h1>
              <p>comercial@lwtecnologia.com.br</p>
            </div>
            <div className={styles.phone}>
              <img
                src="https://d10fqir6n4h7sq.cloudfront.net/public/phonecont1.svg"
                alt=""
              />
              <h1>TELEFONE</h1>
              <p>41 3501-8315</p>
            </div>
            <div className={styles.email}>
              <img
                src="https://d10fqir6n4h7sq.cloudfront.net/public/DenIcon.svg"
                alt=""
              />
              <h1>CANAL DE DENÚNCIA</h1>
              <p>compliance@lwtecnologia.com.br</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
