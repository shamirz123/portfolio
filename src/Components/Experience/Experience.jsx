import React from "react";



const experiences = [
  {
    id: 1,
    title: "Web Developer",
    company: "MSK Software Hose",
    date: "January 2023 - August 2023",
    description: [
      "Developed and maintained websites and web applications, ensuring optimal performance and user experience.",
      "Designed and implemented intuitive user interfaces that prioritized usability and accessibility.",
      "Collaborated with cross-functional teams, including designers and project managers, to deliver high-quality solutions.",
      "Ensured responsive design and cross-browser compatibility across various platforms and devices.",
      "Participated in code reviews, offering valuable feedback and suggestions to improve code quality.",
    ],
    icon: "/assets/img/logomsk.png",
  },
  {
    id: 2,
    title: "React.js Developer",
    company: "Azba Solution",
    date: "May 2023 - December 2023",
    description: [
      "Developed and maintained React.js applications with a focus on performance and usability.",
      "Worked on frontend design, collaborating with backend teams to integrate APIs seamlessly into React projects.",
      "Collaborated with designers and backend developers to build scalable, high-quality web applications.",
      "Performed code reviews, ensuring best practices in coding, optimization, and framework usage.",
      "Optimized front-end performance and ensured cross-browser compatibility.",
    ],
    icon: "/assets/img/company-logo.svg",
  },
  {
    id: 3,
    title: "React.js/Next.js Developer",
    company: "Lala Group of Companies",
    date: "August 1, 2023 - Present",
    description: [
      "Developed and maintained React.js and Next.js applications with a focus on high-performance scalability.",
      "Integrated API-based features to integrate third-party data into business applications.",
      "Debugged and optimized React components for smooth and enhanced rendering performance.",
      "Optimized web frontend, ensuring compatibility across all devices and modern browsers.",
      "Collaborated with designers and stakeholders to deliver dynamic and interactive web applications.",
    ],
    icon: "/assets/img/lala-group.png",
  },
  {
    id: 4,
    title: "Full Stack (React with Firebase) Developer",
    company: "Reactive Technologies",
    date: "November 15, 2023 - Present",
    description: [
      "Developing and maintaining full-stack web applications using React.js, Next.js, TypeScript, Firebase, and Tailwind CSS.",
      "Implemented cloud-based features in Firebase, including authentication, storage, and real-time database updates.",
      "Building and deploying interactive components, enabling real-time app updates.",
      "Refactoring and optimizing code to ensure responsiveness across various devices.",
    ],
    icon: "⚡",
  },
];

const Timeline = () => {
  return (
    <div className="timeline-container experince-wrapper">
      <div className="timeline-line"></div>
      {experiences.map((exp, index) => (
        <div
          key={exp.id}
          className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
        >
          {/* Company Date on Opposite Side */}
          <div
            className={`timeline-date ${
              index % 2 === 0 ? "date-left" : "date-right"
            }`}
          >
            <p>{exp.date}</p>
          </div>

          <div className="timeline-marker">
            <span className="timeline-icon">
              <img src={exp.icon} alt="" />
            </span>
          </div>

          <div className="timeline-content">
            <h3 className="timeline-title">{exp.title}</h3>
            <h4 className="timeline-company">{exp.company}</h4>
            <ul className="timeline-description">
              {exp.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
