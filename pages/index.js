import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'
import NewsletterForm from '@/components/NewsletterForm'
import BlogPostCard from '@/components/BlogPostCard'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <section>
            <div className="flex flex-col-reverse">
              <div className="flex flex-col pr-8">
                <h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-4xl">
                  Prajwxl
                </h1>
                <h2 className="mb-1 text-xl font-bold tracking-tight text-zinc-600 dark:text-white md:text-2xl">
                  Shipping AI Products
                </h2>
              </div>
              <div className="relative mr-auto w-[100px] sm:mb-0 sm:w-[200px]">
                <Image
                  src="/static/images/avatar.png"
                  alt="avatar"
                  width="200px"
                  height="200px"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="container mx-auto flex flex-col items-center">
              <div className="flex w-full flex-col items-start text-left">
                <p className="my-2 text-left font-serif text-base leading-relaxed text-gray-700 dark:text-gray-100 sm:text-lg">
                  I am Prajwal, currently working on getting better at coding and startups.
                  I&apos;ve been building projects and doing various side hustles for couple of
                  years now and have had good success at some and failed at the rest. Learning more
                  about ML & RL right now.
                </p>
                <p className="mb-8 text-left font-serif text-base leading-relaxed text-gray-700 dark:text-gray-100 sm:text-lg">
                  I am eighteen, learning new things, building cool stuff, and occasionally writing
                  about it here.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              <div className="space-y-2 pt-6 pb-4 md:space-y-5">
                <h3 className="mt-4 mb-2 text-2xl font-bold tracking-tight text-black dark:text-white md:text-3xl">
                  <span role="img" aria-label="notebook">
                    ✒️
                  </span>{' '}
                  Recent Posts
                </h3>
              </div>

              <div className="mb-6">
                {!posts.length && 'No posts found.'}
                {posts.slice(0, MAX_DISPLAY).map((frontMatter, index) => {
                  const { slug, title, date } = frontMatter

                  return (
                    <BlogPostCard
                      key={slug}
                      date={date}
                      index={index + 1}
                      title={title}
                      slug={slug}
                    />
                  )
                })}
              </div>
            </div>
          </section>

          <section>
            <div className="container mx-auto mb-8 flex flex-col">
              <h1 className="title-font pb-2 text-left text-xl font-bold tracking-tighter  sm:text-3xl">
                <span role="img" aria-label="tools">
                  ⚙️
                </span>{' '}
                Projects and Builds
              </h1>
              <Link
                href="/projects"
                className="text-lg text-gray-800 hover:underline hover:decoration-sky-500 hover:decoration-wavy dark:text-gray-100"
                aria-label="all notes"
              >
                All Projects &rarr;
              </Link>
            </div>
          </section>

          <section>
            <div className="content mt-12 sm:mt-24">
              <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">Experiences</h2>
              <ul className="mt-8">
                <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
                  <a
                    className="link focusable font-medium text-zinc-800 dark:text-white"
                    href="https://www.psytech.ai/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Image
                      src="/static/images/psytech_logo.png"
                      alt="Psytech"
                      width="50px"
                      height="50px"
                      className="rounded-md"
                    />
                  </a>
                  <div className="flex min-w-0 flex-col justify-center">
                    <p className="mb-1 flex items-center">
                      <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                        Psytech
                      </span>
                      <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                        2022
                        <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
                        2022
                      </span>
                    </p>
                    <p className="flex items-center truncate">
                      <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                        Intern
                      </span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div className="container mx-auto flex flex-col md:flex-row">
              <div className="mb-8 flex w-full flex-col items-start text-left">
                <h1 className="title-font mb-2 text-left text-xl font-bold tracking-tighter  sm:text-3xl">
                  Get in touch
                </h1>
                <p className="text-blueGray-600 mb-2 text-left font-serif text-base leading-relaxed text-gray-700 dark:text-gray-100 sm:text-lg">
                  I am available on twitter{' '}
                  <Link href="https://twitter.com/prajwxl">
                    <a className="underline decoration-sky-500 decoration-2 underline-offset-2 hover:decoration-sky-700">
                      @prajwxl.
                    </a>
                  </Link>{' '}
                  You can reach out to me on my{' '}
                  <Link href="mailto:pskadbane964@gmail.com">
                    <a className="underline decoration-sky-500 decoration-2 underline-offset-2 hover:decoration-sky-700">
                      email.
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
