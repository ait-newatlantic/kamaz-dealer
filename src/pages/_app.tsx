import 'styles/main.css';
import { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import axios from 'axios';
import SEO from 'components/SEO';
import Header from 'components/Header';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Footer } from 'components/Footer';
import { IconPhone } from 'components/icons/components/IconPhone';
import { ContactBar } from 'components/ContactBar';
import { data } from 'data';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', (url) => {
    console.log('route change start at ' + url);
    NProgress.start();
});

Router.events.on('routeChangeComplete', (url) => {
    console.log('route change complete at ' + url);
    NProgress.done();
});

Router.events.on('routeChangeError', (err, url) => {
    console.log('route change error at ' + url + '. ' + err);
    NProgress.done();
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <SEO title={'Home'} />
            <div className="flex flex-col h-screen">
                <ContactBar />
                <Header />
                <div className="flex-1">
                    <SWRConfig
                        value={{
                            fetcher: (url: string) => axios(url).then((res) => res.data),
                        }}
                    >
                        <Component {...pageProps} />
                    </SWRConfig>
                </div>
                <div className="fixed right-10 bottom-20 bg-yellow-500 p-3 rounded-full animate-bounce">
                    <a href={data.phone_action}>
                        <IconPhone className="text-white" />
                    </a>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default MyApp;
