import Cookies from '@/components/Cookies';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head'; // Import the Head component
import NextNProgress from 'nextjs-progressbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importe os estilos do react-toastify

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" href="/FavIcon.svg" type="image/svg+xml" />
                <title>Grupo LW</title>
            </Head>
            <NextNProgress color="#fff" />
            <Component {...pageProps} />
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
