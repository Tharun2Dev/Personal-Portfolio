
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Experience = () => {
  const experienceRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and AWS.",
      achievements: [
        "Improved application performance by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipelines"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      description: "Developed responsive web applications and collaborated with design teams.",
      achievements: [
        "Built 15+ client websites",
        "Reduced loading times by 60%",
        "Mentored junior developers"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "StartupXYZ",
      period: "2019 - 2020",
      description: "Contributed to various projects and learned modern development practices.",
      achievements: [
        "Developed REST APIs",
        "Fixed 50+ bugs",
        "Wrote comprehensive tests"
      ]
    }
  ];

  useEffect(() => {
    const experienceSection = experienceRef.current;
    if (!experienceSection) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".experience-card",
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: experienceSection,
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );
  }, []);

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-on-scroll text-slate-800">
          My <span className="text-blue-600">Experience</span>
        </h2>

        <div ref={experienceRef} className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            {experiences.map((exp, index) => (
              <div key={exp.title} className="experience-card relative flex items-start mb-12">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="ml-20 magnetic bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-800">{exp.title}</h3>
                    <span className="text-blue-600 font-medium">{exp.period}</span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-slate-700 mb-3">{exp.company}</h4>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="space-y-2">
                    <h5 className="font-semibold text-slate-800">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-slate-600 flex items-center">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
