/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Layout from "@/components/Layout";
import GoToTopComponent from "@/components/GoToTopComponent";
import TransitionEffect from "@/components/TransitionEffect";
import Image from "next/image";
import profilePic from "@/images/profile/binhnguyenanime.png";
import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import Link from "next/link";
import syn1608 from "@/images/syn1608.png";
import ShineBorder from "@/components/magicui/shine-border";
import HyperText from "@/components/magicui/hyper-text";

export default function Home() {
  return (
    <>
      <Head>
        <title>Binh Nguyen</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-2 sm:pt-1">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="BinhNguyen"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="( max-width: 768px ) 100vw, ( max-width: 1200px ) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Tech World behind my eyes."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                A skillful full-stack developer? A computer nerd? An artist who
                can code? I prefer the term 'Tech Wizard.' Currently, the main
                branches of magic I am mastering include C#, .NET, React,
                Node.js, PostgreSQL, And Azure Cloud. With these skills, I
                aspire to contribute positively to our world, especially in this
                era of digital transformation.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/cv.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  Resume {/*<LinkArrow className={"w-6 ml-1"} />*/}
                </Link>
                <Link
                  href="mailto:binh.nguyen@integrify.io"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <GoToTopComponent />
        </Layout>
        <HireMe />
        <div>
          <ShineBorder className=" absolute right-8 bottom-8 inline-block w-24 bg-dark md:hidden">
            <div className="flex items-center">
              <Image src={syn1608} alt="BinhNguyen" className="w-24 h-24" />
              <HyperText
                className="ml-2 text-light"
                text="Represent"
                duration={3800}
              />
            </div>
          </ShineBorder>
        </div>
      </main>
    </>
  );
}
