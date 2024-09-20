import React from "react";
import { motion } from "framer-motion";
import SparklesText from "@/components/magicui/sparkles-text";

const Skill = ({ name, postionX, postionY }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-light xs:dark:text-dark xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: postionX, y: postionY, transition: { duration: 2 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <SparklesText
        className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32"
        text="Skills"
      />
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="CSS" postionX="-5vw" postionY="-10vw" />
        <Skill name="HTML" postionX="-25vw" postionY="2vw" />
        <Skill name="PostgreSQL" postionX="-22vw" postionY="-23vw" />
        <Skill name="C#" postionX="20vw" postionY="6vw" />
        <Skill name="ASP" postionX="35vw" postionY="8vw" />
        <Skill name=".NET" postionX="0vw" postionY="12vw" />
        <Skill name="Azure Cloud" postionX="3vw" postionY="12vw" />
        <Skill name="Docker" postionX="5vw" postionY="25vw" />
        <Skill name="Github Action" postionX="-15vw" postionY="28vw" />
        <Skill name="Python" postionX="-20vw" postionY="-15vw" />
        <Skill name="Java Android" postionX="15vw" postionY="-12vw" />
        <Skill name="React" postionX="32vw" postionY="-5vw" />
        <Skill name="NextJS" postionX="0vw" postionY="-20vw" />
        <Skill name="React Native" postionX="-25vw" postionY="18vw" />
        <Skill name="TypeScript" postionX="18vw" postionY="18vw" />
        <Skill name="AI Testing" postionX="-30vw" postionY="-6vw" />
      </div>
    </>
  );
};

export default Skills;
