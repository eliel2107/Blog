import Link from "next/link";
import styles from "./styles.module.scss";

export default function Transportadora() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.rightside}>
            <div className={styles.serviços}>
              <div className={styles.title}>
                <h2>LW DOC</h2>
                <p>
                  É uma plataforma desenvolvida para simplificar a gestão de
                  documentação da sua frota através da tecnologia, fornecendo:
                </p>
              </div>
              <div className={styles.top}>
                <div className={styles.serviceslefttop}>
                  <img
                    src="https://d10fqir6n4h7sq.cloudfront.net/public/./lefttop.gif"
                    alt=""
                  />

                  <p>Sistema exclusivo</p>
                </div>
                <div className={styles.servicesrighttop}>
                  <img
                    src="https://d10fqir6n4h7sq.cloudfront.net/public/./righttop.gif"
                    alt=""
                  />

                  <p>Agilidade no processo</p>
                </div>
              </div>
              <div className={styles.bottom}>
                <div className={styles.servicesrightbottom}>
                  <img
                    src="https://d10fqir6n4h7sq.cloudfront.net/public/./rightbottom.gif"
                    alt=""
                  />

                  <p>API e Integrações</p>
                </div>
                <div className={styles.servicesleftbottom}>
                  <img
                    src="https://d10fqir6n4h7sq.cloudfront.net/public/./leftbottom.gif"
                    alt=""
                  />

                  <p>Download de imagem do processo a qualquer momento</p>
                </div>
              </div>
              <Link href={"/contato"}>
                <div className={styles.button}>
                  <button>Saiba mais</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
