import { GetStaticProps } from 'next';
import { FaqModel } from 'database/models/Faq';
import SEO from 'components/SEO';
import Axios from 'axios';

interface NewsProps {
    news: any;
}

export default function Contact({ news }: NewsProps) {
    return (
        <>
            <SEO
                title={'Tin tức'}
                description={'Tin tức quốc tế | Xe tải Kamaz giá rẻ'}
                canonicalPath={`/news`}
            />
            <div className="text-3xl text-center font-bold mt-20">
                <h1>Tin tức quốc tế</h1>
            </div>
            <div className="m-24">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {news.articles.map((item: any, index: any) => {
                        return (
                            <div key={index}>
                                <div>
                                    <img src={item.urlToImage} alt={index} />
                                    <span className="text-xl font-bold">{item.title}</span>
                                </div>
                                <div className="mt-2">
                                    <span className="text-l">{item.author}</span>
                                </div>
                                <div className="mt-2">
                                    <span className="text-l">{item.description}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const news = await (await fetch('https://saurav.tech/NewsAPI/everything/cnn.json')).json();
    return {
        props: { news },
    };
};
