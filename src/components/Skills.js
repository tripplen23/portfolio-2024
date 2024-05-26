import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, postionX, postionY }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: postionX, y: postionY }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="CSS" postionX="-5vw" postionY="-10vw" />
        <Skill name="HTML" postionX="-25vw" postionY="2vw" />
        <Skill name="PostgreSQL" postionX="-15vw" postionY="8vw" />
        <Skill name="C#" postionX="20vw" postionY="6vw" />
        <Skill name="ASP" postionX="35vw" postionY="8vw" />
        <Skill name=".NET" postionX="0vw" postionY="12vw" />
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
