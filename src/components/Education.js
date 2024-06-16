import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/65">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor of International Business"
            time="2018-2019"
            place="Seinäjoki University of Applied Sciences"
            info="Have a chance to study business at SeAMK was a great experience for me. I have learned a lot of things about entrepreneurship, marketing, and management. This time was also the premise of the change in my life when I tried to make the first website for my virtual business along to my study. Fall into the coding world years later."
          />
          <Details
            type="Bachelor of Information Technology"
            time="2020-2024"
            place="Vaasa University of Applied Sciences"
            info="Joining the tech world has been a challenging journey, but I've embraced both the pains and the gains. After four years of hard work, I was honored to graduate with my first degree."
          />
          <Details
            type="Full Stack Open Helsinki"
            time="2023-2024"
            place="Remote - University of Helsinki"
            info="Completed coursework from fundamental to advanced topics in web development. The course offered me the great knowledge and experience in React, NodeJS, MongoDB, GraphQL, React Native, TypeScript and Github CI/CD. I am grateful for the opportunity to learn from the best online course in the field."
          />
          <Details
            type="Full Stack Bootcamp"
            time="Spring 2024"
            place="Integrify Academy"
            info="6 months at Integrify Academy was a turning point in my career. I learned the latest web development technologies and tools in TypeScript and C#, and I was able to apply them to real-world projects. I am grateful for the experience and the people I met during my time there."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
