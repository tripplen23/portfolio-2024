import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import Layout from "@/components/Layout";
import GoToTopComponent from "@/components/GoToTopComponent";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import ecommerceBackEnd2024 from "@/images/projects/ecommerceBackEnd2024.png";
import ecommerceFrontEnd2024 from "@/images/projects/ecommerceFrontEnd2024.png";
import mahalo2022 from "@/images/projects/mahalo2022.png";
import thesis2024 from "@/images/projects/thesis2024.png";
import portfolio2022 from "@/images/projects/portfolio2022.png";
import portfolio2024 from "@/images/projects/portfolio2024.png";
import azeventmanagement from "@/images/projects/azeventmanagement.png";
import bioGenerator from "@/images/projects/bio_generator.png";

// Backend Ecommerce
const linkProject1 = "https://sync-ecommerce.azurewebsites.net/index.html";
const githubProject1 = "https://github.com/tripplen23/synchronize-server";

// Frontend Ecommerce
const linkProject2 = "https://fs17-frontend-project-zln9-kl59btf0o.vercel.app/";
const githubProject2 = "https://github.com/tripplen23/synchronize-client";

// Mahalo
const linkProject3 = "https://mahalo-restaurant.vercel.app/";
const githubProject3 = "https://github.com/tripplen23/mahaloRestaurant";

// Thesis 2024
const linkProject4 = "https://www.theseus.fi/handle/10024/854589";
const githubProject4 = "https://github.com/tripplen23/thesis";

// Portfolio 2022
const linkProject5 = "https://github.com/tripplen23/portfolio-2022";
const githubProject5 = "https://github.com/tripplen23/portfolio-2022";

// Portfolio 2024
const linkProject6 = "/";
const githubProject6 = "https://github.com/tripplen23/portfolio-2024";

// Az Event Management 2024
const linkProject7 = "https://github.com/tripplen23/az-eventmanagement";
const githubProject7 = "https://github.com/tripplen23/az-eventmanagement";

// Bio Generator 2024
const linkProject8 = "https://bio-generator-wine.vercel.app/";
const githubProject8 = "https://github.com/tripplen23/bio-generator";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[100.5%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="( max-width: 768px ) 100vw, ( max-width: 1200px ) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[100.5%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const ProjectPage = () => {
  return (
    <>
      <Head>
        <title>Binh Nguyen | Project Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Coding garden"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Ecommerce Back End"
                title="Synchronize ecommerce webshop Server"
                summary="A project built during my time at Integrify Academy. It was a great experience learning how to build a back end webshop using C#, .NET, ASP, and PostgreSQL. The project was offered me a chance to work with the other developers that enhance me a lot of skills in communication in the Tech World."
                img={ecommerceBackEnd2024}
                link={linkProject1}
                github={githubProject1}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Fullstack Web Development"
                title="Synchronize ecommerce webshop"
                img={ecommerceFrontEnd2024}
                link={linkProject2}
                github={githubProject2}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="UI Web Development"
                title="Mahalo Webshop 2022"
                img={mahalo2022}
                link={linkProject3}
                github={githubProject3}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Thesis"
                title="Researching and AI Testing Strategirs for Video Management System. "
                summary="The thesis that I was working on during my time at Vaasa University of Applied Sciences in 2024. The project was a great experience for me to practice critical thinking, the way to approach a problem, and how to solve it."
                img={thesis2024}
                link={linkProject4}
                github={githubProject4}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Web Development"
                title="Portfolio 2022"
                img={portfolio2022}
                link={linkProject5}
                github={githubProject5}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Web Development"
                title="Portfolio 2024"
                img={portfolio2024}
                link={linkProject6}
                github={githubProject6}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Event Management System API"
                title="A hands on project to practice Azure Cloud Services"
                summary="The Event Management System is a web application built with ASP.NET Core, Entity Framework Core, and PostgreSQL. It uses ASP.NET Core Identity for user authentication and authorization, and integrates with Azure services for storage and monitoring."
                img={azeventmanagement}
                link={linkProject7}
                github={githubProject7}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="AI Bio Generator"
                title="A hands on project to practice with GroqCloud and FrontEnd libraries"
                summary="Bio Generator is a simple Generative AI Project for enhance my front-end skill. Through this project, I had chance to practice with AI API from GroqCloud and Vercel AI SDK."
                img={bioGenerator}
                link={linkProject8}
                github={githubProject8}
              />
            </div>
          </div>
          <img
            className="w-full h-auto mt-16 bg-gray"
            alt="snake eating my contributions"
            src="https://raw.githubusercontent.com/yunkhngn/yunkhngn/output/github-contribution-grid-snake-dark.svg"
          />
          <VelocityScroll
            text="To be continued..."
            default_velocity={5}
            className="font-display text-center text-4xl font-bold mt-8 tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
          />
          <GoToTopComponent />
        </Layout>
      </main>
    </>
  );
};

export default ProjectPage;
