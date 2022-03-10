import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap '
            rel='stylesheet'
          />
          <meta
            name='description'
            content='Front-end developer looking for a job'
          />
        </Head>
        <body className='dark:from-dark-500 dark:to-dark-700 bg-gray-100 bg-fixed dark:bg-black dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
