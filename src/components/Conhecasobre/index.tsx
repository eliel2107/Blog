import Link from "next/link";
import styles from "./styles.module.scss";

export default function Conhecasobre() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <img
              src="https://d10fqir6n4h7sq.cloudfront.net/public/fotos/Escritorio2.jpg"
              alt=""
            />
          </div>
          <div className={styles.rightside}>
            <div className={styles.title}>
              <h1>Conheça a LW</h1>
            </div>
            <div className={styles.text}>
              <p>
                Fundado em agosto de 2016, o Grupo LW é uma empresa líder em
                gestão de frotas que combina expertise de mais de 25 anos em
                documentação veicular com tecnologia de ponta. Com sede em
                Curitiba, somos pioneiros na simplificação dos processos
                relacionados à gestão de multas, documentos e débitos
                veiculares, além de oferecer soluções avançadas de monitoramento
                e rastreamento veicular. Nossa missão é proporcionar aos
                gestores uma autonomia e controle sem precedentes sobre os dados
                de suas frotas, permitindo-lhes concentrar-se na segurança e na
                formação contínua dos condutores. Com ferramentas inovadoras,
                não apenas atendemos às necessidades de nossos parceiros, mas
                também elevamos seus processos, proporcionando economia,
                inteligência e agilidade. Junte-se a nós na revolução da gestão
                de frotas, onde experiência se encontra com inovação.
                Simplificamos processos e moldamos um futuro centrado na
                segurança e na eficiência, melhorando a experiência para um
                trânsito mais seguro e tranquilo.
              </p>
            </div>
            <Link href="/debitos">
              <button>Conheça nossos produtos</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
