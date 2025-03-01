import React, { useEffect } from "react";

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

function Project() {
  useEffect(() => {
    const scrollElements = document.querySelectorAll(".js-scroll");

    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const elementOutofView = (el) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop >
        (window.innerHeight || document.documentElement.clientHeight)
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add("scrolled");
    };

    const hideScrollElement = (element) => {
      element.classList.remove("scrolled");
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        } else if (elementOutofView(el)) {
          hideScrollElement(el);
        }
      });
    };

    window.addEventListener("scroll", handleScrollAnimation);
    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="experince-wrapper">
          <div className="timeline-container experince-wrapper">
            <div className="timeline-line"></div>
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`timeline-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
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

                <div className="timeline-content js-scroll slide-left">
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
          {/* <div className="project-info-box">
            <h6>Latest Work</h6>
            <h1>
              Explore My Popular <span>Projects</span>
            </h1>
          </div>

          <div className="vertical-line"></div>

          <section className="scroll-container">
            <div className="scroll-element js-scroll fade-in-bottom">
              <img src="/assets/img/mobile.png" alt="" />
            </div>
            <div className="scroll-caption">
              <div className="project-details js-scroll fade-in">
                <h5>Product Design</h5>
                <h1>Mobile Application Development</h1>
                <p>
                  Transforming ideas into user-friendly mobile interfaces for a
                  connected world.
                </p>
              </div>
            </div>
            <div className="timeline-dot"></div>
          </section>

          <section className="scroll-container">
            <div className="scroll-element js-scroll slide-right">
              <img src="/assets/img/web.png" alt="" />
            </div>
            <div className="scroll-caption">
              <div className="project-details js-scroll fade-in">
                <h5>Product Design</h5>
                <h1>Web Application Development</h1>
                <p>
                  Crafting innovative web applications that elevate digital
                  experiences and streamline functionality.
                </p>
              </div>
            </div>
            <div className="timeline-dot"></div>
          </section>

          <section className="scroll-container">
            <div className="scroll-element js-scroll slide-left">
              <img src="/assets/img/ecommerce.png" alt="" />
            </div>
            <div className="scroll-caption">
              <div className="project-details js-scroll fade-in">
                <h5>Product Design</h5>
                <h1>E-commerce Application</h1>
                <p>
                  Crafting innovative online shopping experiences for seamless
                  transactions and user satisfaction.
                </p>
              </div>
            </div>
            <div className="timeline-dot"></div>
          </section>  */}
        </div>
      </div>
    </>
  );
}

export default Project;
