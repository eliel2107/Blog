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
                <link rel="icon" href="https://d10fqir6n4h7sq.cloudfront.net/public/FavIcon/.svg" type="image/svg+xml" />
                <title>LW TECNOLOGIA</title>
            </Head>
            <NextNProgress color="#fff" />
            <Component {...pageProps} />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
            />
        </>
    );
}
//
