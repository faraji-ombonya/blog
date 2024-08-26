import { Link } from "react-router-dom";

export default function RelatedArticles({ relatedArticles }) {
  return (
    <aside
      aria-label="Related articles"
      class="text-left py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
    >
      <div class="px-4 mx-auto max-w-screen-xl">
        <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
          Related articles
        </h2>
        <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {relatedArticles?.map((article) => (
            <article class="max-w-xs">
              <Link to={article?.link}>
                <img
                  src={article?.imageUrl}
                  class="mb-5 rounded-lg"
                  alt="Image 1"
                />
              </Link>
              <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <Link to={article?.link}>{article?.title}</Link>
              </h2>
              <p class="mb-4 text-gray-500 dark:text-gray-400">
                {article?.description}
              </p>
              <Link
                to={article?.link}
                class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                {article?.linkText}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
}
