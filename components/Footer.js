import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <FooterGradient />
      <div className="mt-4 flex flex-col items-center sm:mt-8">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  )
}

function FooterGradient() {
  return (
    <div className="motion-safe:animate-rotate-colors pointer-events-none z-[-1] mx-auto max-w-6xl">
      <div className="absolute inset-x-0 h-[200px] rounded-t-full bg-gradient-to-r from-amber-500 via-indigo-500 to-emerald-500 opacity-20 blur-3xl" />
    </div>
  )
}
