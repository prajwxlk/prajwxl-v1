import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'

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
            <div className="container mx-auto flex flex-col items-center">
              <div className="flex w-full flex-col items-start text-left">
                <h1 className="title-font mt-8 mb-8 text-left text-5xl font-bold tracking-tighter">
                  <span role="img" aria-label="Waving Hand">
                    👋
                  </span>{' '}
                  Hi!
                </h1>
                <p className="mb-2 text-left font-serif text-base leading-relaxed text-gray-700 dark:text-gray-100 sm:text-lg">
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
            <div className="container mx-auto mb-8 flex flex-col">
              <h1 className="title-font text-left text-xl font-bold tracking-tighter  sm:text-3xl">
                <span role="img" aria-label="notebook">
                  ✒️
                </span>{' '}
                Recent Posts
              </h1>
              {!posts.length && 'No posts found.'}
              {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
                const { slug, date, title } = frontMatter
                return (
                  <div key={slug} className="py-2">
                    <article>
                      <div className="xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                        <div className="xl:col-span-3">
                          <div>
                            <div className="flex flex-row">
                              <h2 className="ml-2 content-center text-lg font-semibold sm:text-xl">
                                •{' '}
                                <Link
                                  href={`/blog/${slug}`}
                                  className="text-gray-800 hover:underline hover:decoration-sky-500 hover:underline-offset-2 dark:text-gray-100"
                                >
                                  {title}
                                </Link>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                )
              })}
              <Link
                href="/blog"
                className="text-lg text-gray-800 hover:underline hover:decoration-sky-500 hover:decoration-wavy dark:text-gray-100"
                aria-label="all notes"
              >
                All Posts &rarr;
              </Link>
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
