import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { blogPosts } from "../data/blogPosts";

export default function Landing() {
  return (
    <div>
      <Header />
      <div class="text-left">
        {blogPosts?.map((post) => (
          <section class="bg-white dark:bg-gray-900">
            <div className="gap-16 items-start py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div class="grid grid-cols-1 gap-4 mt-8 lg:order-last">
                <img
                  className="w-full rounded-lg"
                  src={post?.graphic?.src}
                  alt="office content 1"
                />
              </div>

              <div class=" text-gray-500 sm:text-lg dark:text-gray-400 mt-8 content-between ">
                <h2 className="mb-2 text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                  {post?.title}
                </h2>
                <p className="mb-4 text-gray-500 dark:text-gray-400">
                  {post?.lead}
                </p>
                <Link
                  to={post?.url}
                  class="mt-4 inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                >
                  {post?.linkText}
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
