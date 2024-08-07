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
                  src="https://d10fqir6n4h7sq.cloudfront.net/public/EquipeIconW.svg"
                  alt=""
                />
              </div>
              <div className={styles.text}>
                <h2>Processo de Consulta Automatizado</h2>
                <p>
                  Consulte as infrações dos seus veículos em uma única
                  plataforma e facilite a gestão da sua frota.
                </p>
              </div>
            </div>
            <div className={styles.righttop}>
              <div className={styles.image}>
                <img
                  src="https://d10fqir6n4h7sq.cloudfront.net/public/DownloadIconW.svg"
                  alt=""
                />
              </div>
              <div className={styles.text}>
                <h2>Recebimento Antecipado das Infrações</h2>
                <p>
                  Gerencie e otimize seus processos através dos dados fornecidos
                </p>
              </div>
            </div>
            <div className={styles.leftbottom}>
              <div className={styles.image}>
                <img
                  src="https://d10fqir6n4h7sq.cloudfront.net/public/IntegraçãoIconW.svg"
                  alt=""
                />
              </div>
              <div className={styles.text}>
                <h2>Equipe Especializada no Processo de Indicação</h2>
                <p>
                  Análise de documentação focada na identificação de erros antes
                  do envio ao órgão responsável, auxiliando na prevenção de
                  NICs.
                </p>
              </div>
            </div>
            <div className={styles.rightbottom}>
              <div className={styles.image}>
                <img
                  src="https://d10fqir6n4h7sq.cloudfront.net/public/MoneyIconW.svg"
                  alt=""
                />
              </div>
              <div className={styles.text}>
                <h2>Equipe Especializada no Processo de Pagamento</h2>
                <p>
                  Agilidade na quitação de infrações, possibilitando pagamentos
                  com 20% de desconto e resultando em economia significativa
                  para a sua empresa.
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
