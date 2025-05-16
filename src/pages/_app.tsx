import Cookies from "@/components/Cookies";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { ReactElement, ReactNode, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { initializeTagManager } from "../../utils/gtm";
import usePageTracking from "../../utils/usePageTracking";
import { montserrat, poppins } from "../styles/fonts";
import "../styles/globals.scss";
import "slick-carousel/slick/slick.css"; // Import do CSS do slick-carousel
import "slick-carousel/slick/slick-theme.css";
import { LoadingProvider, useLoading } from "../context/LoadingContext"; // Importar o contexto de loading
import { Loading } from "@/components/Loading/loading"; // Importar o componente de loading

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    initializeTagManager();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      const sectionToRemove = document.getElementById(
        "bricks-component-RhBWLcUL9wEqpIyJF77xrw"
      );
      if (!sectionToRemove) {
        // Set padding-top to 0 if the element is not found
        document.body.style.paddingTop = "0";
      } else {
        clearInterval(interval); // Remove the interval once the element is found
      }
    }, 1); // Check every millisecond if the element is present in the DOM

    return () => clearInterval(interval); // Clean up the interval when the component unmounts
  }, [Component]); // Run this effect on every page load

  usePageTracking();

  useEffect(() => {
    // Definindo a função gtag dentro de useEffect para garantir que só execute no client side
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }

    // Função para carregar o script do RD Station
    const loadRDScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://d335luupugsy2.cloudfront.net/js/loader-scripts/ee77a7b0-af9e-41c2-9e79-6ccb8a7eb68b-loader.js";
      script.onload = () => {
        const observer = new MutationObserver((mutationsList, observer) => {
          for (const mutation of mutationsList) {
            if (mutation.type === "childList") {
              const rdElement = document.querySelector(
                "#rd-floating_button-l9ohyb60"
              );
              if (rdElement) {
                console.log("Elemento do RD Station encontrado");
                rdElement.addEventListener("click", () => {
                  gtag("event", "click", {
                    event_category: "RD Station",
                    event_label: "RD Station WhatsApp Button",
                  });
                });
                observer.disconnect();
                return;
              }
            }
          }
        });

        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });

        // Verificação inicial imediata
        const rdElement = document.querySelector(
          "#rd-floating_button-l9ohyb60"
        );
        if (rdElement) {
          console.log("Elemento do RD Station encontrado");
          rdElement.addEventListener("click", () => {
            gtag("event", "click", {
              event_category: "RD Station",
              event_label: "RD Station WhatsApp Button",
            });
          });
          observer.disconnect();
        } else {
          console.log(
            "Elemento do RD Station não encontrado, observando mudanças no DOM"
          );
        }
      };
      document.body.appendChild(script);
    };

    loadRDScript();

    const handleConversion = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.dataset.conversion) {
        gtag("event", "conversion", {
          send_to: "AW-16519096883/Lu6HCIeYgK4ZELPU9cQ9",
        });

        // Garanta que o script seja carregado apenas uma vez
        if (
          !document.querySelector(
            `script[src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/ee77a7b0-af9e-41c2-9e79-6ccb8a7eb68b-loader.js"]`
          )
        ) {
          loadRDScript();
        }
      }
    };

    document.addEventListener("click", handleConversion);

    return () => {
      document.removeEventListener("click", handleConversion);
    };
  }, []);

  return (
    <>
      <Head>
        <link
          rel="icon"
          href="https://d10fqir6n4h7sq.cloudfront.net/public/FavIcon.svg"
          type="image/svg+xml"
        />
        <link rel="canonical" href="https://www.lwtecnologia.com.br/" />
        <title>Grupo LW</title>
        <meta property="og:title" content="Grupo LW" />
        <meta
          property="og:description"
          content="Soluções em tecnologia para sua frota."
        />
        <meta property="og:site_name" content="Grupo LW" />
        <meta property="og:url" content="https://lwtecnologia.com.br/" />
        <meta
          property="description"
          content="Soluções em tecnologia para sua frota."
        />
        <meta
          property="og:image"
          content="https://d10fqir6n4h7sq.cloudfront.net/public/LOGO_Fundo-Azul.PNG"
        />
        <meta property="og:image:width" content="304" />
        <meta property="og:image:height" content="158" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16519096883"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16519096883');
          `}
        </script>
      </Head>
      <LoadingProvider>
        <LoadingContainer /> {/* Componente de loading */}
        <NextNProgress color="#fff" />
        <div className={`$font-poppins`}>
          {getLayout(<Component {...pageProps} />)}
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          style={{ zIndex: 9999999999999999, position: "fixed" }}
        />
        <Cookies />
      </LoadingProvider>
    </>
  );
}
const LoadingContainer = () => {
  const { isLoading } = useLoading();
  return isLoading ? <Loading /> : null;
};
