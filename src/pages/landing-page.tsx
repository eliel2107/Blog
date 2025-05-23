import "swiper/swiper-bundle.css";
import styles from "../styles/landing-page.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import { useEffect, useState } from "react";
import Link from "next/link";
SwiperCore.use([Pagination, Navigation]);

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
    // Send a standard 'page_view' event on landing page load
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view", {
        event_category: "Landing Page",
        event_label: "view-lp",
      });
      console.log("Standard page_view event sent to Google Ads");
    }
  }, []);

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

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <img src="/grupo.png" alt="" />
            <button onClick={handleGotoForm}>Experimente grátis</button>
          </div>
        </div>
        <div className={styles.banner}>
          <div className={styles.bannerLeft}>
            <h1>
              Tecnologia de ponta a ponta para você fazer a{" "}
              <span>gestão da sua frota</span>
            </h1>
            <p>
              Tenha agilidade e assertividade na gestão de multas, documentação
              e débitos veiculares com soluções que se integram para alavancar
              os seus negócios.
            </p>
            <button onClick={handleGotoForm}>Experimente grátis</button>
          </div>
          <div className={styles.bannerRight}>
            <img src="/lp-banner.jpg" alt="" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.rowContent}>
            <h2>As melhores soluções para o seu tipo de negócio</h2>
            <div className={styles.rowBottom}>
              <div className={styles.rowCard}>
                <img src="/car 1.png" alt="" />
                <h3>Locadoras</h3>
              </div>
              <div className={styles.rowCard}>
                <img src="/truck.png" alt="" />
                <h3>Transportadoras</h3>
              </div>
              <div className={styles.rowCard}>
                <img src="/car.png" alt="" />
                <h3>Concessionárias</h3>
              </div>
              <div className={styles.rowCard}>
                <img src="/person.png" alt="" />
                <h3>Gestores de frota</h3>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.allServices}>
          <div className={styles.allServicesContent}>
            <div className={styles.title}>
              <p>{"Tudo em um só lugar".toUpperCase()}</p>
              <span>
                Com o Grupo LW, você conta com um HUB completo de soluções que
                vão te atender desde a documentação e emplacamento após a compra
                do veículo, gestão e pagamento de multas e débitos anuais, até a
                desmobilização do ativo.
              </span>
            </div>
            <div className={styles.allServicesMiddle}>
              <div className={styles.allServicesCard}>
                <div className={styles.imageContainer}>
                  <img
                    src="/multas.png"
                    alt=""
                    style={{ width: "129px", height: "48px" }}
                  />
                </div>

                <p>
                  Gerencie o recebimento de notificações e boletos, indicações
                  de condutores e o pagamento das infrações da sua frota.
                </p>
              </div>
              <div className={styles.allServicesCard}>
                <div className={styles.imageContainer}>
                  <img
                    src="/doc.png"
                    alt=""
                    style={{ width: "93px", height: "48px" }}
                  />
                </div>

                <p>
                  Tecnologia, agilidade, assertividade e controle na abertura e
                  acompanhamento dos processos de documentação veicular.
                </p>
              </div>
              <div className={styles.allServicesCard}>
                <div className={styles.imageContainer}>
                  <img
                    src="/debitos.png"
                    alt=""
                    style={{ width: "135px", height: "48px" }}
                  />
                </div>
                <p>
                  Inovação e agilidade na consulta e pagamento de IPVA e
                  Licenciamento da sua frota. Além do extrato de pendências dos
                  seus veículos.
                </p>
              </div>
              <div className={styles.allServicesCard}>
                <div className={styles.imageContainer}>
                  <img
                    src="/sim.png"
                    alt=""
                    style={{ width: "78px", height: "48px" }}
                  />
                </div>
                <p>
                  Maior segurança para sua frota, com rastreio e monitoramento,
                  cerca virtual, controle de movimento e velocidade e outras
                  funções.
                </p>
              </div>
            </div>
            <div className={styles.allServicesBottom}>
              <button onClick={handleGotoForm}>Conheça nossos planos</button>
            </div>
          </div>
        </div>
        <div className={styles.tryIt}>
          <div className={styles.tryItContent}>
            <div className={styles.tryItLeft}>
              <h2>
                Expertise de mercado e tecnologia para você gerir a sua frota
                com eficiência e redução de custos e investir no que realmente
                importa.
              </h2>

              <button onClick={handleGotoForm}>Experimente grátis</button>
            </div>
            <div className={styles.tryItRight}>
              <img src="/segunda-img.png" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.slider}>
          <div className={styles.sliderContent}>
            <div className={styles.sliderTitle}>
              <h2>Quer saber mais sobre nossos produtos?</h2>
            </div>

            <div className={styles.sliderCard}>
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                navigation={{
                  nextEl: `.${styles.swiperButtonNext}`,
                  prevEl: `.${styles.swiperButtonPrev}`,
                }} // Add navigation
                autoHeight={true}
                style={{
                  flexDirection: isMobile ? "column" : "row",
                  height: isMobile ? "1000px" : "550px",
                }}
                autoplay={true}
              >
                <SwiperSlide
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row", // Use the state to determine the flex direction
                    height: "auto",
                    gap: "85px", // Make sure the height adapts to the content
                  }}
                >
                  <div className={styles.sliderCardLeft}>
                    <img
                      src="/multas.png"
                      alt=""
                      style={{ width: "129px", height: "48px" }}
                    />
                    <div className={styles.description}>
                      <p>
                        A gestão de multas de uma frota demanda tempo, mão de
                        obra e pode ter custos elevados devido ao pagamento de
                        juros e multas NICs. <br />
                        <br />
                        Com o LW Multas você acelera o processo de recebimento,
                        indicação e pagamento da infração. Economizando tempo e
                        recursos com uma plataforma pensada para trazer
                        eficiência, agilidade e assertividade para o seu
                        negócio.
                      </p>
                    </div>
                    <h3>
                      {"Tudo o que você precisa em um único lugar".toUpperCase()}
                    </h3>
                    <ul className={styles.list}>
                      <li>
                        Captura e disponibilização das multas de forma
                        antecipada sem depender do recebimento pelos correios.
                      </li>
                      <li>
                        Recebimento de boletos e pagamento antecipado das
                        multas, garantindo descontos significativos.
                      </li>
                      <li>
                        Controle e agilidade na indicação de condutores,
                        evitando multas NIC.
                      </li>
                      <li>
                        Centralização das informações dos órgãos autuadores em
                        um único lugar, simplificando o controle na gestão dos
                        dados de sua frota.
                      </li>
                    </ul>
                  </div>
                  <div className={styles.sliderCardRight}>
                    <img src="/multas-slider.jpg" alt="Image 1 Right" />
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row", // Use the state to determine the flex direction
                    height: "auto", // Make sure the height adapts to the content
                    gap: "85px",
                  }}
                >
                  <div className={styles.sliderCardLeft}>
                    <img
                      src="/doc.png"
                      alt="Image 1"
                      style={{ width: "93px", height: "48px" }}
                    />
                    <div className={styles.description}>
                      <p>
                        Gestão inteligente de documentação veicular, eliminando
                        planilha e processos manuais. <br />
                        <br />
                        Com a LW Doc você mantém a documentação dos veículos da
                        sua frota em dia, através de um sistema online com
                        acompanhamento em tempo real, garantindo mais agilidade,
                        assertividade e economia de tempo e mão de obra.
                      </p>
                    </div>
                    <h3>
                      {"Tudo o que você precisa em um único lugar".toUpperCase()}
                    </h3>
                    <ul className={styles.redList}>
                      <li>
                        Redução significativa no tempo para finalização dos
                        processos.
                      </li>
                      <li>
                        Todos os serviços em um único lugar, como Emplacamento,
                        Transferência, Licenciamento, Alteração de dados, 2º via
                        CRV, entre outros.
                      </li>
                      <li>Documentação em dia, sem burocracia.</li>
                      <li>
                        Centralização das informações e processos da sua frota,
                        com acompanhamento em tempo real e extração de
                        relatórios gerenciais.
                      </li>
                    </ul>
                  </div>
                  <div className={styles.sliderCardRight}>
                    <img src="/doc-image.jpg" alt="Image 1 Right" />
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row", // Use the state to determine the flex direction
                    height: "auto", // Make sure the height adapts to the content
                    gap: "85px",
                  }}
                >
                  <div className={styles.sliderCardLeft}>
                    <img
                      src="/debitos.png"
                      alt="Image 1"
                      style={{ width: "135px", height: "48px" }}
                    />
                    <div className={styles.description}>
                      <p>
                        Fim das planilhas, processos demorados e prejuízos com
                        juros e multas. Com o LW Débitos você consulta e paga os
                        débitos anuais da sua frota de veículos de forma simples
                        e rápida, com tecnologia e processamento em lote. <br />
                        <br />
                        Além disso temos o Extrato veicular, onde você consulta
                        todos os débitos, pendências e restrições da sua frota
                        em poucos segundos.
                      </p>
                    </div>
                    <h3>
                      {"Tudo o que você precisa em um único lugar".toUpperCase()}
                    </h3>
                    <ul className={styles.greenList}>
                      <li>
                        Consulta e pagamento dos débitos de IPVA e Licenciamento
                        dentro do prazo evitando o pagamento de juros e
                        garantindo descontos significativos.
                      </li>
                      <li>
                        Processamento em lote, acompanhamento dos pagamentos,
                        extração de relatórios e comprovantes, tudo em um único
                        lugar.
                      </li>
                      <li>
                        Fim do processo manual de pagar veículo por veículo no
                        site do órgão.
                      </li>
                      <li>
                        Informação na palma da sua mão, saiba todos os débitos e
                        pendências dos veículos da sua frota com o Extrato
                        veicular.
                      </li>
                    </ul>
                  </div>
                  <div className={styles.sliderCardRight}>
                    <img src="/lp-debitos.jpg" alt="Image 1 Right" />
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row", // Use the state to determine the flex direction
                    height: "auto", // Make sure the height adapts to the content
                    gap: "85px",
                  }}
                >
                  <div className={styles.sliderCardLeft}>
                    <img
                      src="/sim.png"
                      alt="Image 1"
                      style={{ width: "78px", height: "48px" }}
                    />
                    <div className={styles.description}>
                      <p>
                        Assuma o controle e tenha mais segurança para a sua
                        frota com tecnologia de alta performance. <br />
                        <br />
                        Com o LW SIM você monitora e rastreia a sua frota online
                        em tempo real. Garantindo mais segurança para os seus
                        veículos e o controle total com relatórios inteligentes
                        e indicadores que te auxiliam na gestão do seu negócio.
                      </p>
                    </div>
                    <h3>
                      {"Tudo o que você precisa em um único lugar".toUpperCase()}
                    </h3>
                    <ul className={styles.purpleList}>
                      <li>
                        Rastreamento e monitoramento online em tempo real.
                      </li>
                      <li>
                        Controle de velocidade, cerca virtual, movimento com
                        ignição desligada.
                      </li>
                      <li>
                        Relatórios completos para análise do perfil de condução.
                      </li>
                      <li>
                        Dashboard interativo, desenvolvido para a gestão
                        inteligente do seu negócio, contendo diagnóstico de toda
                        sua frota.
                      </li>
                    </ul>
                  </div>
                  <div className={styles.sliderCardRight}>
                    <img src="/sim-lp.jpg" alt="Image 1 Right" />
                  </div>
                </SwiperSlide>
              </Swiper>
              <div
                className={`${styles.swiperButtonPrev} ${styles.customButton}`}
              >
                <img src="/arrowslider.svg" alt="Previous" />
              </div>
              <div
                className={`${styles.swiperButtonNext} ${styles.customButton}`}
              >
                <img src="/arrowslider.svg" alt="Next" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.seguranca}>
          <div className={styles.segurancaContent}>
            <div className={styles.left}>
              <div className={styles.text}>
                <h3>
                  Segurança <br />& Tecnologia
                </h3>
              </div>
              <img src="/arrow.svg" alt="" />
            </div>
            <div className={styles.right}>
              <img src="/PCI.png" alt="" />
              <img src="/ISO.png" alt="" />
              <img src="/TECNO.png" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.youNeed}>
          <div className={styles.youNeedContent}>
            <div className={styles.needLeft}>
              <h3>
                Tudo o que você precisa para a gestão da sua frota a um clique
                de distância!
              </h3>
              <ul className={styles.checklist}>
                <li>
                  Economia de tempo e mão de obra com uma gestão online e
                  inteligente.
                </li>
                <li>
                  Relatórios gerenciais que te auxiliam na tomada de decisões
                  mais assertivas.
                </li>
                <li>Rapidez, segurança e tecnologia de ponta a ponta.</li>
                <li>
                  Fim da burocracia e descentralização das informações
                  veiculares.
                </li>
                <li>Para pequenas, médias e grandes frotas.</li>
              </ul>
              <button onClick={handleGotoForm}>Experimente grátis</button>
            </div>
            <div className={styles.needRight}>
              <img src="/need-image.jpg" alt="" />
            </div>
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
            <Link href={"/landing-page-politica"}>
              Política de privacidade |
            </Link>
          </p>
          <img src="/cinza.png" alt="Grupo LW logo" className={styles.logo} />
        </div>
      </div>
    </div>
  );
}
