import Author from "../components/Author";
import RelatedArticles from "../components/RelatedArticles";

export default function Article000001() {
  const date = {
    pubDatetime: "2024-08-26",
    pubDatetimeTitle: "August 26th, 2024",
    pubDatetimeDisplay: "Aug. 26, 2024",
  };

  const snippet1 = `
  import { defineConfig } from 'some-config-library';

  export default defineConfig({
    // …
    build: {
      outDir: "docs",
    },
    // …
  });
  `;

  const relatedArticles = [
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
      title: "How I deployed my React Application on Github Pages",
      description:
        "Over the past year, Volosoft has undergone many changes! After months of preparation.",
      link: "/how-i-deployed-my-app-on-gh-pages",
      linkText: "Read in 2 minutes",
      imageUrl:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png",
    },
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
      title: "How I deployed my React Application on Github Pages",
      description:
        "Over the past year, Volosoft has undergone many changes! After months of preparation.",
      link: "/how-i-deployed-my-app-on-gh-pages",
      linkText: "Read in 2 minutes",
      imageUrl:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png",
    },
  ];
  return (
    <>
      <main class="text-left pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header class="mb-4 lg:mb-6 not-format">
              <Author date={date} />
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                How I Deployed my React Application with GitHub Pages
              </h1>
            </header>
            <p>
              After weeks of massive effort, I finally created my portfolio
              website and needed a place to deploy. The deployment options I had
              were Vercel, s3 site on AWS and github pages. I decided to go with
              github pages because it was free and also simple to deploy. GitHub
              Pages also had simple CI/CD already integrated. This meant that
              after a successful setup, all I needed to do was push to
              production and my application would be deployed.
            </p>
            <p>
              Before the application was ready to deploy, there are a couple of
              things I did in the setup phase of the portfolio website that I
              think are worth mentioning. To get started, I created the React
              application with{" "}
              <a target="blank" href="https://tailwindcss.com/docs/guides/vite">
                Vite and Tailwind CSS.
              </a>
            </p>
            <p>
              After initializing the project, I then configured NPM to use the
              docs directory as the output folder when building for production.
              This is a trick I learnt after painful months of manually renaming
              my output folder from build to docs. NPM by default uses the build
              folder as its output folder while building for production. GH
              pages uses either root or docs subdirectory for deployment. So, to
              configure my project to output to the docs directory, all I had to
              do was to go to the vite.config.js file and added the following to
              the configuration file.
            </p>
            <code>vite.config.js</code>
            <pre>
              <code class="language-jsx">{snippet1}</code>
            </pre>
            <p>
              When I was finally ready to deploy the website. The next step was
              to set up GH pages to use the master branch for deployment. To set
              up GH pages:
            </p>

            <ol>
              <li>Go to the repository, then settings, then GH pages.</li>
              <li>
                Select the deployment branch as master and the output folder as
                docs
              </li>
            </ol>
            <p>
              After Completing the setup I noticed that my site was appearing
              blank. After digging around on the internet, I learnt that I
              needed to add a .nojekyll file to prevent github pages from using
              jekyll to deploy my site. To learn more about jekyll, checkout its{" "}
              <a target="blank" href="https://jekyllrb.com/docs/">
                documentation.
              </a>
            </p>
            <p>
              After Deploying the first site, It was perfect. But after
              deploying my second site I started realizing some problems.
              Refreshing any client side urls resulted in a 404 error page from
              GH Pages. After a little digging on the internet, I learnt that
              refreshing meant that my client(browser) was requesting for a
              resource that the server was not aware of. There were a couple of
              solutions on how I could have solved this. See this{" "}
              <a
                target="blank"
                href="https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually"
              >
                stackoverflow post
              </a>{" "}
              for more information about the nature of the problem and how to
              solve it. Finally, I decided to use React Router Dom’s hash router
              with react router dom instead of a browser router. The reason
              being that, in my particular setup, I had multiple sites deployed
              on the same GH pages server, also using the same base url. The
              downside to this approach at least in my view is that it does not
              work with search engine optimization.
            </p>

            <p>
              Page blocked because of disallowed Mime type. This is also another
              problem I faced that I feel is worth mentioning. Checkout this{" "}
              <a
                href="https://github.com/vitejs/vite/discussions/13910"
                target="_blank"
                rel="noopener noreferrer"
              >
                github duscussion
              </a>{" "}
              for more information about the nature of the problem and ways to
              solve it. I solved It by adding a base url in the{" "}
              <code>vite.config.js</code>
              file{" "}
              <pre>
                <code>base: "https://faraji-ombonya.github.io/blog/",</code>
              </pre>{" "}
              This made my application use the url as the base url for proper
              routing of asset files.
            </p>
          </article>
        </div>
      </main>

      <RelatedArticles relatedArticles={relatedArticles} />
    </>
  );
}
