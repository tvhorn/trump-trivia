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
          <link
            rel="icon"
            href="https://memepac.s3-us-west-1.amazonaws.com/screen_shot_2020-07-25_at_10-removebg-preview-removebg-preview.png"
            type="image/x-icon"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-174548278-5"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'UA-174548278-5');
        `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
