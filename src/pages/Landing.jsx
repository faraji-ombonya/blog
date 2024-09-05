import { Link } from "react-router-dom";

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
      <header className="">
        <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a
              href="https://flowbite.com"
              className="flex items-center rounded-full"
            >
              <img
                src="/blog/66465098.jpeg"
                className="mr-3 h-6 sm:h-9 rounded-full"
                alt="Flowbite Logo"
              />
            </a>
            <div class="flex items-center">
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  class="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    LinkedIn
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
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
      <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
        <div class="mx-auto max-w-screen-xl text-center">
          <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Portfolio Website
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                Projects
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                About Me
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Contact
              </a>
            </li>
          </ul>
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="#" class="hover:underline">
              Faraji Ombonya
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
