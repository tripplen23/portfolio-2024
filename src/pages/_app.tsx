import "@/styles/globals.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { IBM_Plex_Mono } from "next/font/google";

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.jpg" />
      </Head>
      <main
        className={`${plexMono.variable} font-mono bg-light dark:bg-dark w-full min-h-screen`}
      >
        <Navbar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
