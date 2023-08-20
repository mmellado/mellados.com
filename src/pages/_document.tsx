import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <a href="#main" className="skip-to-main-content-link">
          Skip to main content
        </a>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
