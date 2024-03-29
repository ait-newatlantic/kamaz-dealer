import { GetStaticProps } from 'next';
import SEO from 'components/SEO';
import { formatTime } from 'utils';

interface NewsProps {
    news: any;
}

export default function Contact({ news }: NewsProps) {
    return (
        <>
            <SEO
                title={'Tin tức | Công ty cổ phần Kamaz Việt Nam'}
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
                            <a
                                className="bg-white border p-2"
                                href={item.url}
                                target="_blank"
                                key={index}
                                rel="noreferrer"
                            >
                                <div>
                                    <img src={item.urlToImage} alt={index} />
                                    <span className="text-xl font-bold">{item.title}</span>
                                </div>
                                <div className="mt-2">
                                    <span className="text-md">{item.author}</span>
                                </div>
                                <div className="mt-2">
                                    <span className="text-md">{item.description}</span>
                                </div>
                                <div className="flex justify-end">
                                    {' '}
                                    <span className="text-sm">{formatTime(item.publishedAt)}</span>
                                </div>
                            </a>
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
