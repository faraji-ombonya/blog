import Author from "../components/Author";
import NotFound from "../components/NotFound";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

export default function ArticleDetail() {
  const { slug } = useParams();
  const [blogPost, setBlogPost] = useState(
    blogPosts?.find((element) => element?.slug == slug)
  );

  useEffect(() => {
    const handleSlugChange = () => {
      const post = blogPosts?.find((element) => element?.slug == slug);
      setBlogPost(post);
    };
    handleSlugChange();
  }, [slug]);

  return blogPost ? <DynamicBlogPost post={blogPost} /> : <NotFound />;
}

function RenderContent({ content }) {
  if (Array.isArray(content)) {
    return content?.map((item, index) => (
      <RenderContent key={index} content={item} />
    ));
  }

  switch (content.type) {
    case "p":
      if (Array.isArray(content?.value)) {
        return (
          <p>
            {content?.value?.map((item, index) => (
              <RenderContent key={index} content={item} />
            ))}
          </p>
        );
      } else {
        return <p>{content?.value}</p>;
      }

    case "h1":
      return <h1>{content?.value}</h1>;
    case "h2":
      return <h2>{content?.value}</h2>;
    case "h3":
      return <h3>{content?.value}</h3>;
    case "text":
      return <span>{content.value}</span>;

    case "link":
      return <a href={content?.url}>{content?.value}</a>;

    case "li":
      if (Array.isArray(content?.value)) {
        return (
          <li>
            {content?.value?.map((item, index) => (
              <RenderContent key={index} content={item} />
            ))}
          </li>
        );
      } else {
        return <li key={content?.index}>{content?.value}</li>;
      }

    case "image":
      return (
        <figure>
          <img src={content?.src} alt={content?.alt}></img>
          <figcaption>{content?.alt}</figcaption>
        </figure>
      );
    case "ol":
      return (
        <ol>
          {content?.value?.map((item, index) => (
            <RenderContent key={index} content={item} />
          ))}
        </ol>
      );
    case "ul":
      return (
        <ul>
          {content?.value?.map((item, index) => (
            <RenderContent key={index} content={item} />
          ))}
        </ul>
      );
    default:
      return null;
  }
}

export function DynamicBlogPost({ post }) {
  return (
    <main class="text-left pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header class="mb-4 lg:mb-6 not-format">
            <Author date={post?.date} />
            <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
              {post?.title}
            </h1>
          </header>
          <p class="lead">{post?.lead}</p>
          <figure>
            <img src={post?.graphic?.src} alt={post?.graphic?.alt} />
            <figcaption>{post?.graphic?.caption}</figcaption>
          </figure>

          <RenderContent content={post?.content} />
        </article>
      </div>
    </main>
  );
}
