
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "🛒",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      technologies: ["Vue.js", "Express", "MongoDB", "Socket.io"],
      image: "📋",
    },
    {
      title: "AI Chatbot",
      description: "Intelligent chatbot using natural language processing",
      technologies: ["Python", "TensorFlow", "Flask", "React"],
      image: "🤖",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather monitoring dashboard with data visualization",
      technologies: ["React", "D3.js", "Weather API", "Chart.js"],
      image: "🌤️",
    },
  ];

  useEffect(() => {
    const projectsSection = projectsRef.current;
    if (!projectsSection) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".project-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsSection,
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );
  }, []);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-on-scroll text-slate-800">
          My <span className="text-blue-600">Projects</span>
        </h2>

        <div ref={projectsRef} className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="project-card magnetic group bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    View Project
                  </button>
                  <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors duration-300">
                    Source Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
