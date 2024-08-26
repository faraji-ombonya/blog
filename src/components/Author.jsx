export default function Author({ date }) {
  return (
    <address class="flex items-center mb-6 not-italic">
      <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
        <img
          class="mr-4 w-16 h-16 rounded-full"
          src="/blog/66465098.jpeg"
          alt="Faraji Ombonya"
        />
        <div>
          <a
            href="#"
            rel="author"
            class="text-xl font-bold text-gray-900 dark:text-white"
          >
            Faraji Ombonya
          </a>
          <p class="text-base text-gray-500 dark:text-gray-400">
            Full Stack Sofware Engineer
          </p>
          <p class="text-base text-gray-500 dark:text-gray-400">
            <time
              pubdate
              datetime={date?.pubDatetime}
              title={date?.pubDatetimeTitle}
            >
              {date?.pubDatetimeDisplay}
            </time>
          </p>
        </div>
      </div>
    </address>
  );
}
