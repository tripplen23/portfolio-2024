import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import SparklesText from "@/components/magicui/sparkles-text";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <SparklesText
        className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16"
        text="Experience"
      />

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Engineer Trainee"
            company="ITD"
            time="January 2023 - August 2023"
            companyLink="http://toancau.vn/en/"
            address="Ho Chi Minh city, Vietnam"
            work="Worked on a team responsible for testing and developing Software products included AI Camera Management System, Vote counting software."
          />
          <Details
            position="Student partner"
            company="Pinja"
            time="September 2023 - December 2023"
            companyLink="https://pinja.com/"
            address="Vaasa, Finland"
            work="Worked on a team of 3 people for building Gant Chart Tool project using Vue3 and Bryntum under the supervised of Pinja development team."
          />
          <Details
            position="Software Developer Trainee"
            company="Integrify"
            time="January 2024 - September 2024"
            companyLink="https://www.integrify.io/"
            address="Helsinki, Finland"
            work="Worked and connected to the community of passionate code learners in all around the Finland, responsible for doing Fullstack development tasks."
          />
          <Details
            position="Software Developer Trainee"
            company="Lakihelppi"
            time="November 2024 - February 2025"
            companyLink="https://lakihelppi.com/"
            address="Helsinki, Finland"
            work="Develop the AI Integrated Para legal for software legal platform.Integrated Generative AI to project for optimizing the data checking by Natural Language."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
