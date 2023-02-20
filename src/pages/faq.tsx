import { GetStaticProps } from 'next';
import { FaqModel } from 'database/models/Faq';
import db from 'database/connection';
import SEO from 'components/SEO';

interface FaqProps {
    faq: FaqModel[];
}

export default function Faq({ faq }: FaqProps) {
    return (
        <>
            <SEO
                title={'Liên hệ | Công ty cổ phần Kamaz Việt Nam'}
                description={'Liên hệ với chúng tôi | Xe kamaz chính hãng'}
                canonicalPath={`/faq`}
            />
            <div className="text-3xl text-center font-bold mt-20">
                <h1>Thông tin liên hệ</h1>
            </div>
            <div className="m-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <div>
                            <span className="text-xl font-bold">
                                Nhân viên kinh doanh chi nhánh
                            </span>
                        </div>
                        <div className="mt-2">
                            <span className="text-l">
                                {process.env.NEXT_PUBLIC_PHONE_NUMBER} - Mr.{' '}
                                {process.env.NEXT_PUBLIC_USER_NAME}
                            </span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className="text-xl font-bold">Địa chỉ</span>
                        </div>
                        <div className="mt-2">
                            <span className="text-l">
                                {process.env.NEXT_PUBLIC_COMPANY_ADDRESS}
                            </span>
                        </div>
                    </div>
                    {faq.map((item) => {
                        return (
                            <div key={item.id}>
                                <div>
                                    <span className="text-xl font-bold">{item.question}</span>
                                </div>
                                <div className="mt-2">
                                    <span className="text-l">{item.answer}</span>
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
    const faq = await db('faq');
    return {
        props: { faq },
    };
};
