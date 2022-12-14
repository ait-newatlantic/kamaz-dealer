import { ModelSelect, MakeSelect } from 'database/models/Car';
import { Formik, Form, Field, useField, useFormikContext } from 'formik';
import router, { useRouter } from 'next/router';
import { getAsString } from 'utils';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
import Button from 'components/Button';

export interface SearchProps {
    makes: MakeSelect[];
    models: ModelSelect[];
}

const prices = [10000, 50000, 150000, 250000, 500000, 1000000];

export default function Search({ makes, models }: SearchProps) {
    const { query } = useRouter();

    const [initialValues] = useState({
        make: getAsString(query.make) || 'all',
        model: getAsString(query.model) || 'all',
        minPrice: getAsString(query.minPrice) || 'all',
        maxPrice: getAsString(query.maxPrice) || 'all',
    });

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                console.log(values);
                router.push(
                    {
                        pathname: '/cars',
                        query: { ...values, page: 1 },
                    },
                    undefined,
                    { shallow: true },
                );
            }}
        >
            {({ values }) => (
                <Form>
                    <div className="flex flex-col">
                        <div className="text-center w-full px-3 mb-6 md:mb-0 my-2">
                            <label
                                id="search-make"
                                className="block uppercase tracking-wide text-gray-700 text-xs text-left font-bold mb-2 "
                            >
                                Phân khúc
                            </label>
                            <div className="relative">
                                <Field
                                    as="select"
                                    name="make"
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="search-make"
                                >
                                    <option className="italic" value="all" label="Tất cả" />
                                    {makes.map((make, index) => (
                                        <option
                                            key={index}
                                            value={make.name}
                                        >{`${make.name} (${make.count})`}</option>
                                    ))}
                                </Field>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <ModelSelector
                            initialMake={initialValues.make}
                            make={values.make}
                            name="model"
                            models={models}
                        />
                        <div className="text-center w-full px-3 mb-6 md:mb-0 my-2">
                            <label
                                id="search-min-price"
                                className="block uppercase tracking-wide text-gray-700 text-xs text-left font-bold mb-2"
                            >
                                Giá thấp nhất
                            </label>
                            <div className="relative">
                                <Field
                                    as="select"
                                    name="minPrice"
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="search-min-price"
                                >
                                    <option className="italic" value="all" label="Tất cả" />
                                    {prices.map((price, index) => (
                                        <option key={index} value={price}>
                                            {price}
                                        </option>
                                    ))}
                                </Field>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="text-center w-full px-3 mb-6 md:mb-0 my-2">
                            <label
                                id="search-max-price"
                                className="block uppercase tracking-wide text-gray-700 text-xs text-left font-bold mb-2"
                            >
                                Giá cao nhất
                            </label>
                            <div className="relative">
                                <Field
                                    as="select"
                                    name="maxPrice"
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="search-max-price"
                                >
                                    <option className="italic" value="all" label="Tất cả" />
                                    {prices.map((price, index) => (
                                        <option key={index} value={price}>
                                            {price}
                                        </option>
                                    ))}
                                </Field>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 py-5">
                        <Button classType={'search'} width="100%" />
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export interface ModelSelectProps {
    name: string;
    models: ModelSelect[];
    make: string;
    initialMake: string;
}

export function ModelSelector({ initialMake, models, make, ...props }: ModelSelectProps) {
    const { setFieldValue } = useFormikContext();

    const [field] = useField({
        name: props.name,
    });

    const initialModelsOrUndefined = make === initialMake ? models : undefined;

    const { data: newModels } = useSWR<ModelSelect[]>('/api/models?make=' + make, {
        //Dedupe requests with the same key in this time span
        dedupingInterval: 60000,
        initialData: make === 'all' ? [] : initialModelsOrUndefined,
    });

    useEffect(() => {
        if (!newModels?.map((a) => a.name).includes(field.value)) {
            setFieldValue('model', 'all');
        }
    }, [make, newModels]);

    return (
        <div className="text-center w-full px-3 mb-6 md:mb-0 my-2">
            <label
                id="search-model"
                className="block uppercase tracking-wide text-gray-700 text-xs text-left font-bold mb-2"
            >
                Model
            </label>
            <div className="relative">
                <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="search-model"
                    {...field}
                    {...props}
                >
                    <option className="italic" value="all" label="Tất cả" />
                    {newModels?.map((model, index) => (
                        <option
                            key={index}
                            value={model.name}
                        >{`${model.name} (${model.count})`}</option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
