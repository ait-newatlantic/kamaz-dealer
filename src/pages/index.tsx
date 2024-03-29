import { GetServerSideProps } from 'next';
import { getMakes, getModels } from 'database/api/car';
import { ModelSelect, MakeSelect } from 'database/models/Car';
import Search from 'components/Search';
import { getAsString } from 'utils';
import SEO from 'components/SEO';
import ImgWithFallback from 'components/ImgWithFallback/ImgWithFallback';

export interface HomeProps {
    makes: MakeSelect[];
    models: ModelSelect[];
}

export default function Home({ makes, models }: HomeProps) {
    return (
        <>
            <SEO title={'Trang chủ | Công ty cổ phần Kamaz Việt Nam'} canonicalPath={`/`} />
            <div>
                <div className="lg:grid grid-cols-2 relative hidden">
                    <ImgWithFallback
                        height={1000}
                        width={1000}
                        src="/img/banner.webp"
                        fallback="/img/banner.png"
                        alt="banner"
                        loading="lazy"
                    />
                    <ImgWithFallback
                        height={1000}
                        width={1000}
                        src="/img/banner2.webp"
                        fallback="/img/banner2.png"
                        alt="banner2"
                        loading="lazy"
                    />
                    <div className="absolute bottom-0 inset-x-0 h-10 bg-white" />
                </div>
                <div>
                    <ImgWithFallback
                        className="mx-auto font-bold"
                        src="/img/kamaz.webp"
                        fallback="/img/kamaz.png"
                        alt="logo"
                        height={384}
                        width={140}
                        loading="lazy"
                    />
                    <p className="text-center mt-4 uppercase text-blue-700 font-bold">
                        {process.env.NEXT_PUBLIC_COMPANY_NAME}
                    </p>
                    <p className="text-center mt-4 font-semibold uppercase">
                        {process.env.NEXT_PUBLIC_COMPANY_ADDRESS}
                    </p>
                    <div className="container m-12 mx-auto px-6 py-6 rounded shadow-lg xl:w-2/6 lg:w-2/6 md:w-3/6 sm:w-3/6 bg-white">
                        <Search makes={makes} models={models} />
                    </div>
                </div>
            </div>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const make = getAsString(context.query.make || '') || 'all';

    const [makes, models] = await Promise.all([getMakes(), getModels(make)]);

    return { props: { makes, models } };
};
