import styles from './styles.module.scss';

export default function Conhecasobre() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <img src="business.svg" alt="" />
          </div>
          <div className={styles.rightside}>
            <div className={styles.title}>
              <h1>Conheça a LW</h1>
            </div>
            <div className={styles.text}>
              <p>
                Fundada em agosto de 2016 a partir das mentes visionárias de
                dois empreendedores profundamente sintonizados com o panorama da
                gestão de frotas, a nossa jornada combina mais de 25 anos de
                experiência coletiva em documentação de veículos com tecnologia
                de ponta. Essa fusão gera ferramentas que não apenas atendem aos
                nossos parceiros, mas também elevam os processos, proporcionando
                economia, inteligência e agilidade. Originários de Curitiba,
                nosso DNA ressoa na simplificação. Somos os arquitetos de
                soluções que desvendam as complexidades das autoridades fiscais
                e descentralizar as informações dos veículos. Nossa missão?
                Conceder aos gestores e administradores uma autonomia e controle
                sem precedentes sobre os dados da sua frota. Assim, podem
                dedicar o seu foco ao cultivo de uma cultura de segurança e à
                formação contínua dos condutores, melhorando a experiência por
                um trânsito mais seguro e tranquilo. Junte-se a nós na revolução
                do cenário da gestão de frotas, onde a experiência se encontra
                com a inovação, simplificando processos e moldando um futuro
                centrado na segurança e na eficiência.
              </p>
            </div>
            <a href="/solucoes">
              <button>Conheça nossos produtos</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
