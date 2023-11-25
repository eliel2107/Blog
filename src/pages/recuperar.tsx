import { useState } from 'react';
import styles from './recuperar.module.scss';

export default function Recuperar() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
      <section className={styles.container}>
        <div className={styles.leftside}>
          <div className={styles.logo}>
            <img src="LOGOLW.svg" alt="" />
          </div>
          <div className={styles.socials}>
            <img src="fbr.svg" alt="" />
            <img src="igr.svg" alt="" />
            <img src="ttr.svg" alt="" />
          </div>
        </div>
        <div className={styles.rightside}>
          <div className={styles.title}>
            <h1>Recuperar Senha</h1>
            <p>Informe seu email de cadastro</p>
            <div className={styles.formblock}>
              <form>
                <div className={styles.flexInput}>
                  <p>Email</p>
                  <input placeholder="Email" type="email" />
                </div>

                <div className={styles.button}>
                  <button type="submit">Enviar link de recuperação</button>
                </div>
                <div className={styles.divisor}></div>
                <div className={styles.create}>
                  <h4>Voltar ao login</h4>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
