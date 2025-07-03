
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const text = textRef.current;
    
    if (!hero || !text) return;

    // Animate text elements
    gsap.fromTo(
      text.children,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.3, ease: "power3.out", delay: 0.5 }
    );

    // Floating animation for the hero section
    gsap.to(hero, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      <div ref={heroRef} className="container mx-auto px-6 text-center relative z-10">
        <div ref={textRef} className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 fade-in-up">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Tharun</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-slate-600 fade-in-up">
            Full Stack Developer & AI Enthusiast
          </h2>
          
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed fade-in-up">
            Crafting digital experiences with modern technologies and innovative solutions. 
            Passionate about creating scalable applications that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 fade-in-up">
            <button className="magnetic px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
              View My Work
            </button>
            <button className="magnetic px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-full font-semibold hover:bg-slate-50 transition-all duration-300 transform hover:scale-105">
              Download Resume
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
