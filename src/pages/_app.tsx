import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import Head from 'next/head'; // Import the Head component

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/FavIcon.svg" type="image/svg+xml" />
        <title>LW TECNOLOGIA</title>
        {/* Add other head elements if needed */}
      </Head>
      <Component {...pageProps} />
      <NextNProgress color="#fff" />
    </>
  );
}
