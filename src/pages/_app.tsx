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
import { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

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
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <>
            <SEO
                title={'Trang chủ'}
                description={`Công ty cổ phần KAMAZ VIỆT NAM | Liên hệ ${process.env.NEXT_PUBLIC_PHONE_NUMBER} (Mr ${process.env.NEXT_PUBLIC_USER_NAME})`}
            />
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: {
                        enable: true,
                        zIndex: -1,
                    },
                    background: {
                        color: {
                            value: '#0d47a1',
                        },
                    },
                    backgroundMask: {
                        enable: true,
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push',
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse',
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: '#ffffff',
                        },
                        links: {
                            color: '#ffffff',
                            distance: 150,
                            enable: true,
                            opacity: 0.4,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: {
                                default: 'bounce',
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.4,
                        },
                        shape: {
                            type: 'circle',
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
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
                <div className="fixed right-10 bottom-20 flex items-center animate-bounce">
                    <p className="text-white bg-red-700 p-px px-2 text-sm font-bold -mr-1">
                        Mr. {process.env.NEXT_PUBLIC_USER_NAME}
                    </p>
                    <div className="bg-yellow-500 p-3 rounded-full">
                        <a href={process.env.NEXT_PUBLIC_PHONE_NUMBER_ACTION}>
                            <IconPhone className="text-white" />
                        </a>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default MyApp;
