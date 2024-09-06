import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Landing() {
  const articles = [
    {
      title: "How I deployed my React Application on Github Pages",
      description:
        "Over the past year, Volosoft has undergone many changes! After months of preparation.",
      link: "/how-i-deployed-my-app-on-gh-pages",
      linkText: "Read in 2 minutes",
      imageUrl:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png",
    },
    {
      title: "How I Built a Library Search Engine Powered by Vector Search",
      description:
        "Keyword search sometimes is not enough. Sometimes you want to search based on meaning. This is where vector search comes in. In this article, I want to take you through how I built a Library Search Engine that is powered by vector search.",
      link: "/how-i-built-a-library-search-engine-powered-by-vector-search",
      linkText: "Read in 5 minutes",
      imageUrl: "/blog/vector-search-banner.webp",
    },
  ];

  return (
    <div>
      <Header />
      <div class="text-left">
        {articles?.map((article) => (
          <section class="bg-white dark:bg-gray-900">
            <div className="gap-16 items-start py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div class="grid grid-cols-1 gap-4 mt-8 lg:order-last">
                <img
                  className="w-full rounded-lg"
                  src={article?.imageUrl}
                  alt="office content 1"
                />
              </div>

              <div class=" text-gray-500 sm:text-lg dark:text-gray-400 mt-8 content-between ">
                <h2 className="mb-2 text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                  {article?.title}
                </h2>
                <p className="mb-4 text-gray-500 dark:text-gray-400">
                  {article?.description}
                </p>
                <Link
                  to={article?.link}
                  class="mt-4 inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                >
                  {article?.linkText}
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>
      <Footer />
    </div>
  );
}
