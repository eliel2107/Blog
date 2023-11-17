import styles from './styles.module.scss';

export default function Contato() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <div className={styles.textcontent}>
              <div className={styles.title}>
                <h1>FALE CONOSCO,ADORAREMOS TE RESPONDER.</h1>
                <p>
                  Mantenha-se atualizado com as últimas notícias e tendências no
                  mundo da gestão de frotas
                </p>
              </div>
              <div className={styles.icon}>
                <div className={styles.addres}>
                  <div className={styles.map}>
                    <img src="map.svg" alt="" />
                  </div>{' '}
                  <div className={styles.location}>
                    <h1>Endereço</h1>{' '}
                    <p>401 Broadway, 24th Floor, Orchard Cloud View, London</p>
                  </div>
                </div>
                <div className={styles.email}>
                  <div className={styles.lettter}>
                    <img src="letter.svg" alt="" />
                  </div>
                  <div className={styles.contatos}>
                    <h1>Nossos contatos</h1>
                    <p>contato@lwtecnologia.com</p>{' '}
                    <p>ajuda@lwtecnologia.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightside}>
            <div className={styles.background}>
              <div className={styles.title}>
                <h2>Entre em contato conosco</h2>
              </div>

              <div className={styles.name}>
                <h3> Nome completo</h3>
                <input type="text" placeholder="Escreva aqui seu nome..." />
              </div>
              <div className={styles.contactemail}>
                <h3>Email*</h3>
                <input type="text" placeholder="exemplo@mail.com" />
              </div>

              <div className={styles.phone}>
                <h3>Telefone*</h3>
                <input type="text" placeholder="61 99999-9999" />
              </div>
              <div className={styles.message}>
                <h3>Mensagem*</h3>{' '}
                <input
                  type="text"
                  placeholder="Nos conte um pouco sobre sua demanda..."
                />
              </div>
              <div className={styles.send}>
                <button>Enviar</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomcontent}>
          <div className={styles.leftside}></div>
          <div className={styles.rightside}></div>
        </div>
      </section>
    </>
  );
}
