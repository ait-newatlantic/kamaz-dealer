import 'styles/main.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { SWRConfig } from 'swr';
import axios from 'axios';
import Header from 'components/Header';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => {
    console.log('route change start');
    NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
    console.log('route change complete');
    NProgress.done();
});

Router.events.on('routeChangeError', () => {
    console.log('route change error');
    NProgress.done();
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Cars</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <div className="flex flex-col h-screen">
                <Header />

                <SWRConfig value={{ fetcher: (url: string) => axios(url).then((res) => res.data) }}>
                    <Component {...pageProps} />
                </SWRConfig>
            </div>
        </>
    );
}

export default MyApp;