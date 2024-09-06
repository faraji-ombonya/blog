export default function Footer() {
  return (
    <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div class="mx-auto max-w-screen-xl text-center">
        <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <a
              href="https://faraji-ombonya.github.io/blog/"
              class="mr-4 hover:underline md:mr-6 "
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="https://faraji-ombonya.github.io/#/"
              class="mr-4 hover:underline md:mr-6"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="https://github.com/faraji-ombonya"
              class="mr-4 hover:underline md:mr-6 "
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/faraji-ombonya"
              class="mr-4 hover:underline md:mr-6"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://faraji-ombonya.github.io/#/about"
              class="mr-4 hover:underline md:mr-6"
            >
              About Me
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
  );
}
