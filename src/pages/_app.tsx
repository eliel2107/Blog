import Cookies from '@/components/Cookies';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head'; // Import the Head component
import NextNProgress from 'nextjs-progressbar';
import { ReactElement, ReactNode, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initializeTagManager } from '../../utils/gtm';
import usePageTracking from '../../utils/usePageTracking';
import { montserrat, poppins } from '../styles/fonts';
import '../styles/globals.scss';
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
    return (
        <>
            <Head>
                <link
                    rel="icon"
                    href="https://d10fqir6n4h7sq.cloudfront.net/public/FavIcon.svg"
                    type="image/svg+xml"
                />
                <title>Grupo LW</title>
                <meta property="og:title" content="Grupo LW" />
                <meta
                    property="og:description"
                    content="Soluções em tecnologia para sua frota."
                />
                <meta property="og:site_name" content="Grupo LW" />
                <meta
                    property="og:url"
                    content="https://lwtecnologia.com.br/"
                />
                <meta
                    property="description"
                    content="Soluções em tecnologia para sua frota."
                />
                <meta
                    property="og:image"
                    content="https://d10fqir6n4h7sq.cloudfront.net/public/LOGOPRINCIPAL.png"
                />
                <meta property="og:image:width" content="304" />
                <meta property="og:image:height" content="158" />
                <script
                    type="text/javascript"
                    async
                    src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/ee77a7b0-af9e-41c2-9e79-6ccb8a7eb68b-loader.js"
                ></script>
            </Head>
            <NextNProgress color="#fff" />
            <div className={`${poppins.variable} ${montserrat.variable}`}>
                {getLayout(<Component {...pageProps} />)}
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
            />
            <Cookies />
        </>
    );
}
//
