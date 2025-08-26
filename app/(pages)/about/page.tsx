"use client";
import SectionHeading from "@/components/SectionHeading";
import { myExperience } from "@/data";
import React from "react";
import { FaJava, FaPython, FaAws, FaGitAlt, FaFigma, FaReact, FaDatabase, FaUserGraduate } from 'react-icons/fa';
import { SiC, SiCplusplus, SiJavascript, SiTypescript, SiFirebase, SiDjango, SiFlask, SiOracle, SiExpo, SiReact, SiNextdotjs, SiPostgresql, SiMysql, SiSqlite, SiMongodb, SiUnity } from 'react-icons/si';
import Marquee from "react-fast-marquee";

const programmingLanguages = [
  { label: "Java", icon: <FaJava /> },
  { label: "Python", icon: <FaPython /> },
  { label: "C", icon: <SiC /> },
  { label: "C++", icon: <SiCplusplus /> },
  { label: "C#", icon: <FaDatabase /> },
  { label: "JavaScript", icon: <SiJavascript /> },
  { label: "Typescript", icon: <SiTypescript /> },
  { label: "SQL", icon: <FaDatabase /> },
];
const toolsTechnologies = [
  { label: "Azure Cloud", icon: <FaAws /> },
  { label: "Azure DevOps", icon: <FaDatabase /> },
  { label: "AWS", icon: <FaAws /> },
  { label: "Firebase", icon: <SiFirebase /> },
  { label: "Git", icon: <FaGitAlt /> },
  { label: "Unity", icon: <SiUnity /> },
  { label: "MATLAB", icon: <FaDatabase /> },
  { label: "Figma", icon: <FaFigma /> },
  { label: "Power BI", icon: <FaDatabase /> },
];
const frameworksLibraries = [
  { label: "Django", icon: <SiDjango /> },
  { label: "Flask", icon: <SiFlask /> },
  { label: "Oracle ADF", icon: <SiOracle /> },
  { label: "Expo", icon: <SiExpo /> },
  { label: "React Native", icon: <SiReact /> },
  { label: "React JS", icon: <FaReact /> },
  { label: "Next.js", icon: <SiNextdotjs /> },
];
const databases = [
  { label: "PostgreSQL", icon: <SiPostgresql /> },
  { label: "MySQL", icon: <SiMysql /> },
  { label: "Oracle SQL", icon: <SiOracle /> },
  { label: "SQLite", icon: <SiSqlite /> },
  { label: "NoSQL", icon: <SiMongodb /> },
];

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col gap-0 h-min overflow-hidden p-0 relative w-full flex-nowrap items-center justify-start">
      <div className="gap-[60px] flex-col max-w-full w-full lg:max-w-[750px] px-5 lg:px-0 lg:w-[80%] flex-nowrap flex items-center flex-none h-min justify-center  relative overflow-visible p-[80px_0px]  ">
        <SectionHeading
          icon={<FaReact size={28} className="text-sky-400" />}
          title="Skills"
          description="My professional skills."
        />
        <div className="w-full py-4 flex flex-col gap-4">
          <Marquee gradient={false} speed={40} pauseOnHover>
            {programmingLanguages.map(skill => (
              <div key={skill.label} className="flex items-center gap-2 bg-dark-gray-3 border border-dark-gray-4 rounded-full px-5 py-2 mx-2 shadow-md hover:scale-105 transition-transform text-white text-base font-semibold">
                <span className="text-xl">{skill.icon}</span>
                <span className="whitespace-nowrap">{skill.label}</span>
              </div>
            ))}
          </Marquee>
          <Marquee gradient={false} speed={30} pauseOnHover direction="right">
            {toolsTechnologies.map(skill => (
              <div key={skill.label} className="flex items-center gap-2 bg-dark-gray-3 border border-dark-gray-4 rounded-full px-5 py-2 mx-2 shadow-md hover:scale-105 transition-transform text-white text-base font-semibold">
                <span className="text-xl">{skill.icon}</span>
                <span className="whitespace-nowrap">{skill.label}</span>
              </div>
            ))}
          </Marquee>
          <Marquee gradient={false} speed={35} pauseOnHover>
            {frameworksLibraries.map(skill => (
              <div key={skill.label} className="flex items-center gap-2 bg-dark-gray-3 border border-dark-gray-4 rounded-full px-5 py-2 mx-2 shadow-md hover:scale-105 transition-transform text-white text-base font-semibold">
                <span className="text-xl">{skill.icon}</span>
                <span className="whitespace-nowrap">{skill.label}</span>
              </div>
            ))}
          </Marquee>
          <Marquee gradient={false} speed={32} pauseOnHover direction="right">
            {databases.map(skill => (
              <div key={skill.label} className="flex items-center gap-2 bg-dark-gray-3 border border-dark-gray-4 rounded-full px-5 py-2 mx-2 shadow-md hover:scale-105 transition-transform text-white text-base font-semibold">
                <span className="text-xl">{skill.icon}</span>
                <span className="whitespace-nowrap">{skill.label}</span>
              </div>
            ))}
          </Marquee>
        </div>
        <SectionHeading
          icon={<FaUserGraduate size={28} className="text-amber-400" />}
          title="Career"
          description="Professional experience and roles."
        />
        <div className="w-full flex flex-col gap-8">
          <div className="bg-very-dark-gray border border-dark-gray-3 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">Oracle India Pvt. Ltd., Applications Development Engineer | Gandhinagar, Gujarat <span className='text-light-gray-2 font-normal'>September 2020-July 2023</span></h3>
            <ul className="list-disc pl-6 text-light-gray-2 text-base space-y-2">
              <li>Developed, tested and deployed 150+ critical Java code fixes for Oracle ERP Cloud SaaS using Oracle ADF, enhancing Core HR application flows and decreasing critical bugs and regressions by 20%.</li>
              <li>Designed customizations to address client-specific functional requirements for 50+ HCM implementers, while adhering to strict performance and security guidelines for large-scale enterprise deployments.</li>
              <li>Devised diagnostic tools and scripts to auto-detect and rectify data corruptions and optimized SQL queries to alleviate performance bottlenecks, mitigating downstream payroll errors and reducing latency by 35%.</li>
              <li>Streamlined the CI/CD pipeline by incorporating performance and regression test suites, managing build scripts on Jenkins, ensuring error-free deployments and reducing the release cycle duration from 8 to 6 days.</li>
              <li>As the most experienced engineer on the team, acted as first point of contact on a high-volume support forum, resolving 400+ tickets, triaging and delegating hundreds more for rapid issue resolution and client satisfaction.</li>
              <li>Further led an organization-wide bug reduction initiative helping close 70% of long-pending issues. Conducted training sessions for support teams on common issue resolution, REST APIs and HCM bulk data loader operations.</li>
              <li>Mentored 8 new team members in a rapidly expanding team, many of whom went on to bolster org-wide initiatives.</li>
            </ul>
          </div>
          <div className="bg-very-dark-gray border border-dark-gray-3 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">Deutsche Bank Group, Software Engineering Intern | Pune, Maharashtra <span className='text-light-gray-2 font-normal'>May 2019-July 2019</span></h3>
            <ul className="list-disc pl-6 text-light-gray-2 text-base space-y-2">
              <li>Automated and optimized back-end processes for development environment health checks, setup, data clean-up and sanity testing, reducing manual effort by 30% and setup errors by 90%, enhancing developer productivity.</li>
              <li>Independently developed a Flask-based web tool with a focus on clean UI design, benefiting a team of 40+ engineers.</li>
            </ul>
          </div>
        </div>
        <SectionHeading
          icon={<FaUserGraduate size={28} className="text-emerald-400" />}
          title="Education"
          description="Academic background and achievements."
        />
        <ul className="w-full flex flex-col gap-6">
          {myExperience
            .filter(
              (exp) =>
                exp.label === "Undergraduate" || exp.label === "Graduate School"
            )
            .map((exp) => (
              <li
                key={exp.id}
                className="bg-very-dark-gray border border-dark-gray-3 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-white">
                  {exp.title} @ {exp.company}
                </h3>
                <p className="text-light-gray-2 text-base mt-1">{exp.year}</p>
                <p className="text-light-gray-2 text-base mt-2">
                  {exp.description}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
