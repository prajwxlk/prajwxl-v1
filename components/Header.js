import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'
import MobileNav from './MobileNav'
import headerNavLinks from '@/data/headerNavLinks'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  return (
    <div className="flex w-full justify-center">
      <header className="fixed z-50 mt-10 flex w-5/6 items-center justify-between rounded-full bg-gray-300 p-2 dark:bg-gray-600 sm:top-0 sm:w-3/5">
        <div>
          <Link href="/">
            <div className="flex items-center justify-between">
              <div
                className={`mr-3 p-2 ${
                  router.pathname === '/' ? 'rounded-full bg-blue-500 text-white' : ''
                } hover:rounded-full hover:bg-blue-500 hover:text-white`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center text-base leading-5">
          <div
            className={`p-2 px-4 hover:rounded-full opacity-75 hover:bg-blue-500 hover:text-white sm:block ${
              router.pathname.includes('/blog') ? 'rounded-full bg-blue-500 text-white' : ''
            }`}
          >
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <ThemeSwitch />
        </div>
      </header>
    </div>
  )
}
