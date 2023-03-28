import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <HeaderGradient />
      <SectionContainer>
        <div className="flex h-screen flex-col justify-between">
          <header className="flex items-center justify-between py-10">
            <div>
              <Link href="/">
                <div className="flex items-center justify-between">
                  <div className="mr-3">
                    <Logo />
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex items-center text-base leading-5">
              <div className="hidden sm:block">
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
              <MobileNav />
            </div>
          </header>
          <main className="mb-auto">{children}</main>
          <FooterGradient />
        </div>
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper

function HeaderGradient() {
  return (
    <div className="motion-safe:animate-rotate-colors pointer-events-none z-[-2] mx-auto max-w-6xl">
      <div className="absolute inset-x-0 top-[-64px] h-[200px] bg-gradient-to-r from-indigo-300 to-purple-400 opacity-30 blur-3xl" />
    </div>
  )
}

function FooterGradient() {
  return (
    <div className="motion-safe:animate-rotate-colors pointer-events-none z-[-1] mx-auto max-w-6xl">
      <div className="absolute inset-x-0 h-[400px] rounded-t-full bg-gradient-to-r from-amber-500 via-indigo-500 to-emerald-500 opacity-20 blur-3xl" />
    </div>
  )
}
