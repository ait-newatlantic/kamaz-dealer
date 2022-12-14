import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaNewspaper } from 'react-icons/fa';
import { FiHome, FiMessageSquare, FiFilter } from 'react-icons/fi';

export const routes = [
    {
        href: '/',
        key: 'trang chủ',
        icon: <FiHome />,
    },
    {
        href: '/cars',
        key: 'Sản phẩm',
        icon: <FiFilter />,
    },
    {
        href: '/news',
        key: 'TIN TỨC',
        icon: <FaNewspaper />,
    },
    {
        href: '/faq',
        key: 'LIÊN HỆ',
        icon: <FiMessageSquare />,
    },
];

export default function Header() {
    const router = useRouter();
    return (
        <header>
            <nav className="bg-white px-8 pt-2 shadow-md">
                <div className="-mb-px flex justify-center">
                    {routes.map((route) => (
                        <Link key={route.key} href={route.href}>
                            <a
                                className={`${
                                    router.pathname === route.href
                                        ? 'border-blue-500 text-opacity-100'
                                        : ''
                                } no-underline text-gray-900 text-opacity-50 hover:text-opacity-100 border-b-4 border-transparent uppercase tracking-wide font-bold text-l py-3 mr-8`}
                            >
                                <div className="flex items-center">
                                    {route.icon}
                                    <span className="ml-1">{route.key}</span>
                                </div>
                            </a>
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}
