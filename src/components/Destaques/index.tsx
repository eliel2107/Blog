import styles from './styles.module.scss';

export default function Destaques() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.topcontent}>
            <h1>DESTAQUES</h1>
            <p>
              Mantenha-se atualizado com as últimas notícias e tendências no
              mundo da gestão de frotas
            </p>
          </div>
          <div className={styles.Theme}>
            <div className={styles.leftside}>
              <img src="Van.png" alt="" />
              <div className={styles.Underpicture}>
                <button>Evento</button>
                <p>Leia em 5 Minutos</p>
              </div>
              <div className={styles.textleft}>
                <h1>Tipos de frotas: conheça as características de cada uma</h1>
                <p>
                  Uma frota se caracteriza pelo conjunto de veículos que estão a
                  serviço de uma empresa. É comum vermos as frotas de caminhões,
                  mas além delas há diversos outros tipos de frotas. Cada tipo
                  possui suas próprias características e modelos de veículos
                  para...
                </p>
              </div>
            </div>
            <div className={styles.rightside}>
              <div className={styles.Toptheme}>
                <div className={styles.theme1}>
                  <img src="Terno.png" alt="" />
                  <div className={styles.textcontent}>
                    <div className={styles.botaoevento}>
                      <button>Evento</button>
                      <p>Leia em 5 minutos</p>
                    </div>
                    <h1>
                      COMO FAZER DESMOBILIZAÇÃO DE FROTA DE FORMA EFICIENTE?
                    </h1>
                  </div>
                </div>

                <div className={styles.theme2}>
                  <img src="Documento.png" alt="" />
                  <div className={styles.textcontent2}>
                    <div className={styles.botaoevento}>
                      <button>Evento</button> <p>Leia em 5 minutos</p>
                    </div>
                    <h1>
                      O QUE É LICENCIAMENTO DE VEÍCULO? ENTENDA SUA IMPORTÂNCIA
                    </h1>
                  </div>
                </div>
              </div>
              <div className={styles.Bottomtheme}>
                <div className={styles.theme3}>
                  <img src="Caminhao.png" alt="" />
                  <div className={styles.textcontent3}>
                    <div className={styles.botaoevento}>
                      <button>Evento</button> <p>Leia em 5 minutos</p>
                    </div>
                    <h1>
                      COMO MELHORAR A GESTÃO DE FROTAS DE SUA EMPRESA? DICAS{' '}
                    </h1>
                  </div>
                </div>
                <div className={styles.theme4}>
                  <img src="Grass.png" alt="" />
                  <div className={styles.textcontent4}>
                    <div className={styles.botaoevento}>
                      <button>Evento</button> <p>Leia em 5 minutos</p>
                    </div>
                    <h1>
                      O QUE É V2X? SAIBA TUDO SOBRE A NOVA EVOLUÇÃO NOS
                      TRANSPORTES
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
