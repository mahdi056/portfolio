import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs,
  FaGithub, FaGitAlt
} from "react-icons/fa";
import { FaLaptopCode } from 'react-icons/fa';
import { TbBrandJavascript } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import {
  SiTailwindcss, SiFirebase, SiRedux, SiExpress
} from "react-icons/si";

const Skills = () => {
  const icons = [
    <FaHtml5 className="text-orange-600" size={60} />,
    <FaCss3Alt className="text-blue-600" size={60} />,
    <TbBrandJavascript className="text-yellow-500" size={60} />,
    <FaReact className="text-cyan-400" size={60} />,
    <DiMongodb className="text-green-600" size={60} />,
    <FaNodeJs className="text-green-400" size={60} />,
    <SiExpress className="text-gray-700" size={60} />,
    <SiTailwindcss className="text-sky-400" size={60} />,
    <SiFirebase className="text-yellow-400" size={60} />,
    <SiRedux className="text-purple-600" size={60} />,
    <FaGithub className="text-black dark:text-white" size={60} />,
    <FaGitAlt className="text-red-500" size={60} />,
  ];

  return (
    <div>
      <section id="skills" className="py-12">
        <h2 className="text-center font-bold text-4xl mb-8 flex justify-center items-center gap-x-2"><FaLaptopCode></FaLaptopCode>Skills</h2>

        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            {[...icons, ...icons].map((icon, index) => (
              <span key={index} className="inline-block mx-6">{icon}</span>
            ))}
          </div>
        </div>
      </section>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }

          .animate-marquee {
            display: inline-flex;
            animation: marquee 20s linear infinite;
          }

          @media (max-width: 768px) {
            .animate-marquee {
              animation-duration: 30s;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Skills;
