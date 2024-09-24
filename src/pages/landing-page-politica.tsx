import "swiper/swiper-bundle.css";
import styles from "../styles/landing-page.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import { useEffect, useState } from "react";
import Link from "next/link";
SwiperCore.use([Pagination]);

export default function LandingPage() {
  const handleGotoForm = () => {
    window.location.href = "/landing-page-form";
  };
  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        const sectionToRemove1 = document.getElementById(
          "bricks-component-RhBWLcUL9wEqpIyJF77xrw"
        );
        const sectionToRemove2 = document.getElementById(
          "rd-floating_button-l9ohyb60"
        );

        if (sectionToRemove1) {
          sectionToRemove1.remove();
          console.log("bricks-component-RhBWLcUL9wEqpIyJF77xrw removed");
        }

        if (sectionToRemove2) {
          sectionToRemove2.remove();
          console.log("rd-floating_button-l9ohyb60 removed");
        }

        // After removing the elements, adjust the header's top position
        if (!sectionToRemove1 && !sectionToRemove2) {
          const headerContainer = document.querySelector(
            `.${styles.header}`
          ) as HTMLElement;

          if (headerContainer) {
            headerContainer.style.top = "0px";
            console.log("Header top set to 0px.");
          }
        }
      });
    });

    // Start observing the body for DOM changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect(); // Stop observing when the component unmounts
    };
  }, []);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check if window width is less than or equal to 768px
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener on mount
    window.addEventListener("resize", handleResize);

    // Check the initial width on mount
    handleResize();

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleGoHome = () => {
    window.location.href = "/landing-page";
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <img src="/grupo.png" alt="" onClick={handleGoHome} />

            <button onClick={handleGotoForm}>Experimente Grátis</button>
          </div>
        </div>
        <div className={styles.privacyPolicy}>
          <div className={styles.privacyPolicyContent}>
            <h1>Política de Privacidade</h1>
            <p>
              Documento de Diretrizes para Privacidade e Tratamento de Dados
            </p>

            <h2>1. Objetivo</h2>
            <p>
              Esta política tem como objetivo manifestar seu compromisso com os
              seus colaboradores, fornecedores, clientes e sociedade em relação
              à proteção e a privacidade de dados no desempenho de suas
              atividades.
            </p>

            <h2>2. Abrangência</h2>
            <p>
              Esta normativa aplica-se a todos os colaboradores, terceiros,
              prestadores de serviços, bem como a todas as pessoas jurídicas
              e/ou físicas agindo em nome do Grupo LW.
            </p>

            <h2>3. Diretrizes</h2>
            <h3>3.1 Compromisso do Grupo LW</h3>
            <p>
              O Grupo LW tem implementado, em conformidade com a legislação de
              proteção de dados, medidas técnicas e organizacionais adequadas
              para garantir a segurança dos dados pessoais tratados. Além disso,
              temos instância responsável pela gestão da privacidade, que tem à
              frente o DPO nomeado, encarregado pelo monitoramento e garantia do
              cumprimento das normas de proteção e privacidade de dados
              pessoais.
            </p>
            <ul>
              <li>
                <strong>3.1.1</strong> Compromete-se a proteger os direitos e
                liberdades dos titulares de dados e garantir que os dados
                pessoais sejam tratados com a máxima transparência possível.
              </li>
              <li>
                <strong>3.1.2</strong> Tratar somente os dados pessoais
                necessários para cumprimento de suas atividades diárias.
              </li>
              <li>
                <strong>3.1.3</strong> Entender que todos os dados e informações
                pessoais são alguns dos ativos mais importantes de uma
                organização.
              </li>
              <li>
                <strong>3.1.4</strong> Prezar tanto a privacidade, quanto a
                segurança das informações dos titulares de dados.
              </li>
              <li>
                <strong>3.1.5</strong> Exigir dos terceiros o mesmo zelo, sigilo
                e prudência quanto à proteção e privacidade das informações.
              </li>
              <li>
                <strong>3.1.6</strong> Aplicar os melhores esforços para
                garantir que terceiros que trabalhem com o Grupo LW cumpram esta
                política.
              </li>
              <li>
                <strong>3.1.7</strong> Estabelecer controles para que nenhum
                terceiro possa acessar dados pessoais sem contrato de
                confidencialidade.
              </li>
            </ul>

            <h3>3.2 Tratamento dos Dados Pessoais e Direitos do Titular</h3>
            <p>
              Os direitos assegurados aos titulares de dados pessoais pela
              legislação estão elencados abaixo e podem ser exercidos através do
              contato com nossa área de proteção de dados:
            </p>
            <ul>
              <li>
                Confirmar a existência de tratamento, saber quais dados são
                tratados, solicitar correções ou exclusão de dados.
              </li>
              <li>
                Saber as entidades públicas e privadas com as quais
                compartilhamos seus dados.
              </li>
            </ul>

            <h3>3.3 Transmissão e Compartilhamento dos Dados Pessoais</h3>
            <p>
              Seus dados pessoais só poderão ser transmitidos/compartilhados
              para fins diretamente relacionados com as funções e atividades do
              Grupo LW, em conformidade com a legislação.
            </p>

            <h3>3.4 Quais Dados são Tratados pelo Grupo LW</h3>
            <p>
              As informações coletadas podem incluir: nome, email, telefone,
              endereço, cidade, estado, RG, entre outros.
            </p>

            <h3>3.5 Política de Cookies</h3>
            <p>
              Nossos sites utilizam cookies e tecnologias semelhantes para
              melhorar a experiência de navegação, personalizar conteúdos e
              anúncios, e analisar o tráfego.
            </p>

            <h4>3.5.1 Tipos de Cookies Utilizados:</h4>
            <ul>
              <li>
                <strong>Cookies Essenciais:</strong> Necessários para o
                funcionamento do site.
              </li>
              <li>
                <strong>Cookies de Desempenho:</strong> Coletam informações
                sobre como os usuários utilizam o site.
              </li>
              <li>
                <strong>Cookies Funcionais:</strong> Permitem que o site se
                lembre das escolhas feitas pelo usuário.
              </li>
            </ul>

            <h4>3.5.2 Gestão de Cookies</h4>
            <p>
              Você pode decidir se aceita ou rejeita cookies configurando seu
              navegador ou utilizando nossa ferramenta de consentimento.
            </p>

            <h3>3.6 Por quanto tempo são armazenados os dados pessoais</h3>
            <p>
              Seus dados pessoais serão mantidos enquanto durar a relação
              contratual ou comercial, podendo ser armazenados por 5 anos após o
              fim da relação.
            </p>

            <h3>3.7 Como entrar em contato</h3>
            <p>
              Em caso de dúvidas ou solicitações relacionadas à Lei Geral de
              Proteção de Dados, você poderá entrar em contato através do email:{" "}
              <a href="mailto:dpo@lwtecnologia.com.br">
                dpo@lwtecnologia.com.br
              </a>
              .
            </p>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerLeft}>
              <img
                src="/grupow.png"
                alt="Grupo LW logo"
                className={styles.logo}
              />
              <p>
                <strong>Soluções em tecnologia para sua frota</strong>
              </p>
              <p>R. XV de Novembro, 621 - 2º andar</p>
              <p>Centro, Curitiba - PR</p>
              <div className={styles.socialIcons2}>
                <Link
                  href="https://www.linkedin.com/company/lwtecnologia/"
                  passHref
                >
                  <img src="/lkd.svg" alt="LinkedIn" />
                </Link>
                <Link
                  href="https://www.facebook.com/lwtecnologia?mibextid=ZbWKwL"
                  passHref
                >
                  <img src="/fb.svg" alt="Facebook" />
                </Link>
                <Link
                  href="https://www.instagram.com/grupolw_gestaodefrotas/"
                  passHref
                >
                  <img src="/ig.svg" alt="Instagram" />
                </Link>
                <Link href="/" passHref>
                  <img src="/link.svg" alt="Link" />
                </Link>
              </div>
            </div>
            <div className={styles.footerRight}>
              <h3>Alguma dúvida? Fale com um de nossos especialistas</h3>
              <button
                className={styles.specialistButton}
                onClick={handleGotoForm}
              >
                Fale com um de nossos especialistas
              </button>
            </div>
          </div>
        </div>

        <div className={styles.copyrightRow}>
          <p>
            Copyright © 2024 Grupo LW | Todos os direitos reservados |{" "}
            <a href="#">Política de privacidade |</a>
          </p>
          <img src="/cinza.png" alt="Grupo LW logo" className={styles.logo} />
        </div>
      </div>
    </div>
  );
}
