import Link from "next/link";
import styles from "./styles.module.scss";
import { useState } from "react";

function FounderDescription({ text }: any) {
  const [expanded, setExpanded] = useState(false);
  const maxTextLength = 100;

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.founderDescription}>
      <p>{expanded ? text : `${text.substring(0, maxTextLength)}...`}</p>
      <button className={styles.toggleButton} onClick={toggleExpanded}>
        {expanded ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
          >
            <path
              d="M0.970458 7.97238L8.46781 0.469737C8.53744 0.39998 8.62014 0.344631 8.71118 0.306856C8.80221 0.26908 8.8998 0.24962 8.99836 0.249586C9.09692 0.249551 9.19452 0.268942 9.28559 0.306653C9.37665 0.344364 9.45938 0.399654 9.52906 0.469362L17.0317 7.96672C17.1725 8.1074 17.2516 8.29824 17.2517 8.49726C17.2518 8.69629 17.1728 8.88719 17.0321 9.02797C16.8914 9.16875 16.7006 9.24788 16.5015 9.24795C16.3025 9.24802 16.1116 9.16902 15.9708 9.02834L8.999 2.06049L2.03208 9.03326C1.96243 9.10297 1.87972 9.15827 1.78869 9.19601C1.69766 9.23376 1.60008 9.2532 1.50154 9.25324C1.40299 9.25327 1.3054 9.2339 1.21434 9.19622C1.12329 9.15854 1.04054 9.10329 0.970833 9.03363C0.901127 8.96397 0.845823 8.88127 0.808078 8.79024C0.770334 8.69921 0.750889 8.60163 0.750854 8.50308C0.750819 8.40454 0.770196 8.30695 0.807876 8.21589C0.845556 8.12483 0.900802 8.04209 0.970458 7.97238Z"
              fill="#336699"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
          >
            <path
              d="M17.031 1.53062L9.53104 9.03061C9.46139 9.10035 9.37867 9.15567 9.28762 9.19341C9.19657 9.23115 9.09898 9.25058 9.00042 9.25058C8.90186 9.25058 8.80426 9.23115 8.71321 9.19341C8.62216 9.15567 8.53945 9.10035 8.46979 9.03061L0.969792 1.53062C0.829062 1.38988 0.75 1.19901 0.75 0.99999C0.75 0.800967 0.829062 0.610095 0.969792 0.469364C1.11052 0.328634 1.30139 0.249573 1.50042 0.249573C1.69944 0.249573 1.89031 0.328634 2.03104 0.469364L9.00042 7.43968L15.9698 0.469364C16.0395 0.399682 16.1222 0.344406 16.2132 0.306695C16.3043 0.268983 16.4019 0.249573 16.5004 0.249573C16.599 0.249573 16.6965 0.268983 16.7876 0.306695C16.8786 0.344406 16.9614 0.399682 17.031 0.469364C17.1007 0.539047 17.156 0.621773 17.1937 0.712817C17.2314 0.803862 17.2508 0.901444 17.2508 0.99999C17.2508 1.09854 17.2314 1.19612 17.1937 1.28716C17.156 1.37821 17.1007 1.46093 17.031 1.53062Z"
              fill="#336699"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
function FounderDescription2({ text }: any) {
  const [expanded, setExpanded] = useState(false);
  const maxTextLength = 100;

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.founderDescription}>
      <p>{expanded ? text : `${text.substring(0, maxTextLength)}...`}</p>
      <button className={styles.toggleButton} onClick={toggleExpanded}>
        {expanded ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
          >
            <path
              d="M0.970458 7.97238L8.46781 0.469737C8.53744 0.39998 8.62014 0.344631 8.71118 0.306856C8.80221 0.26908 8.8998 0.24962 8.99836 0.249586C9.09692 0.249551 9.19452 0.268942 9.28559 0.306653C9.37665 0.344364 9.45938 0.399654 9.52906 0.469362L17.0317 7.96672C17.1725 8.1074 17.2516 8.29824 17.2517 8.49726C17.2518 8.69629 17.1728 8.88719 17.0321 9.02797C16.8914 9.16875 16.7006 9.24788 16.5015 9.24795C16.3025 9.24802 16.1116 9.16902 15.9708 9.02834L8.999 2.06049L2.03208 9.03326C1.96243 9.10297 1.87972 9.15827 1.78869 9.19601C1.69766 9.23376 1.60008 9.2532 1.50154 9.25324C1.40299 9.25327 1.3054 9.2339 1.21434 9.19622C1.12329 9.15854 1.04054 9.10329 0.970833 9.03363C0.901127 8.96397 0.845823 8.88127 0.808078 8.79024C0.770334 8.69921 0.750889 8.60163 0.750854 8.50308C0.750819 8.40454 0.770196 8.30695 0.807876 8.21589C0.845556 8.12483 0.900802 8.04209 0.970458 7.97238Z"
              fill="#dff6fd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
          >
            <path
              d="M17.031 1.53062L9.53104 9.03061C9.46139 9.10035 9.37867 9.15567 9.28762 9.19341C9.19657 9.23115 9.09898 9.25058 9.00042 9.25058C8.90186 9.25058 8.80426 9.23115 8.71321 9.19341C8.62216 9.15567 8.53945 9.10035 8.46979 9.03061L0.969792 1.53062C0.829062 1.38988 0.75 1.19901 0.75 0.99999C0.75 0.800967 0.829062 0.610095 0.969792 0.469364C1.11052 0.328634 1.30139 0.249573 1.50042 0.249573C1.69944 0.249573 1.89031 0.328634 2.03104 0.469364L9.00042 7.43968L15.9698 0.469364C16.0395 0.399682 16.1222 0.344406 16.2132 0.306695C16.3043 0.268983 16.4019 0.249573 16.5004 0.249573C16.599 0.249573 16.6965 0.268983 16.7876 0.306695C16.8786 0.344406 16.9614 0.399682 17.031 0.469364C17.1007 0.539047 17.156 0.621773 17.1937 0.712817C17.2314 0.803862 17.2508 0.901444 17.2508 0.99999C17.2508 1.09854 17.2314 1.19612 17.1937 1.28716C17.156 1.37821 17.1007 1.46093 17.031 1.53062Z"
              fill="#dff6fd"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

export default function OsFundadores() {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, erat nec tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, erat nec tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, erat nec tincidunt.";
  const deniseLima =
    "Com mais de 15 anos de experiência no setor de documentação veicular, ocupando consistentemente cargos de liderança, estabeleceu relações diretas com concessionárias e locadoras de veículos. Em 2021, assumiu a responsabilidade pela estruturação da AW DOC Despachante, hoje, LW DOC. Em 2024, foi nomeada Gerente da área de ESG do Grupo LW, alinhando sua preocupação com a responsabilidade social e empresarial junto ao desenvolvimento estratégico da organização.";
  const andersonLima =
    "Trabalhou por mais de 20 anos no ramo de despachante de Trânsito, atendendo Locadoras, Transportadoras, Financeiras, Leilão e Concessionárias de veículos. Durante mais de 17 anos, foi responsável e cooperou no desenvolvimento de projetos, reestruturação de equipes, setores e gestão de pessoas. Sócio fundador do Grupo LW, ajudou no desenvolvimento de um Software para Gestão de Multas que atua de forma ativa e preventiva, consultando de forma sistêmica os débitos de Multas dos veículos em diversos órgãos de trânsito simultaneamente. Hoje, um dos principais produtos comercializados pelo Grupo LW.";
  const willian =
    "Graduado em Ciências Aeronáuticas pela Universidade Tuiuti do Paraná e Gestão de Empresas pelo Centro Europeu. Iniciou a carreira profissional em 2006 no ramo de despachante e atuou em áreas como operações de atendimento ao cliente, financeiro, processos de TI (desenvolvimento de sistemas). Sócio fundador do Grupo LW, foi responsável pelo desenvolvimento de todos os sistemas e estruturação administrativa e financeira";
  const alessandraMachado =
    "Possui mais de 10 anos de experiência no ramo de documentação veicular e, ao longo dos anos, desenvolveu habilidades sólidas em atendimento ao cliente e trabalho em equipe. Em 2022 assumiu o desafio de uma nova posição de Supervisora no Grupo LW. Durante esse tempo, aprimorou a área implementando indicadores de SLA e ferramentas de análises de dados. Realizou a elaboração de relatórios para apresentação de resultados e aperfeiçoou projetos, sempre focada em estratégias eficazes para assegurar que as operações sejam realizadas de maneira produtiva, visando garantir rentabilidade e crescimento sustentável.";
  const caioLeandro =
    "Formado em Logística, com MBA em Gestão de Negócios, pós-graduação em Negócios Digitais, Green Belt e Six Sigma. Possui experiência de 20 anos em Gestão de Equipes e áreas como Terceirização de Frota, Atendimento ao Cliente e Tecnologia. Foi responsável pela abertura de uma locadora do grupo VW, liderando desde o Business Case até a aplicação dos processos operacionais e de segurança. Realizou a estruturação da equipe Comercial do Grupo LW, além do planejamento de negócios e implementação de procedimentos de venda e atendimento ao cliente. Introduziu programas de qualidade, obtendo certificações de excelência. Além disso, é especialista em implementações de sistemas de tecnologia e gestão de grandes contas, incluindo manutenção, diesel e pneus.";
  const daniely =
    "Com mais de 15 anos de experiência em liderança tanto em empresas nacionais quanto multinacionais, assumiu desafios como Head em diversas áreas-chave, incluindo Atendimento ao Cliente, Serviços, Pós Vendas, Customer Experience e Projetos. Possui amplo conhecimento em toda a jornada do cliente, desde a área comercial até operações, e significativa experiência em planejamento, execução e gerenciamento de implantação de novos produtos. Participou ativamente de processos de M&A, atuando desde as melhorias sistêmicas, políticas organizacionais e retenção de clientes, e incluindo experiência em Omnichannel. Com habilidade na formação de equipes de alto desempenho, focadas na qualidade e no atendimento ao cliente. Além disso, possui experiência internacional no atendimento a clientes premium.";
  const alessandra =
    "Gestão e estruturação de equipes estratégicas em empresas nacionais e multinacionais do setor automotivo. Com formação em Gestão Estratégica de Pessoas e Gerenciamento de Equipes de Alta Performance, Psicologia Organizacional e certificações em Leader Coach e Analista Comportamental, especialista em diversas áreas, incluindo gestão de clima organizacional, treinamento e desenvolvimento, recrutamento e seleção, gestão de desempenho e plano de carreira. Seus conhecimentos abrangem desde a construção de diagnósticos organizacionais, desenvolvimento de trilha de carreira e implantação de programas de plano de sucessão. Possui habilidade na facilitação de treinamentos técnicos e comportamentais, análises de indicadores de RH e condução de processos de feedback e feedforward.";
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Os Fundadores</h1>
        </div>
        <div className={styles.founderContent}>
          <div className={styles.founderCard}>
            <div className={styles.founderImg}>
              <img src="/founder.jpeg" alt="" />
            </div>
            <div className={styles.founderName}>
              <h2>Fundador</h2>
            </div>
            <div className={styles.founderName}>
              <h2>Willian Werle</h2>
            </div>
            <FounderDescription text={willian} />
          </div>
          <div className={styles.founderCard}>
            <div className={styles.founderImg}>
              <img src="/founder2.jpeg" alt="" />
            </div>
            <div className={styles.founderName}>
              <h2>Fundador</h2>
            </div>
            <div className={styles.founderName}>
              <h2>Anderson Lima</h2>
            </div>
            <FounderDescription text={andersonLima} />
          </div>
        </div>
      </div>
      <div className={styles.title1}>
        <h1>Conheça nossos Diretores!</h1>
      </div>
      <div className={styles.CEOcontainer3}>
        <div className={styles.CEOcontent3}>
          <div className={styles.leftSide}>
            <img src="ceo.jpeg" alt="" />
          </div>
          <div className={styles.rightSide}>
            <h1>CEO</h1>
            <h2>Herbert Souza</h2>
            <p>
              Profissional experiente no setor de transporte e logística, com um
              histórico comprovado de sucesso em inovação e crescimento. Possui
              vasta experiência em Finanças, abrangendo áreas como
              Controladoria, Tesouraria, Relações com Investidores, Recursos
              Humanos, Gestão de Riscos em TI e Governança Corporativa. Atuou em
              empresas de médio e grande porte, participando ativamente dos
              principais comitês decisórios e desempenhando um papel crucial no
              relacionamento bancário e com investidores institucionais. Além
              disso, tem uma sólida experiência em trabalhar com equipes
              multidisciplinares e internacionais em projetos globais no Brasil.
              Entre seus destaques, está a implementação da start-up de locação
              do grupo VW e a idealização do projeto de Orçamento Base Zero
              (OBZ) na VWFS Brasil. Sua capacidade de liderar e inovar tem sido
              fundamental para o sucesso das organizações em que atuou.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.CEOcontainer2}>
        <div className={styles.CEOcontent2}>
          <div className={styles.leftSide}>
            <img src="cto.jpeg" alt="" />
          </div>
          <div className={styles.rightSide}>
            <h1>CTO</h1>
            <h2>Anderson Rosa</h2>
            <p>
              Graduado em Sistemas da Informação pela UTFPR com Especialização
              em Data Science & Big Data pela Universidade Positivo e Liderança
              pela Fundação Dom Cabral. Possui mais de 15 anos de experiência na
              área de tecnologia da informação onde já liderou diversos projetos
              e iniciativas na área de TI como: Desenvolvimento de Softwares,
              Data Analytics, Business Intelligence, Infraestrutura de TI, ERPs,
              Segurança da Informação, Governança de TI, Omnichannel, Cloud, em
              ambientes de alta disponibilidade e produtos digitais.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.CEOcontainer3}>
        <div className={styles.CEOcontent3}>
          <div className={styles.leftSide}>
            <img src="cfo.jpeg" alt="" />
          </div>
          <div className={styles.rightSide}>
            <h1>CFO</h1>
            <h2>Oliver Baptista</h2>
            <p>
              Formado em Gestão Empresarial com MBA em Finanças e Controladoria
              e MBA em Governança, Risco e Compliance. Possui mais de 20 anos de
              experiência na área de Finanças e Controladoria com atuação em
              diversos segmentos como Indústria, Logística, Bancário e de
              Serviços. Desses, mais de 15 anos ocupou posições de liderança a
              frente de importantes projetos e alavancagem da área de Finanças,
              como implantações de ERP, automações de processos, criação e
              implantação de Business Intelligence, estruturas de Funding e de
              FP&A e Reports, além de estruturação, acompanhamento e realização
              de Business Plan, implantações de novos negócios e produtos,
              atingindo consideráveis ganhos financeiros por projetos de
              economia e aumento de rentabilidade, entre outros. Destaca-se a
              experiência de mais de 5 anos no setor de mobilidade, onde
              desempenhou importante papel na criação e consolidação de um
              grande player de locação do país, o qual estava à frente de toda a
              área de Backoffice.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.gestoresContainer}>
        <div className={styles.gestoresContent}>
          <div className={styles.title}>
            <h1>Conheça nossos Gestores</h1>
          </div>
          <div className={styles.founderContent1}>
            <div className={styles.founderCard1}>
              <div className={styles.founderImg1}>
                <img src="/esgGerente.jpeg" alt="" />
              </div>
              <div className={styles.founderName}>
                <h2>Gerente de ESG</h2>
              </div>
              <div className={styles.founderName}>
                <h2>Denise Lima</h2>
              </div>
              <FounderDescription2 text={deniseLima} />
            </div>
            <div className={styles.founderCard1}>
              <div className={styles.founderImg1}>
                <img src="/sa.jpeg" alt="" />
              </div>
              <div className={styles.founderName}>
                <h2>
                  Gerente <br />
                  Administrativa{" "}
                </h2>
              </div>
              <div className={styles.founderName}>
                <h2>Alessandra Machado</h2>
              </div>
              <FounderDescription2 text={alessandraMachado} />
            </div>
            <div className={styles.founderCard1}>
              <div className={styles.founderImg1}>
                <img src="/sc.jpeg" alt="" />
              </div>
              <div className={styles.founderName}>
                <h2>
                  Superintendente <br />
                  Comercial
                </h2>
              </div>
              <div className={styles.founderName}>
                <h2>Caio Leandro</h2>
              </div>
              <FounderDescription2 text={caioLeandro} />
            </div>
          </div>
          <div className={styles.founderContent2}>
            <div className={styles.founderCard2}>
              <div className={styles.founderImg1}>
                <img src="/gn.jpeg" alt="" />
              </div>
              <div className={styles.founderName}>
                <h2>Gerente de Negócios</h2>
              </div>
              <div className={styles.founderName}>
                <h2>Daniely Marusca</h2>
              </div>
              <FounderDescription2 text={daniely} />
            </div>
            <div className={styles.founderCard1}>
              <div className={styles.founderImg1}>
                <img src="/gr.jpeg" alt="" />
              </div>
              <div className={styles.founderName}>
                <h2>Gerente de RH</h2>
              </div>
              <div className={styles.founderName}>
                <h2>Alessandra Carvalho</h2>
              </div>
              <FounderDescription2 text={alessandra} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
