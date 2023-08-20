import Head from "next/head";
import { Inconsolata } from "next/font/google";
import Navigation from "@/components/Navigation";
import Body from "@/components/Body";

// If loading a variable font, you don't need to specify the font weight
const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inconsolata.className}>
      <Head>
        <title>Home | Marcos Mellado</title>
        <meta
          name="description"
          content="Software Engineering leader & Accessibility Advocate"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:title" content="Home" />
        <meta
          property="og:description"
          content="Engineering leader &amp; Accessibility Advocate"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@mmellado" />
        <meta name="twitter:title" content="Home | Marcos Mellado" />
        <meta
          name="twitter:description"
          content="Engineering leader &amp; Accessibility Advocate"
        />
        <meta name="color-scheme" content="dark light" />
      </Head>
      <Navigation />
      <Body />
    </div>
  );
}
