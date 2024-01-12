import { useState } from 'react';
import styles from './login.module.scss';
import Link from 'next/link';

export default function Login() {
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
            <img src="fbicon.svg" alt="" />
            <img src="igicon.svg" alt="" />
            <img src="tticon.svg" alt="" />
          </div>
        </div>
        <div className={styles.rightside}>
          <div className={styles.title}>
            <div className={styles.logoR}>
              <img src="LWLOGOB.png" alt="" />
            </div>
            <h1>Login</h1>
            <p>Informe seu acesso para entrar</p>
            <div className={styles.formblock}>
              <form>
                <div className={styles.flexInput}>
                  <p>Email</p>
                  <input placeholder="Email" type="email" />
                </div>
                <div className={styles.flexInput}>
                  <p>Senha</p>
                  <input
                    placeholder="Senha"
                    type={passwordVisible ? 'text' : 'password'}
                  />
                </div>
                <div className={styles.forgot}>
                  <Link href={'/recuperar'}>
                    <p>Esqueci minha senha</p>
                  </Link>
                </div>
                <div className={styles.button}>
                  <button type="submit">Entrar</button>
                </div>
                <div className={styles.divisor}></div>
                <div className={styles.create}>
                  <p>Ainda não tem uma conta?</p>
                  <Link href={'/cadastro'}>
                    <h4>Criar conta</h4>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
