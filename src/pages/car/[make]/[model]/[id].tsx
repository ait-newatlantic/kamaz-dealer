import { GetServerSideProps } from 'next';
import { CarModel } from 'database/models/Car';
import { FaRoute, FaGasPump, FaCalendarAlt } from 'react-icons/fa';
import { getCarById, getMakes, getModels } from 'database/api/car';
import CarNotFound from 'components/CarNotFound';
import { getAsString } from 'utils';
import SEO from 'components/SEO';

interface CarDetailsProps {
    car: CarModel | null;
}

export default function CarDetails({ car }: CarDetailsProps) {
    if (car === null) return <CarNotFound text={'Car not found ...'} />;
    const price = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,
    }).format(car?.price || 0);
    return (
        <>
            <SEO
                title={`${car?.make} ${car?.model} (${car?.year})`}
                description={`${car?.make} ${car?.model} used from ${car?.year} with ${car?.kilometers} for sale near you. For more information and car pricing contact us.`}
                canonicalPath={`/car/${car?.make}/${car?.model}/${car?.id}`}
                image={car?.photoUrl}
            />

            <div className="container mx-auto mt-10 shadow-2xl rounded-md">
                <div className="lg:flex">
                    <div className="w-full md:flex-shrink-0 lg:w-2/3 md:w-full sm:w-full">
                        <img
                            className="rounded-lg md:w-full"
                            src={car.photoUrl}
                            alt={`${car.make} ${car.model} (${car.year})`}
                        />
                    </div>
                    <div className="p-5">
                        <div className="uppercase tracking-wide text-xl text-black-900 font-bold mb-2">
                            <h1>{`${car?.make} ${car?.model}`}</h1>
                        </div>
                        <span className="text-gray-900 rounded-t-lg font-bold text-xl bg-gray-500 bg-opacity-25 px-1 py-1 mb-2">
                            <span className="text-xl">{car.price !== 0 ? price : 'Liên hệ'}</span>
                        </span>

                        <p className="mt-1 text-gray-600">{car?.details}</p>
                        <div className="flex flex-row mt-6">
                            <div className="flex flex-col pr-5 items-center">
                                <FaGasPump size={28} />
                                <p className="text-gray-900 leading-none py-2">{car?.fuelType}</p>
                            </div>
                            <div className="flex flex-col px-5 items-center">
                                <FaCalendarAlt size={28} />
                                <p className="text-gray-900 leading-none py-2">{car?.year}</p>
                            </div>
                            <div className="flex flex-col px-5 items-center">
                                <FaRoute size={28} />
                                <p className="text-gray-900  leading-none py-2">
                                    {car?.kilometers}
                                </p>
                            </div>
                        </div>
                        <p className="mt-20 font-bold text-lg">
                            Liên hệ mua xe: {process.env.NEXT_PUBLIC_PHONE_NUMBER} (Mr.{' '}
                            {process.env.NEXT_PUBLIC_USER_NAME}) | Email:{' '}
                            {process.env.NEXT_PUBLIC_USER_EMAIL}
                        </p>
                    </div>
                </div>
            </div>
            <img
                className="container mx-auto mt-10 shadow-2xl rounded-md"
                src={car?.specUrl}
                alt={`spec of ${car.make} ${car.model} (${car.year})`}
            />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const make = getAsString(context.params?.make);
    const model = getAsString(context.params?.model).split('-').join(' ');
    const id = context.params?.id;

    try {
        const [makes, models, car] = await Promise.all([
            getMakes(),
            getModels(make),
            getCarById(id),
        ]);

        const isMakeValid = makes
            .map((make) => make.name.toLowerCase())
            .includes(make.toLowerCase());
        const isModelValid = models
            .map((model) => model.name.toLowerCase())
            .includes(model.toLowerCase());

        const isCarValid =
            (car as unknown as CarModel).make === make &&
            (car as unknown as CarModel).model === model;

        if (isMakeValid && isModelValid && isCarValid) return { props: { car } };
    } catch (err) {
        console.log(err);
    }

    return { props: { car: null } };
};
