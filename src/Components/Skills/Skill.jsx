import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaPhp, FaAsterisk } from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiApollographql,
} from "react-icons/si";

function Skill() {
  const skills = [
    { name: "React.js", icon: <FaReact color="#61DAFB" />, proficiency: "90%" }, // React Blue
    { name: "Next.js", icon: <SiNextdotjs color="#000000" />, proficiency: "85%" }, // Next.js Black
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" />, proficiency: "95%" }, // JS Yellow
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" />, proficiency: "80%" }, // TS Blue
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" />, proficiency: "88%" }, // Tailwind Teal
    // { name: "Material UI", icon: <SiMaterialui color="#007FFF" />, proficiency: "85%" }, 
    { name: "Node.js", icon: <FaNodeJs color="#83CD29" />, proficiency: "87%" }, // Node Green
    { name: "MongoDB", icon: <SiMongodb color="#47A248" />, proficiency: "83%" }, // Mongo Green
    { name: "MySQL", icon: <SiMysql color="#4479A1" />, proficiency: "80%" }, // MySQL Blue
    { name: "PHP", icon: <FaPhp color="#777BB4" />, proficiency: "75%" }, // PHP Purple
    { name: "API Integration", icon: <SiApollographql color="#311C87" />, proficiency: "90%" }, // GraphQL Purple
  ];
  return (
    <>
      <div className="container">
        <div className="skill-wrapper">
          <div className="row">
            <div className="col-lg-4  col-md-8 col-sm-6 mt-2">
              <h5>
                {" "}
                <i>
                  <FaAsterisk />
                </i>{" "}
                professional skill of me
              </h5>
              <h1 className="m-0">
                Let’s Explore <br />
                <span>Skills & Experience</span>
              </h1>
              <p className="mt-3">
                As a MERN Stack Developer, I specialize in building dynamic,
                scalable, and responsive web applications. With a strong
                foundation in JavaScript and expertise in MongoDB, Express.js,
                React, and Node.js, I have successfully completed 50+ projects
                over the past three years. My experience has sharpened my
                problem-solving skills and attention to detail, allowing me to
                deliver high-quality digital solutions.
              </p>

              <div className="d-flex p-3 skills-arrow-img-section">
                <div className="">
                  <img
                    className="d-inline"
                    src="/assets/img/skill-arrow.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="row">
                {skills.map((skill, index) => (
                  <div key={index} className="col-lg-3 col-md-6 col-sm-12 mt-3">
                    <div className="language-section js-scroll slide-left text-center p-3">
                      <div className="d-flex justify-content-center">
                        <span className="skill-icon">{skill.icon}</span>
                      </div>
                      <p className="text-center text-white fw-bold mt-2">
                        {skill.name}
                      </p>
                      <button>{skill.proficiency}</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
