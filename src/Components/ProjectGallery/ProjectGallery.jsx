import React, { useState } from "react";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Wilmart",
    description:
      "E-commerce website for selling pharmacy products, providing an easy and convenient way for users to browse and purchase pharmaceutical items online.",
    imgSrc: "/assets/img/willmart.png",
    link: "https://www.wilmart.pk/",
    tags: ["#react", "#javascript", "#php", "#bootstrap"],
  },
  {
    id: 2,
    title: "Hajj Haramain",
    description:
      "Online booking platform that allows users to book their Hajj pilgrimage, view available packages, and get details on travel arrangements, accommodations, and other services related to Hajj.",
    imgSrc: "/assets/img/hajjharamain.png",
    link: "https://hajjharamain.com/",

    tags: ["#typescript", "#nextjs", "#php", "#bootstrap"],
  },
  {
    id: 3,
    title: "Caprieasy.net",
    description:
      "A website for booking boat and hotel accommodations in Italy, providing a seamless experience for travelers, including tailored stays and unique waterfront options, to enjoy an unforgettable vacation.",
    imgSrc: "/assets/img/caprieasy.png",
    link: "https://react.caprieasy.net/",

    tags: ["#javascript", "#reactjs", "#laravel", "#bootstrap"],
  },
  {
    id: 4,
    title: "Tripplanner AE",
    description:
      "A global online booking platform that allows users to book tours, visas, transport, and other travel services worldwide, offering an easy and convenient way to plan and book trips.",
    imgSrc: "/assets/img/tripplannerae.png",
    link: "https://tripplanner.ae/",

    tags: ["#react", "#javascript", "#php", "#bootstrap"],
  },
];

const ProjectGallery = () => {
  return (
    <div className="project-gallery">
      {projects.map((project) => (
        <HoverCard key={project.id} project={project} />
      ))}
    </div>
  );
};

const HoverCard = ({ project }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    setRotateX(y * -100); // Faster rotation on Y-axis
    setRotateY(x * 100); // Faster rotation on X-axis
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <>
      <section className="portfolio-section js-scroll fade-in" id="portfolio">
        <div className="container">
          <div
            className="project-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            }}
          >
            <div className="project-image-container">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="project-image"
              />
              <div className="card-img-hover">
                <Link to={project?.link}>
                  <div className="icon-wrapper">
                    <FaLink />

                    {/* <img
              src="/assets/link-lXUlutFC.png"
              alt="github"
              className="icon"
            /> */}
                  </div>
                </Link>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectGallery;
