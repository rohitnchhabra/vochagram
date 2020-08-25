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
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
          {/* <link rel="stylesheet" href="owl-carousel/owl.theme.css" /> */}
          {/* <script
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.2.0/jquery-migrate.min.js"
            crossOrigin="anonymous"
          ></script> */}
          
        </Head>
        <body
        //   data-spy="scroll"
        //   data-target=".site-navbar-target"
        //   data-offset="300"
        >
          <Main />
          <NextScript />

        </body>
      </Html>
    );
  }
}

export default MyDocument;
