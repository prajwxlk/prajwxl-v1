import formatDate from '@/lib/utils/formatDate'
import Link from 'next/link'

export default function BlogPostCard({ title, slug, index, date }) {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full" aria-label={title}>
        <div className="w-full transform border-b border-gray-200 py-3 transition-all hover:scale-[1.01] dark:border-gray-700">
          <div className="flex flex-col justify-between sm:flex-row sm:items-center">
            <div className="flex items-center">
              <div className="mr-6 text-left text-gray-300 dark:text-gray-400">{index}</div>
              <h4 className="w-full text-base font-medium text-gray-800 dark:text-gray-100 sm:text-lg">
                {title}
              </h4>
            </div>
            <div className="mt-2 flex hidden items-center justify-between sm:mt-0 sm:block">
              <p className="mr-2 ml-8 text-left text-sm text-gray-500 dark:text-gray-400 sm:ml-0 sm:text-right md:mb-0">
                <time dateTime={date}>{formatDate(date)}</time>
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}
