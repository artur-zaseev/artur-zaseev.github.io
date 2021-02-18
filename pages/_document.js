import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/img/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/scripts/metrika.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
