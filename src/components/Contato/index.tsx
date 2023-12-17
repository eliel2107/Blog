import styles from './styles.module.scss';

export default function Contato() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <div className={styles.textcontent}>
              <div className={styles.title}>
                <h1>CONTATO</h1>
                <p>
                  Fale com a gente! Um especialista LW está sempre à disposição.
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
            <div className={styles.backgroundContainer}>
              {/* New Background */}

              {/* Original Background */}
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
              <div className={styles.newBackground}>
                {/* Additional content for the new background */}
                {/* ... */}
              </div>
            </div>
            <div className={styles.iconresponsive}>
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
                  <p>contato@lwtecnologia.com</p> <p>ajuda@lwtecnologia.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomcontent}>
          <div className={styles.leftside}>
            <h1>FIQUE POR DENTRO DAS NOVIDADES</h1>
          </div>
          <div className={styles.rightsidebottom}>
            <div className={styles.inputcontainer}>
              <input type="text" placeholder="Digite seu email aqui" />
              <button>Me inscrever</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
