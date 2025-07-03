import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="favicon-16x16.png" type="image/x-icon" sizes="16x16" />
        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
        <link rel="stylesheet" href="./assets/styles/tailwind.min.css" />
        <link rel="stylesheet" href="./assets/styles/app.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Chivo:wght@400;700;900&amp;family=Noto+Sans:wght@400;500;600;700;800&amp;display=swap" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        <Script src="/assets/scripts/vendors/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/assets/scripts/vendors/slick.min.js" strategy="afterInteractive" />
        <Script src="/assets/scripts/app.js" strategy="afterInteractive" />

      </body>
    </Html>
  );
}
