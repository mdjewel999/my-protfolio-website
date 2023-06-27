import "./MySkills.css";

const skillsData = [
  { name: "HTML 5", progress: 80, category: "frontend" },
  { name: "CSS 3", progress: 75, category: "frontend" },
  { name: "JavaScript (ES6)", progress: 70, category: "frontend" },
  { name: "React.js", progress: 85, category: "frontend" },
  { name: "Firebase", progress: 75, category: "frontend" },
  { name: "Tailwind CSS", progress: 80, category: "frontend" },
  { name: "Bootstrap 5", progress: 75, category: "frontend" },
  { name: "Node.js", progress: 60, category: "backend" },
  { name: "Express.js", progress: 75, category: "backend" },
  { name: "MongoDB", progress: 70, category: "backend" },
  { name: "Mongoose", progress: 60, category: "backend" },
];

const MySkills = () => {
  const getGradientStyle = (progress) => {
    const gradientColorStops = ["#090911", "#ED477C", "#8247C9"];
    const progressPercentage = (progress / 100) * 100;
    const gradientStyle = `linear-gradient(to right, ${gradientColorStops.join(
      ", "
    )} ${progressPercentage}%, transparent ${progressPercentage}%)`;

    return {
      background: gradientStyle,
    };
  };

  const frontendSkills = skillsData.filter(
    (skill) => skill.category === "frontend"
  );
  const backendSkills = skillsData.filter(
    (skill) => skill.category === "backend"
  );

  return (
    <div className="mb-8 p-4">
      <div>
        <h1 className="text-center mt-16 text-7xl font-bold gradient-text">
          MY SKILLS
        </h1>
      </div>
      <div className="skills grid grid-cols-2 gap-4">
        <div className="frontend-skills">
          <button className=" gradient-text p-2 rounded-md text-4xl font-semibold mt-8 mb-4">
            Frontend
          </button>
          {frontendSkills.map((skill, index) => (
            <div key={index} className="skill">
              <div className="skill-name mt-4 text-2xl">{skill.name}</div>
              <div
                className="progress-bar mb-2 mt-3 rounded"
                style={getGradientStyle(skill.progress)}
              >
                <div className="progress-text ml-2">{skill.progress}%</div>
              </div>
            </div>
          ))}
        </div>
        <div className="backend-skills">
          <button className="gradient-text p-2 rounded-md text-4xl  font-semibold mt-8 mb-4">
            Backend
          </button>
          {backendSkills.map((skill, index) => (
            <div key={index} className="skill">
              <div className="skill-name mt-4 text-2xl">{skill.name}</div>
              <div
                className="progress-bar mb-2 mt-3 rounded"
                style={getGradientStyle(skill.progress)}
              >
                <div className="progress-text ml-2">{skill.progress}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
