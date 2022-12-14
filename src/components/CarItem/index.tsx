//import { Suspense } from 'react';
import { CarModel } from 'database/models/Car';
import Link from 'next/link';
import { FiAlertTriangle } from 'react-icons/fi';
import Spinner from 'components/Spinner';
import Image from 'next/image';

export interface CarItemProps {
    car: CarModel;
    error?: boolean;
    isValidating?: boolean;
}

export default function CarItem({ car, error, isValidating }: CarItemProps) {
    const normalizedUri = `/car/${car.make}/${car.model.split(' ').join('-')}/${car.id}`;
    return (
        <Link href="/car/[make]/[model]/[id]" as={normalizedUri}>
            <a className="animate-fade-in">
                <div className="max-w-sm rounded overflow-hidden shadow-lg h-full cursor-pointer">
                    <div className="relative pb-2/3">
                        <Image
                            className="absolute w-full h-full object-cover"
                            src={car.photoUrl}
                            alt={`${car.make} ${car.model} (${car.year})`}
                            layout="fill"
                        />
                    </div>
                    <div className="px-6 py-4 overflow-hidden relative">
                        <div className="absolute flex right-0 pt-1">
                            {error && (
                                <div className="pr-4">
                                    <FiAlertTriangle size={22} />
                                </div>
                            )}
                            {isValidating && (
                                <Spinner
                                    circleColor="black"
                                    circleOpacity={0.25}
                                    spinColor="black"
                                    spinOpacity={0.75}
                                />
                            )}
                        </div>
                        <div className="font-bold text-xl mb-2">
                            <h1>{`${car.make} ${car.model} (${car.year})`}</h1>
                        </div>
                        <div className="font-bold text-l text-gray-800 mb-2">
                            {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'VND',
                                minimumFractionDigits: 0,
                            }).format(car.price)}
                        </div>
                        <p className="block text-gray-700 text-base line-clamp">{car.details}</p>
                    </div>
                </div>
            </a>
        </Link>
    );
}
