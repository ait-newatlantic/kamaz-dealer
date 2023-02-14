import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaCar, FaNewspaper } from 'react-icons/fa'
import { FiHome, FiMessageSquare, FiBookOpen } from 'react-icons/fi'

export const routes = [
  {
    href: '/',
    key: 'trang chủ',
    icon: <FiHome />,
  },
  {
    href: '/introduction',
    key: 'Giới thiệu',
    icon: <FiBookOpen />,
  },
  {
    href: '/cars',
    key: 'Sản phẩm',
    icon: <FaCar />,
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
]

export default function Header() {
  const router = useRouter()
  return (
    <>
      <header className="hidden lg:block">
        <nav className="bg-white px-8 pt-2 shadow-md overflow-auto">
          <div className="-mb-px flex justify-center">
            {routes.map((route) => (
              <Link
                key={route.key}
                href={route.href}
                className={`${
                  router.pathname === route.href ? '!text-blue-700' : ''
                } no-underline text-gray-900 text-opacity-50 hover:text-opacity-100 border-b-4 border-transparent uppercase tracking-wide font-bold text-l py-3 mr-8`}
              >
                <div className="flex items-center">
                  {route.icon}
                  <span className="ml-1">{route.key}</span>
                </div>
              </Link>
            ))}
          </div>
        </nav>
      </header>
      <header className="lg:hidden">
        <div className="flex flex-wrap justify-center items-center">
          {routes.map((route) => (
            <Link
              key={route.key}
              href={route.href}
              className={`${
                router.pathname === route.href ? '!text-blue-700' : ''
              } no-underline text-gray-900 text-opacity-50 hover:text-opacity-100 border-b-4 border-transparent uppercase tracking-wide font-bold text-l py-3 mr-8`}
            >
              <div className="flex items-center">
                {route.icon}
                <span className="ml-1">{route.key}</span>
              </div>
            </Link>
          ))}
        </div>
      </header>
    </>
  )
}
