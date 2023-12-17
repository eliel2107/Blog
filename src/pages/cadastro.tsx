import { useState } from 'react';
import styles from './cadastro.module.scss';
import Link from 'next/link';

export default function Cadastro() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
      <section className={styles.container}>
        <div className={styles.leftside}>
          <div className={styles.title}>
            <div className={styles.logoR}>
              <img src="LWLOGOB.png" alt="" />
            </div>
            <h1>Criar conta</h1>
            <p>Preencha abaixo para criar a conta</p>

            <div className={styles.formblock}>
              <form>
                <div className={styles.flexInput}>
                  <p>Seu nome</p>
                  <input placeholder="Nome completo" type="email" />
                </div>
                <div className={styles.flexInput}>
                  <p>Email</p>
                  <input placeholder="Email" type="email" />
                </div>{' '}
                <div className={styles.flexInput}>
                  <p>Senha</p>
                  <input placeholder="*******" type="email" />
                </div>{' '}
                <div className={styles.flexInput}>
                  <p>Confirmar senha</p>
                  <input placeholder="*******" type="email" />
                </div>
                <div className={styles.button}>
                  <button type="submit">Criar conta</button>
                </div>
                <div className={styles.divisor}></div>
                <div className={styles.create}>
                  <p>Já possui uma conta?</p>
                  <Link href={'/login'}>
                    <h4>Fazer login</h4>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.rightside}>
          <div className={styles.logo}>
            <img src="LOGOLW.svg" alt="" />
          </div>
          <div className={styles.socials}>
            <img src="fbicon.svg" alt="" />
            <img src="igicon.svg" alt="" />
            <img src="tticon.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
