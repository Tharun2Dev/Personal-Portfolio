
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "React", level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-700" },
    { name: "Node.js", level: 80, color: "from-green-500 to-emerald-500" },
    { name: "Python", level: 75, color: "from-yellow-500 to-orange-500" },
    { name: "PostgreSQL", level: 70, color: "from-indigo-500 to-purple-500" },
    { name: "AWS", level: 65, color: "from-orange-500 to-red-500" },
  ];

  useEffect(() => {
    const skillsSection = skillsRef.current;
    if (!skillsSection) return;

    gsap.registerPlugin(ScrollTrigger);

    // Animate skill bars
    skills.forEach((_, index) => {
      gsap.fromTo(
        `.skill-bar-${index}`,
        { width: "0%" },
        {
          width: `${skills[index].level}%`,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillsSection,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );
    });
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-on-scroll text-slate-800">
          My <span className="text-blue-600">Skills</span>
        </h2>

        <div ref={skillsRef} className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="animate-on-scroll">
                <div className="magnetic p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-slate-800">{skill.name}</h3>
                    <span className="text-sm text-slate-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className={`skill-bar-${index} h-3 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-300`}
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="magnetic text-center p-6 bg-white rounded-xl shadow-sm border border-slate-200 animate-on-scroll">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">UI/UX Design</h3>
              <p className="text-slate-600">Creating intuitive and beautiful user interfaces</p>
            </div>
            
            <div className="magnetic text-center p-6 bg-white rounded-xl shadow-sm border border-slate-200 animate-on-scroll">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Performance</h3>
              <p className="text-slate-600">Optimizing applications for speed and efficiency</p>
            </div>
            
            <div className="magnetic text-center p-6 bg-white rounded-xl shadow-sm border border-slate-200 animate-on-scroll">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Responsive</h3>
              <p className="text-slate-600">Building apps that work on all devices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
