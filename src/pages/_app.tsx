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

  usePageTracking();

  useEffect(() => {
    // Definindo a função gtag dentro de useEffect para garantir que só execute no client side
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }

    const handleConversion = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.dataset.conversion) {
        gtag("event", "conversion", {
          send_to: "AW-16519096883/Lu6HCIeYgK4ZELPU9cQ9",
        });

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
                  "#rd-floating_button-l9ohyb60",
                );
                if (rdElement) {
                  console.log(
                    "Elemento do RD Station encontrado, simulando clique",
                  );
                  rdElement.dispatchEvent(new Event("click"));
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
            "#rd-floating_button-l9ohyb60",
          );
          if (rdElement) {
            rdElement.dispatchEvent(new Event("click"));
            observer.disconnect();
          } else {
            console.log(
              "Elemento do RD Station não encontrado, observando mudanças no DOM",
            );
          }
        };
        document.head.appendChild(script);
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
      <NextNProgress color="#fff" />
      <div className={`${poppins.variable} ${montserrat.variable}`}>
        {getLayout(<Component {...pageProps} />)}
        <button
          id="conversion-button"
          className="conversion-button"
          data-conversion="true"
        >
          Convert
        </button>
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
      <Cookies />
    </>
  );
}
