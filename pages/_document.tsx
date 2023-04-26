import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ICONS } from '@constants/images';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href={ICONS.FAVICON} type="image/svg" />
          <meta property="og:title" content="Project-title" />
          <meta property="og:image" content="/images/img_meta.png" />
          <meta property="og:description" content="Project-description" />
          <meta property="og:url" content="https://project-name.vercel.app" />
          <meta name="description" content="Project-description" />
          <meta name="keywords" content="Project-keywords" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap"
            rel="preload"
            as="style"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <div id="_modal"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
