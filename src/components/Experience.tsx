
const Experience = () => {
  const experiences = [
    {
      company: "KodNest Technologies Pvt. Ltd",
      role: "Trainee",
      duration: "Feb 2025 - Present",
      location: "Bengaluru",
      description: [
        "Developed and debugged Java-based applications with hands-on experience in OOP concepts",
        "Collaborated with cross-functional teams to build end-to-end solutions",
        "Gained practical exposure to version control tools and collaborative development"
      ],
    },
    {
      company: "Apmenz Automation Private Limited Company",
      role: "Intern",
      duration: "Aug 2023 - Sep 2023",
      location: "Bengaluru",
      description: [
        "Created an interactive Streamlit web app boosting user engagement",
        "Developed machine learning models that enhanced decision-making through data analysis",
        "Reduced application load times by 35% through rigorous testing and optimization"
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-on-scroll">
          Work <span className="text-blue-500">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 animate-on-scroll">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900"></div>

                <div className="ml-20 bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 magnetic">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className="text-blue-500 font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-300 text-sm">{exp.duration}</p>
                      <p className="text-slate-400 text-xs">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-slate-300 text-sm flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
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
