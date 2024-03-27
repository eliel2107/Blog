import Cookies from '@/components/Cookies';
import { montserrat, poppins } from '@/styles/fonts';
import '@/styles/globals.scss';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head'; // Import the Head component
import NextNProgress from 'nextjs-progressbar';
import { ReactElement, ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    return (
        <>
            <Head>
                <link rel="icon" href="/FavIcon.svg" type="image/svg+xml" />
                <title>Grupo LW</title>
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
