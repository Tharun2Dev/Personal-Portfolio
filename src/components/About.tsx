
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const about = aboutRef.current;
    if (!about) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      about.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: about,
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div ref={aboutRef} className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-on-scroll text-slate-800">
            About <span className="text-blue-600">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-on-scroll">
              <h3 className="text-2xl font-bold text-slate-800">Full Stack Developer</h3>
              <p className="text-slate-600 leading-relaxed">
                I'm a passionate developer with expertise in modern web technologies. 
                I love creating efficient, scalable solutions that solve real-world problems.
              </p>
              
              <p className="text-slate-600 leading-relaxed">
                With experience in both frontend and backend development, I enjoy working 
                with React, Node.js, Python, and various databases. I'm always eager to 
                learn new technologies and take on challenging projects.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="magnetic p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-slate-800 mb-2">Frontend</h4>
                  <p className="text-sm text-slate-600">React, Vue, Angular, TypeScript</p>
                </div>
                <div className="magnetic p-4 bg-purple-50 rounded-lg border border-purple-100">
                  <h4 className="font-semibold text-slate-800 mb-2">Backend</h4>
                  <p className="text-sm text-slate-600">Node.js, Python, PostgreSQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
