
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "Python", level: 85, category: "Backend" },
    { name: "React", level: 92, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "HTML/CSS", level: 95, category: "Frontend" },
    { name: "Java", level: 75, category: "Backend" },
    { name: "SQL", level: 85, category: "Database" },
    { name: "Machine Learning", level: 80, category: "AI/ML" },
    { name: "OpenCV", level: 75, category: "AI/ML" },
    { name: "Streamlit", level: 88, category: "Framework" },
    { name: "Git", level: 90, category: "Tools" },
    { name: "GSAP", level: 85, category: "Animation" },
  ];

  useEffect(() => {
    const skillBars = skillsRef.current?.querySelectorAll(".skill-bar");
    if (!skillBars) return;

    skillBars.forEach((bar, index) => {
      const level = skills[index].level;
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: `${level}%`,
          duration: 1.5,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <section id="skills" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-on-scroll">
          Technical <span className="text-blue-500">Skills</span>
        </h2>

        <div ref={skillsRef} className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="animate-on-scroll">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-blue-500 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2 mb-1">
                  <div
                    className="skill-bar bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full relative overflow-hidden"
                    style={{ width: "0%" }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
                <span className="text-xs text-slate-400">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
