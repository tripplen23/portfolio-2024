import "@/styles/globals.css";
import { Orbitron } from "next/font/google";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orb",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${orbitron.variable} font-orb bg-light dark:bg-dark w-full min-h-screen`}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
