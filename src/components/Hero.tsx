
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Parallax effect for background
    gsap.to(".hero-bg", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Floating animation for profile elements
    gsap.to(".floating", {
      y: "random(-20, 20)",
      rotation: "random(-5, 5)",
      duration: "random(2, 4)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2,
    });
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="hero-bg absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating absolute w-2 h-2 bg-blue-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 fade-in-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Tharun C
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 fade-in-up">
            Full Stack Developer & ML Engineer
          </p>
          
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto fade-in-up">
            Passionate software developer with expertise in modern web technologies,
            machine learning, and innovative problem-solving approaches.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in-up">
            <button className="magnetic px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
              View My Work
            </button>
            <button className="magnetic px-8 py-4 border border-blue-500 text-blue-500 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
