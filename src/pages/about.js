import React, { useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Layout from "@/components/Layout";
import profilPic from "../../public/images/profile/binhfnef2.jpg";
import { useMotionValue, useInView, useSpring } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      //console.log(latest);
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Binh Nguyen | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose! "
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            {/*Biography*/}
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">Hi, I'm Binh Nguyen!</p>
              <p className="my-2 font-medium">
                First and formost, Thank you for visiting my website. I hope
                these words give you a clear understanding of the 'software'
                brain I possess.
              </p>
              <p className="my-2 font-medium">
                Do I love computers? Do I have feelings about software? I grew
                up with them, so it's safe to say we are life partners.
                Programming languages are simply how we communicate daily.
              </p>
              <p className="my-2 font-medium">
                My day starts with Python algorithms, continues with lunchtime
                chats about trending UI frameworks, and ends with deep dives
                into backend or database work. This routine shaped my journey
                through Vaasa University of Applied Sciences and Integrify
                Academy.
              </p>
              <p className="my-2 font-medium">
                After reaching these milestones, the question was, 'What's
                next?'. My focus now is on honing my coding skills, solving
                problems daily, and never stopping the grind — success follows
                preparation.
              </p>
              <p className="my-2 font-medium">
                Curious about my current coding world? Keep scrolling to see my
                skills, experiences, and more on this website and my GitHub. If
                you think that my coding style would be a good piece for your
                plan, let me know in advanced, I will not hesitate to make cool
                things happen.
              </p>
            </div>
            {/*Picture*/}
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                priority
                sizes="( max-width: 768px ) 100vw, ( max-width: 1200px ) 50vw, 33vw"
                src={profilPic}
                alt="Binh Nguyen"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            {/*Info*/}
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center ">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
