import { GetServerSideProps } from 'next';
import { getMakes, getModels } from 'database/api/car';
import { ModelSelect, MakeSelect } from 'database/models/Car';
import Search from 'components/Search';
import { getAsString } from 'utils';
import SEO from 'components/SEO';

export interface HomeProps {
    makes: MakeSelect[];
    models: ModelSelect[];
}

export default function Home({ makes, models }: HomeProps) {
    return (
        <>
            <SEO
                title={'Home'}
                description={'Công ty cổ phần KAMAZ VIỆT NAM.'}
                canonicalPath={`/`}
            />
            <div className="lg:grid grid-cols-2 relative hidden">
                <img src="/img/banner.jpg" alt="banner" />
                <img src="/img/banner2.jpg" alt="banner2" />
                <div className="absolute bottom-0 inset-x-0 h-10 bg-white" />
            </div>
            <div>
                <img className="h-40 mx-auto font-bold" src="/img/kamaz.png" alt="logo" />
                <p className="text-center mt-4 uppercase text-blue-700 font-bold">
                    Công ty cổ phẩn KAMAZ Việt Nam
                </p>
                <p className="text-center mt-4 font-semibold">
                    156 Nam Kỳ Khởi Nghĩa, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
                </p>
                <div className="container m-12 mx-auto px-6 py-6 rounded shadow-lg xl:w-2/6 lg:w-2/6 md:w-3/6 sm:w-3/6">
                    <Search makes={makes} models={models} />
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
