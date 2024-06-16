import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import coursera_aiForEveryone from "../../public/images/certificates/coursera_aiForEveryone.png";
import f8_jsBasic from "../../public/images/certificates/f8_jsBasic.png";
import itd_intern from "../../public/images/certificates/itd_intern.png";
import ofh_cicd from "../../public/images/certificates/ofh_cicd.png";
import ofh_fullstackWebDevelopment from "../../public/images/certificates/ofh_fullstackWebDevelopment.png";
import ofh_graphql from "../../public/images/certificates/ofh_graphql.png";
import ofh_reactNative from "../../public/images/certificates/ofh_reactNative.png";
import ofh_typescript from "../../public/images/certificates/ofh_typescript.png";
import vamk_diploma from "../../public/images/certificates/vamk_diploma.png";

import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg"
      />
    </Link>
  );
};

const Certificate = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-8 border border-solid border-dark border-r-4 border-b-4"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4">{date}</span>
    </motion.li>
  );
};

const FeaturedCertificate = ({ img, title, description, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[100.5%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{description}</p>
    </li>
  );
};

const certificate = () => {
  return (
    <>
      <Head>
        <title>Binh Nguyen | Certifications Page</title>s
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText text="Words Can Change The World! " className="mb-16" />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedCertificate
              title="Degree Certificate of Vaasa University of Applied Sciences"
              description="Graduated from Vaasa University of Applied Sciences. Major in Information Technology."
              link="/Diploma2001352.pdf"
              img={vamk_diploma}
            />
            <FeaturedCertificate
              title="ITD Intern Assessment result 2023"
              description="Assessment form for 6 months practical training at ITD group Vietnam."
              link="/InternAssessmentResult.pdf"
              img={itd_intern}
            />
            <FeaturedCertificate
              title="Integrify Certificate of Completion"
              description="Learn how to build fullstack web applications using React and .NET, have a chance to work with PostgreSQL, Azure Cloud, and CI/CD concepts."
              link="/"
              img={vamk_diploma}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Certificates
          </h2>
          <ul>
            <Certificate
              title="Basic Javascript"
              date="Novemver, 2022"
              link="https://fullstack.edu.vn/cert/f35hj"
              img={f8_jsBasic}
            />
            <Certificate
              title="Fullstack Open Helsinki - Fullstack Web Development"
              date="August, 2023"
              link="https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/3539f151c3f192e5a06759db2c2100be"
              img={ofh_fullstackWebDevelopment}
            />
            <Certificate
              title="AI For Everyone"
              date="August, 2023"
              link="https://coursera.org/share/622f0ff3f048de049872d2a2a1e8737b"
              img={coursera_aiForEveryone}
            />
            <Certificate
              title="Fullstack Open Helsinki - React Native"
              date="October, 2023"
              link="https://studies.cs.helsinki.fi/stats/api/certificate/fs-react-native-2020/en/e32ab972bfd4d501979829dc72aeee76"
              img={ofh_reactNative}
            />
            <Certificate
              title="Fullstack Open Helsinki - GraphQL"
              date="October, 2023"
              link="https://studies.cs.helsinki.fi/stats/api/certificate/fs-graphql/en/319f2ac6fe6eaaa616f0aab5078d1bf1"
              img={ofh_graphql}
            />
            <Certificate
              title="Fullstack Open Helsinki - TypeScript"
              date="November, 2023"
              link="https://studies.cs.helsinki.fi/stats/api/certificate/fs-typescript/en/023f6d7d04aab56aea4a58ba88de01b9"
              img={ofh_typescript}
            />
            <Certificate
              title="Fullstack Open Helsinki - CI/CD"
              date="January, 2024"
              link="https://studies.cs.helsinki.fi/stats/api/certificate/fs-cicd/en/5de71736172166a530e1fe9a3fb1bebe"
              img={ofh_cicd}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default certificate;
