import Author from "../components/Author";
import RelatedArticles from "../components/RelatedArticles";

export default function Article000002() {
  const date = {
    pubDatetime: "2024-09-02",
    pubDatetimeTitle: "September 2nd, 2024",
    pubDatetimeDisplay: "Sep. 2, 2024",
  };
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
                How I Built a Library Search Engine Powered by Vector Search
              </h1>
            </header>
            <p class="lead">
              Keyword search sometimes is not enough. Sometimes you want to
              search based on meaning. This is where vector search comes in. In
              this article, I want to take you through how I built a Library
              Search Engine that is powered by vector search.
            </p>
            <figure>
              <img src="/blog/vector-search-banner.webp" alt="" />
              <figcaption>Digital art by Anonymous</figcaption>
            </figure>
            <h2>Setting up the vector database</h2>
            <p>
              To store vectors in my PostgreSQL database, I needed to set up
              pgvector. Pgvector is an open source vector similarity search for
              Postgres. See{" "}
              <a
                target="_blank"
                href="https://github.com/pgvector/pgvector/blob/master/README.md"
              >
                Pgvector's documentation
              </a>
              , to learn more about what it is and how to set it up. See this
              for{" "}
              <a
                target="_blank"
                href="https://github.com/pgvector/pgvector-python?tab=readme-ov-file#django"
              >
                python(django) specific documentation
              </a>
              . Pgvector allowed me to store embeddings in a Postgresql database
              instead of a specialized vector database.
            </p>
            <h2>Training the Word2Vec model</h2>
            <p>
              To train the Word2Vec model, I created a script that loads the
              dataset with pandas, iterates over each book. Takes important
              attributes e.g name, description etc. and builds a chunk of text
              with information about the book. We will call this chunk of text a
              sentence. It then tokenizes the sentences with BertTokenizer.
              BertTokenizer will transform the sentence into lowercase and split
              the sentence into a list of tokens. It then takes a list of all
              tokenized sentences and passes them to the Word2Vec model for
              training. After successful training, the model is saved to a file.
            </p>
            <h2>Seeding the database</h2>
            <p>
              Seeding the database involved the following steps. Creating a
              script that uses pandas to load the dataset from a csv file. Uses
              iterrows method from the dataframe object to efficiently iterate
              over the dataset and create a book object from each line. Loading
              the list of books into the database in bulk.{" "}
            </p>
            <h2>Generating embeddings</h2>
            <p>
              Embeddings are vector representations of words that contain
              meaning. To generate embeddings, I started by iterating over all
              book objects in the database. Next, using the attributes of each
              book, I created a sentence. A sentence, in this context, is a
              group of texts that describe an object. For instance, the
              attributes of a book object e.g the book’s title, description,
              authors e.t.c. make up a sentence. I then tokenized the sentence
              with BertTokenizer. After tokenization, I ended up with a list of
              tokens. Thereafter, I filtered out invalid tokens by checking that
              each token was present in the model’s keyed vectors. I then
              created a list of vectors. Each Item in the list was a vector
              representation of each token. I then averaged the vectors with
              numpy’s mean method to get one average embedding. I then used the
              average embedding to update the book’s embedding field and saved
              the object.{" "}
            </p>
            <h2>
              Generating embeddings and seeding the database at the same time
            </h2>
            <p>
              I also decided to add another script that generates embeddings and
              seeds the database at the same time. This is different from
              previous approaches where seeding and generating embeddings
              happened in two separate steps. I started by creating a book
              generator. A generator in python is an iterable that yields the
              next item in the sequence when needed. The generator loads the
              dataset with pandas. Uses the dataframe’s iterrows methods to
              iterate over rows in the dataset. Each row in the dataset
              represents a book. The generator then creates a book object that
              also includes the book’s embeddings and finally yields the book. I
              then loaded the books into the database by using Book.objects
              created in bulk method and passing the books generator as an
              iterable.{" "}
            </p>
            <p>
              There are several advantages to this approach. One, we’re
              leveraging django ORM’s create_bulk etc. The limitations to this
              approach is it is only useful if you need to clear the whole
              database, It does not make sense If your database already has
              items.
            </p>

            <h2>API</h2>
            <h3>Model</h3>
            <p>
              A Django model that represents a book with attributes such as
              title, description, authors, publisher and embeddings. The
              embeddings property stores the embeddings of the book.{" "}
            </p>
            <h3>Serializer</h3>
            <p>A simple Django rest framework model serializer</p>
            <h3>View</h3>
            <p>
              {" "}
              After setting up the model and the searializer, the next step was
              to write the logic that would leverage the setup to serve search
              request. I therefore started by getting the submitted search term
              from the request object and applied regex on it to remove special
              characters. Next, I used BertTokenizer to tokenize the search
              term. Using BertTokenizer on a sentence returns a list of tokens.
              I then filtered out valid tokens by checking that the token exists
              in the model’s keys vectors. I then used numpy’s mean method to
              get the average embeddings for the list of tokens.{" "}
            </p>
            <p>
              After preprocessing the search term and getting its vector
              representation, I was now ready to perform a query that retrieves
              items with similar embeddings. I achieved this by using the
              CosineDistance function provided by pgvector.django package to
              annotate each item in the queryset with a distance relative to the
              search embeddings. After annotating, I ordered the items by the
              annotated distance and applied a filter that only gets items with
              a distance of less than 0.5 from the search term embeddings.
              Finally, I prepared the response by paginating the queryset and
              including relevant metadata before returning the response.
            </p>
            <h2>Conclusion</h2>
            <p>
              In conclusion, to leverage vector search to power search I had to:
              Setup pg vector, train a Word2Vec model, use the model to generate
              embeddings. Store those embeddings in a vector database, use
              Cosine distance to perform similarity search.
            </p>
          </article>
        </div>
      </main>

      <RelatedArticles relatedArticles={relatedArticles} />
    </>
  );
}
