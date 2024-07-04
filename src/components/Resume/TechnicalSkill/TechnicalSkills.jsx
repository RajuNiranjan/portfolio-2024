import React from "react";
import Boot from "@/assets/skillIcons/Boot";
import Css from "@/assets/skillIcons/CSS";
import DB from "@/assets/skillIcons/Db";
import EX from "@/assets/skillIcons/EX";
import Git from "@/assets/skillIcons/Git";
import HTML from "@/assets/skillIcons/HTML";
import JS from "@/assets/skillIcons/JS";
import Linux from "@/assets/skillIcons/Linux";
import Mui from "@/assets/skillIcons/MaterialUi";
import Nest from "@/assets/skillIcons/Nest";
import Next from "@/assets/skillIcons/Next";
import Node from "@/assets/skillIcons/Node";
import Py from "@/assets/skillIcons/Python";
import Reactjs from "@/assets/skillIcons/React";
import Redux from "@/assets/skillIcons/Redux";
import Sql from "@/assets/skillIcons/SQL";
import Ts from "@/assets/skillIcons/TS";
import Tailwind from "@/assets/skillIcons/Tailwind";

const skillsData = [
  "React.js",
  "Next.js",
  "JavaScript",
  "Typescript",
  "Redux",
  "Node.js",
  "Express.js",
  "Nest.js",
  "MongoDB",
  "SQL",
  "Python",
  "TailwindCSS",
  "Material UI",
  "Shadcn/ui",
  "linux",
];

const TechnicalSkills = () => {
  return (
    <div className="flex flex-col items-start gap-4 p-5">
      <h1 className="text-4xl lg:text-[54px] text-[#fdad16] font-bold my-4">
        Technical Skills
      </h1>
      <div className="flex flex-wrap  gap-4">
        {skillsData.map((item, index) => (
          <h1 key={index} className="bg-black px-4 py-1 rounded-full  w-max">
            {item}
          </h1>
        ))}
      </div>
      <div className="flex flex-wrap  gap-4 my-10">
        <div className="bg-blue-400 w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <Reactjs />
        </div>
        <div className="bg-black w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <Next />
        </div>
        <div className=" w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <JS className="text-[#fdad16]" />
        </div>
        <div className="w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <Ts className="text-blue-400 " />
        </div>
        <div className="w-10 text-3xl text-white bg-violet-500 h-10 flex justify-center items-center rounded-full">
          <Redux />
        </div>
        <div className="bg-blue-400 w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <Tailwind />
        </div>
        <div className="bg-violet-500 w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <Boot />
        </div>
        <div className=" w-10 bg-green-800 text-3xl h-10 flex justify-center items-center rounded-full">
          <Node className="text-green-500" />
        </div>
        <div className="bg-black w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <EX />
        </div>
        <div className="bg-red-500 w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <Nest />
        </div>
        <div className="bg-yellow-400 text-blue-600 w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <Py />
        </div>
        <div className="bg-blue-600 w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <Mui />
        </div>
        <div className="bg-green-600 w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <DB />
        </div>
        <div className="bg-blue-600  w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <Sql />
        </div>
        <div className="bg-orange-600 w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <Git />
        </div>
        <div className="bg-[#fdad16] text-black w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <Linux />
        </div>
        <div className="bg-orange-600 w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <HTML />
        </div>
        <div className="bg-blue-600 w-10 text-3xl h-10 flex justify-center items-center rounded-full">
          <Css />
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;