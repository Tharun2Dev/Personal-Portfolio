
const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-on-scroll">
            About <span className="text-blue-500">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full p-1">
                  <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                    <div className="text-8xl font-bold text-blue-500">TC</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Motivated and detail-oriented graduate with a strong interest in software development. 
                Eager to learn and grow within the field, with a passion for problem-solving and a 
                commitment to delivering quality results.
              </p>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Highly adaptable and driven by a desire to contribute to innovative projects. 
                Seeking an opportunity to leverage my skills and develop my career in the software industry.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800/50 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="text-blue-500 font-semibold mb-2">Education</h3>
                  <p className="text-sm text-slate-300">BE in ECE</p>
                  <p className="text-xs text-slate-400">Sapthagiri College</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="text-blue-500 font-semibold mb-2">Location</h3>
                  <p className="text-sm text-slate-300">Bangalore</p>
                  <p className="text-xs text-slate-400">India</p>
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
