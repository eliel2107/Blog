import Link from "next/link";
import styles from "./styles.module.scss";

export default function AssistServices() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>VANTAGENS</h1>
          </div>
          <div className={styles.middlecontent}>
            <div className={styles.lefttop}>
              <div className={styles.image}>
                <img
                  src="https://d10fqir6n4h7sq.cloudfront.net/public/PCIconW.svg"
                  alt=""
                />
              </div>
              <div className={styles.text}>
                <h2>Sistema de Documentação</h2>
                <p>
                  Acompanhe e gerencie seus processos através de um sistema
                  exclusivo.
                </p>
              </div>
            </div>
            <div className={styles.righttop}>
              <div className={styles.image}>
                <img
                  src="https://d10fqir6n4h7sq.cloudfront.net/public/APIIcon.svg"
                  alt=""
                />
              </div>
              <div className={styles.text}>
                <h2>Integrações e API</h2>
                <p>
                  Tenha os dados necessários dentro da sua própria plataforma.
                </p>
              </div>
            </div>
            <div className={styles.leftbottom}>
              <div className={styles.image}>
                <img
                  src="https://d10fqir6n4h7sq.cloudfront.net/public/UploadIconW.svg"
                  alt=""
                />
              </div>
              <div className={styles.text}>
                <h2>Agilidade nos processos</h2>
                <p>Tenha mais agilidade nos serviços através da tecnologia.</p>
              </div>
            </div>
            <div className={styles.rightbottom}>
              <div className={styles.image}>
                <img
                  src="https://d10fqir6n4h7sq.cloudfront.net/public/EquipeIconW.svg"
                  alt=""
                />
              </div>
              <div className={styles.text}>
                <h2>Equipe de Desenvolvimento</h2>
                <p>
                  Nosso sistema é desenvolvido por uma equipe própria que está
                  pronta para atender as demandas e melhorias.
                </p>
              </div>
            </div>
          </div>
          <Link href={"/contato"}>
            <div className={styles.button}>
              <button>Fale conosco</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
