import Author from "../components/Author";
import RelatedArticles from "../components/RelatedArticles";
import DynamicBlogPost from "../components/DynamicBlogPost";
import { content } from "flowbite-react/tailwind";

export default function Article000003() {
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

  const post = {
    date: {
      pubDatetime: "2024-09-07",
      pubDatetimeTitle: "September 7th, 2024",
      pubDatetimeDisplay: "Sep. 7, 2024",
    },
    url: "how-to-train-a-word2vec-model",
    author: "Faraji Ombonya",
    title: "How to Train a Word2vec Model",
    lead: "In this article, I'll show you how to train a Word2vec model using custom data. You can then use the trained model to perform tasks such as similarity search or powering a recommendation engine.",
    graphic: {
      src: "/blog/Screenshot from 2024-09-07 13-02-53.png",
      alt: "",
      caption: "Digital art by Dall-E",
    },
    content: [
      {
        type: "h2",
        value: "What is Word2vec",
      },
      {
        type: "p",
        value:
          "Word2vec is a family of model architectures and optimizations that can be used to learn word embeddings from large datasets. See this documentation (https://www.tensorflow.org/text/tutorials/word2vec) to learn more about Word2vec and how you can use it.",
      },
      {
        type: "h2",
        value: "Prepare Training Data",
      },
      {
        type: "p",
        value:
          "To train a Word2vec model, you will need data. The data will typically be a list of lists of tokens. We will call this list of lists of tokens, sentences. Each sentence in the collection of sentences will consist of a list of tokens.  Therefore, the majority of the work will be preparing the sentences. For large datasets, Word2vec’s documentation recommends that you stream the list directly from disk or network. This improves the memory efficiency of the function. To achieve this, we will create a python generator that streams one sentence at a time from the disk. See this python’s wiki (https://wiki.python.org/moin/Generators) to learn more about generators and how to use them.",
      },
      {
        type: "p",
        value:
          "Using a generator is memory efficient because we’re not loading the whole dataset in memory at once. Instead, we are loading chunks of 1000 rows and tokenizing and returning only one row at a time. It is also important to note that the generator function is wrapped inside a custom iterator class. This is because you can only iterate once over a generator. Introducing the class wrapper ensures that the Word2vec model can efficiently iterate over the dataset as many times as it would like.",
      },
      {
        type: "h3",
        value: "Initial setup",
      },
      {
        type: "image",
        src: "/blog/Screenshot from 2024-09-07 19-14-08.png",
        alt: "inital setup",
        caption: "inital setup",
      },
      {
        type: "ol",
        value: [
          {
            type: "text",
            value: "Line 1 to 9 imports the necessary packages.",
          },
          {
            type: "text",
            value: "Line 12 to 17 Sets up the django environment.",
          },
        ],
      },
      {
        type: "h3",
        value: "Streaming the Data",
      },
      {
        type: "image",
        src: "/blog/Screenshot from 2024-09-07 19-21-32.png",
        alt: "streaming the data",
        caption: "streaming the data",
      },
      {
        type: "ol",
        value: [
          {
            type: "text",
            value:
              "Line 20 defines a class called Corpus. This class encapsulates all the logic required to stream one tokenized sentence at a time.",
          },
          {
            type: "text",
            value:
              "Line 21 defines the dunder init method that initializes the class. ",
          },
          {
            type: "text",
            value: "Line 22 pre-compiles the regex for better performance. ",
          },
          {
            type: "text",
            value:
              "Line 23 Initializers BertTokenizer. We use Bert Tokenizer to tokenize the sentence to get a list of tokens. ",
          },
          {
            type: "text",
            value:
              "Line 24 creates a variable that contains the path to the dataset.",
          },
          {
            type: "text",
            value:
              "Line 26 defines the dunder iter method. The presence of a dunder iter method on our class means that you can iterate over an object instantiated from this class.",
          },
          {
            type: "text",
            value:
              "Line 27 and 28 The dunder iter method iterates over the iterator object returned by calling our generator function and yields the elements in the iterable. We wrap tqdm around our iterator object to get progress updates. See tqdm's documentation to learn more about it. (https://tqdm.github.io/)",
          },
          {
            type: "text",
            value:
              "Line 30 defines a sentence generator called sentences. A generator looks like a normal python function, but with one key difference. A generator yields an item in a collection instead of returning the entire collection like a function would.",
          },
          {
            type: "text",
            value:
              "Line 31 reads a chunk of the dataset from disk and starts a for loop to iterate over the chunk.",
          },
          {
            type: "text",
            value:
              "Line 32 uses the dataframe’s iterrows method to lazily iterate over each item in the dataframe ",
          },
          {
            type: "text",
            value: "Line 33 to 37 extracts attributes from each row.",
          },
          {
            type: "text",
            value: "Line 38 creates a sentence from the attributes",
          },
          {
            type: "text",
            value: "Line 39 cleans the sentence with the pre compiled regex",
          },
          {
            type: "text",
            value: "Line 40 tokenizes the sentence with tokenizer instance",
          },
          {
            type: "text",
            value: "Finally, line 42 yields the tokenized sentence",
          },
        ],
      },
      {
        type: "h2",
        value: "Train the model",
      },
      {
        type: "p",
        value:
          "After preparing the data, we can now use the tokenized sentences to train the Word2vec model.",
      },
      {
        type: "image",
        src: "/blog/Screenshot from 2024-09-07 19-21-32.png",
        alt: "streaming the data",
        caption: "streaming the data",
      },
      {
        type: "ol",
        value: [
          {
            type: "text",
            value:
              "Line 45 saves the current time. This is used to track how long it takes the script to run.",
          },
          {
            type: "text",
            value:
              "Line 46 instantiates an iterable object from the custom iterable class called Corpus ",
          },
          {
            type: "text",
            value:
              "Line 48 to 55 is where the actual training happens. To train the model, we instantiate the Word2Vec class and pass parameters to the class's constructor function. The parameters are as follows: ",
          },
          // {
          //   type: "ol",
          //   value: [
          //     { type: "text", value: "sentences: A list of lists of tokens" },
          //     {
          //       type: "text",
          //       value: "vector_size: Dimensionality of the word vectors.",
          //     },
          //     {
          //       type: "text",
          //       value:
          //         "window: maximum distance between the current word and the predicted word within a sentence",
          //     },
          //     {
          //       type: "text",
          //       value: "epochs: Number of iterations over the corpus",
          //     },
          //     {
          //       type: "text",
          //       value:
          //         "min_count: the number of times a word has to appear in the corpus to be included in the models library",
          //     },
          //   ],
          // },
          {
            type: "text",
            value:
              "Line 57 to 60 saves two versions of the  model do disk, the binary and the text version.",
          },
          {
            type: "text",
            value:
              "Line 62 to 64 calculates and prints to the console how long the script took to run.",
          },
        ],
      },
      {
        type: "h2",
        value: "Conclusion",
      },
      {
        type: "p",
        value:
          "Training a Word2vec model involves preparing the dataset by efficiently reading the dataset from disk, and passing data to the model’s constructor function. Finally, the model can be saved to disk and later loaded by an application that intends to use it.",
      },
    ],
  };

  return <DynamicBlogPost post={post} />;

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
