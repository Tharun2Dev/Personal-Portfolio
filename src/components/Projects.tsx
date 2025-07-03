
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Student Placement Prediction",
      description: "ML-powered web application for predicting student placement outcomes using Streamlit",
      tech: ["Python", "Streamlit", "Machine Learning", "Data Analysis"],
      date: "Jun 2022 - Jul 2022",
      link: "https://github.com",
    },
    {
      title: "Smart Traffic Management",
      description: "AI-based system to capture traffic signals with camera facility and optimize traffic flow",
      tech: ["Python", "OpenCV", "YOLO v3", "Machine Learning"],
      date: "Feb 2023 - Apr 2023",
      link: "https://github.com",
    },
    {
      title: "Responsive Landing Page",
      description: "Modern, fully responsive landing page for Sidcup Family Golf with animations",
      tech: ["HTML5", "CSS3", "JavaScript", "GSAP", "Responsive Design"],
      date: "Oct 2024 - Nov 2024",
      link: "https://github.com",
    },
  ];

  useEffect(() => {
    const cards = projectsRef.current?.querySelectorAll(".project-card");
    if (!cards) return;

    cards.forEach((card, index) => {
      const handleMouseEnter = () => {
        gsap.to(card, {
          y: -10,
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
    });
  }, []);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-on-scroll">
          Featured <span className="text-blue-500">Projects</span>
        </h2>

        <div ref={projectsRef} className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 animate-on-scroll magnetic"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <span className="text-xs text-blue-500 bg-blue-500/10 px-2 py-1 rounded-full">
                  {project.date.split(" - ")[1]}
                </span>
              </div>

              <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400">{project.date}</span>
                <a
                  href={project.link}
                  className="magnetic text-blue-500 hover:text-blue-400 transition-colors duration-300 text-sm font-semibold"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
