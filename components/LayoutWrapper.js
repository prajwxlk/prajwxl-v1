import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Footer from './Footer'
import Header from './Header'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <HeaderGradient />
      <SectionContainer>
        <div className="flex h-screen flex-col justify-between">
          <main className="mb-auto mt-24">{children}</main>
          <Footer />
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
      <div className="absolute inset-x-0 h-[100px] rounded-t-full bg-gradient-to-r from-amber-500 via-indigo-500 to-emerald-500 opacity-20 blur-3xl sm:h-[200px]" />
    </div>
  )
}
