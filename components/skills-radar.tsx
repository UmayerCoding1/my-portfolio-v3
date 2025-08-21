"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaHtml5,FaReact,FaNodeJs,FaGitAlt ,FaGithub   } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs,SiTypescript,SiExpress,SiMongoose,SiPostman ,SiRedux  } from "react-icons/si";
import { RiTailwindCssFill,RiFirebaseFill  } from "react-icons/ri";
import { DiResponsive,DiMongodb  } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { FaUserShield,FaCcStripe  } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { LuFigma } from "react-icons/lu";
import { MdOutlinePayment } from "react-icons/md";

export type SkillCategoryKey = "all" | "frontend" | "backend" | "tools";
export default function SkillsRadar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] =
    useState<SkillCategoryKey>("all");

const skillCategories = {
  frontend: {
    skills: [
    { name: "HTML5", Icon: FaHtml5, level: 90 },
    { name: "CSS3", Icon: IoLogoCss3, level: 85 },
    { name: "JavaScript", Icon: IoLogoJavascript, level: 80 },
    { name: "React", Icon: FaReact, level: 85 },
    { name: "Next.js", Icon: SiNextdotjs, level: 75 },
    { name: "Redux Toolkit", Icon: SiRedux, level: 50 },
    { name: "TypeScript", Icon: SiTypescript, level: 70 },
    { name: "Tailwind CSS", Icon: RiTailwindCssFill, level: 85 },
    { name: "Responsive Design", Icon: DiResponsive, level: 80 },
  ]
  },
  backend: {
    skills: [
    { name: "Node.js", Icon: FaNodeJs, level: 80 },
    { name: "Express.js", Icon: SiExpress, level: 75 },
    { name: "TypeScript", Icon: SiTypescript, level: 70 },
    { name: "MongoDB", Icon: DiMongodb, level: 70 },
    { name: "Mongoose", Icon: SiMongoose, level: 65 },
    { name: "Firebase", Icon: RiFirebaseFill, level: 60 },
    { name: "REST APIs", Icon: TbApi, level: 85 },
    { name: "Authentication", Icon: FaUserShield, level: 70 },
  ],
  },

  tools: {
    skills: [
    { name: "Git", Icon: FaGitAlt, level: 85 },
    { name: "GitHub", Icon: FaGithub, level: 85 },
    { name: "VS Code", Icon: VscVscode, level: 90 },
    { name: "Postman", Icon: SiPostman, level: 75 },
    { name: "Figma", Icon: LuFigma, level: 70 },
    { name: "Stripe", Icon: FaCcStripe, level: 65 },
    { name: "SSLcommerce", Icon: MdOutlinePayment, level: 60 },
  ]
  },
  all: {
    skills: [
      { name: "HTML5", Icon: FaHtml5, level: 90 },
    { name: "CSS3", Icon: IoLogoCss3, level: 85 },
    { name: "JavaScript", Icon: IoLogoJavascript, level: 80 },
    { name: "React", Icon: FaReact, level: 85 },
    { name: "Next.js", Icon: SiNextdotjs, level: 75 },
    { name: "Redux Toolkit", Icon: SiRedux, level: 50 },
    { name: "TypeScript", Icon: SiTypescript, level: 70 },
    { name: "Tailwind CSS", Icon: RiTailwindCssFill, level: 85 },
    { name: "Node.js", Icon: FaNodeJs, level: 80 },
    { name: "Express.js", Icon: SiExpress, level: 75 },
    { name: "MongoDB", Icon: DiMongodb, level: 70 },
    { name: "Mongoose", Icon: SiMongoose, level: 65 },
    { name: "Firebase", Icon: RiFirebaseFill, level: 60 },
    { name: "REST APIs", Icon: TbApi, level: 85 },
    { name: "Authentication", Icon: FaUserShield, level: 70 },
    { name: "Responsive Design", Icon: DiResponsive, level: 80 },
    { name: "Git", Icon: FaGitAlt, level: 85 },
    { name: "GitHub", Icon: FaGithub, level: 85 },
    { name: "VS Code", Icon: VscVscode, level: 90 },
    { name: "Postman", Icon: SiPostman, level: 75 },
    { name: "Figma", Icon: LuFigma, level: 70 },
    { name: "Stripe", Icon: FaCcStripe, level: 65 },
    { name: "SSLcommerce", Icon: MdOutlinePayment, level: 60 },
    ]
  }
};


  const RadarChart = ({ skills, color }: { skills: any[]; color?: string }) => {
    const centerX = 150;
    const centerY = 150;
    const maxRadius = 120;

    const angleStep = (2 * Math.PI) / skills.length;

    const getPoint = (index: number, level: number) => {
      const angle = index * angleStep - Math.PI / 2;
      const radius = (level / 100) * maxRadius;
      return {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      };
    };

    const pathData =
      skills
        .map((skill, index) => {
          const point = getPoint(index, skill.level);
          return `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`;
        })
        .join(" ") + " Z";

    return (
      <div className="relative">
        <svg width="300" height="300" className="transform-gpu">
          {/* Grid circles */}
          {[20, 40, 60, 80, 100].map((level) => (
            <circle
              key={level}
              cx={centerX}
              cy={centerY}
              r={(level / 100) * maxRadius}
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
          ))}

          {/* Grid lines */}
          {skills.map((_, index) => {
            const angle = index * angleStep - Math.PI / 2;
            const endX = centerX + maxRadius * Math.cos(angle);
            const endY = centerY + maxRadius * Math.sin(angle);
            return (
              <line
                key={index}
                x1={centerX}
                y1={centerY}
                x2={endX}
                y2={endY}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
            );
          })}

          {/* Skill area */}
          <motion.path
            d={pathData}
            fill={`url(#gradient-${selectedCategory})`}
            fillOpacity="0.3"
            stroke={`url(#gradient-${selectedCategory})`}
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
          />

          {/* Skill points */}
          {skills.map((skill, index) => {
            const point = getPoint(index, skill.level);
            return (
              <motion.circle
                key={skill.name}
                cx={point.x}
                cy={point.y}
                r="4"
                fill={`url(#gradient-${selectedCategory})`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.5 }}
              />
            );
          })}

          {/* Gradient definitions */}
          <defs>
            <linearGradient
              id={`gradient-${selectedCategory}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Skill labels */}
        {skills.map((skill, index) => {
          const angle = index * angleStep - Math.PI / 2;
          const labelRadius = maxRadius + 30;
          const labelX = centerX + labelRadius * Math.cos(angle);
          const labelY = centerY + labelRadius * Math.sin(angle);

          return (
            <motion.div
              key={skill.name}
              className="absolute text-xs text-white font-medium pointer-events-none"
              style={{
                left: labelX - 25,
                top: labelY - 10,
                width: 50,
                textAlign: "center",
              }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
            >
              {skill.name}
            </motion.div>
          );
        })}
      </div>
    );
  };

  const categoryKeys: SkillCategoryKey[] = [
    "all",
    "frontend",
    "backend",
    "tools",
  ];
  return (
    <section id="skills" className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full h-40 bg-black/50 flex flex-col items-center justify-center gap-3 my-5 border-t border-b border-white/20">
            <h2 className="text-4xl font-bold">My Skills</h2>
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#E34AA6] block h-1 w-32 mt-2"></span>
            <p className="text-sm text-white/80">
              A comprehensive overview of my technical skills and expertise in
              web development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 ">
            {/* Radar Chart */}
            <motion.div
              className="flex justify-center h-[340px] p-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 p-8">
              
                <RadarChart
                  skills={skillCategories[selectedCategory].skills}
                />
              </Card>
            </motion.div>

            {/* Category Selection & Details */}
            <div className="space-y-6 backdrop-blur-md bg-white/5 dark:bg-black/20 rounded-2xl p-8 border border-white/10 shadow-xl h-full glass-shine">
              {/* Category Buttons */}
              <h2 className="text-center text-2xl font-semibold">
                Technologies & Tools
              </h2>
              <div className="flex items-center justify-between px-2 gap-3 bg-black p-1">
                {categoryKeys.map((category, index) => {
                  console.log(selectedCategory, category.toLowerCase());
                  return (
                    <div
                      onClick={() => setSelectedCategory(category)}
                      key={index}
                      className={`${
                        selectedCategory === category.toLowerCase() &&
                        "bg-[#8B5CF6]/40 rounded-md"
                      } px-4 py-1  cursor-pointer`}
                    >
                      {category}
                    </div>
                  );
                })}
              </div>

              {/* Selected Category Details */}
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className=""
              >
                {skillCategories[selectedCategory].skills.length > 0 && (
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                   {skillCategories[selectedCategory].skills.map(
                     (skill, index) => {
                      const SkillIcon = skill.Icon;
                      return (
                        [
                           <div
                         key={index}
                         className="skill-item w-full h-32  backdrop-blur-sm bg-white/5 dark:bg-black/20 rounded-lg p-4 flex flex-col items-center text-center  justify-center hover:bg-white/10 transition-all duration-300 border border-white/10  opacity-100 hover:opacity-80"
                       >
                         <SkillIcon className={`w-8 h-8 mb-2 
                          ${skill.name === 'HTML5' && 'fill-[#DD4B25]'}
                          ${skill.name === 'CSS3' && 'fill-[#004AE1]'}
                          ${skill.name === 'JavaScript' && 'fill-[#E8D44D]'}
                          ${skill.name === 'React' && 'fill-[#55BED5]'}
                          ${skill.name === 'Next.js' && ''}
                          ${skill.name === 'Tailwind CSS' && 'fill-[#38B2AC]'}
                          ${skill.name === 'Node.js' && 'fill-[#339933]'}
                          ${skill.name === 'MongoDB' && 'fill-[#47A248]'}
                          ${skill.name === 'Mongoose' && 'fill-[#8C0808]'}
                          ${skill.name === 'TypeScript' && 'fill-[#377CC8]'}
                          ${skill.name === 'Firebase' && 'fill-[#F68614]'}
                          ${skill.name === 'Git' && 'fill-[#F05539]'}
                          ${skill.name === 'VS Code' && 'fill-[#2DB2F5]'}
                          ${skill.name === 'Postman' && 'fill-[#EE7245]'}
                          ${skill.name === 'Stripe' && 'fill-[#2DB2F5]'}
                          ${skill.name === 'Redux Toolkit' && 'fill-[#7248B6]'}
                         
                          
                          `} />
                         <span className="text-sm">{skill.name}</span>
                       </div>
                        ]
                      )
                     }
                   )}
                 </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
