export const blogPosts = [
  {
    date: {
      pubDatetime: "2024-09-07",
      pubDatetimeTitle: "September 7th, 2024",
      pubDatetimeDisplay: "Sep. 7, 2024",
    },
    slug: "how-to-train-a-word2vec-model",
    url: "/how-to-train-a-word2vec-model",
    author: "Faraji Ombonya",
    title: "How to Train a Word2vec Model",
    lead: "In this article, I'll show you how to train a Word2vec model using custom data. You can then use the trained model to perform tasks such as similarity search or powering a recommendation engine.",
    graphic: {
      src: "/blog/Screenshot from 2024-09-07 13-02-53.png",
      alt: "",
      caption: "Digital art by Dall-E",
    },
    relatedPosts: [
      "how-i-built-a-library-search-engine-powered-by-vector-search",
    ],
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
  },
  {
    date: {
      pubDatetime: "2024-09-07",
      pubDatetimeTitle: "September 7th, 2024",
      pubDatetimeDisplay: "Sep. 7, 2024",
    },
    slug: "2",
    url: "/how-to-train-a-word2vec-model",
    author: "Faraji Ombonya",
    title: "How to Train a Word2vec Model",
    lead: "In this article, I'll show you how to train a Word2vec model using custom data. You can then use the trained model to perform tasks such as similarity search or powering a recommendation engine.",
    graphic: {
      src: "/blog/Screenshot from 2024-09-07 13-02-53.png",
      alt: "",
      caption: "Digital art by Dall-E",
    },
    relatedPosts: [
      "how-i-built-a-library-search-engine-powered-by-vector-search",
    ],
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
     
    
    ],
  },
];
