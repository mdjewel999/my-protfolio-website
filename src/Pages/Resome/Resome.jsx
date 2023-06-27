import { useState } from "react";
import { Link } from "react-router-dom";
import './Resome.css'



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

const Resome = () => {

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

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className=" p-4">
      <h1 className="text-center mt-16 text-7xl font-bold">My Resume</h1>
      <p className="text-center mt-4"> 1+ YEARS OF EXPERIENCE</p>
      <div className="flex justify-center mt-8">
        <div className="tabs tabs-boxed p-4 ">
          <div>
            <a
              className={`tab ${activeTab === 1 ? "tab-active" : ""}`}
              onClick={() => handleTabClick(1)}
            >
              Education
            </a>
          </div>
          <div>
            <a
              className={`tab ${activeTab === 2 ? "tab-active" : ""}`}
              onClick={() => handleTabClick(2)}
            >
              Professional Skills
            </a>
          </div>
          <div>
            <a
              className={`tab ${activeTab === 3 ? "tab-active" : ""}`}
              onClick={() => handleTabClick(3)}
            >
             Experience
            </a>
          </div>
          <div>
            <a
              className={`tab ${activeTab === 4 ? "tab-active" : ""}`}
              onClick={() => handleTabClick(4)}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
      {activeTab === 1 && (
        <div className="grid  grid-cols-2 gap-4 mt-8">
          <div className="card  hover:bg-purple-600 hover:text-white  bg-white shadow-xl">
            <div className="card-body p-16">
              <h1 className="card-title text-5xl gradient-text font-bold">Education Quality</h1>
              <h2 className="text-2xl">Bachelor of Science - Chemistery</h2>
              <p>National university of Bangladesh (2017 - 2021)</p>
              <p>
                I completed 4 years of B.Sc degree in Physics from the National
                University of Bangladesh, My CGPA is 3.10 out of 4. Chemistry is
                cutting across the edge of all aspects of engineering,
                information technology, biology, medicine, economics, finance,
                accounting and even sociology.
              </p>
            </div>
          </div>
          <div className="card  hover:bg-purple-600 hover:text-white bg-white  shadow-xl">
            <div className="card-body p-16">
              <h1 className="card-title text-5xl gradient-text font-bold">Higher School certificate - Science</h1>
              <h2 className="text-2xl">Higher School certificate - Science</h2>
              <p>Amtali Degree Collage (2015 - 2016)</p>
              <p>
                The Higher Secondary Certificate (HSC) is a public examination
                credential in Bangladesh, India, and Pakistan. HSC is equivalent
                to GCE A Level in England and 3rd and 4th year of high schools
                in the United States.
              </p>
            </div>
          </div>
          <div className="card hover:bg-purple-600 hover:text-white bg-white shadow-xl">
            <div className="card-body p-16">
              <h1 className="card-title text-5xl hover:text-white gradient-text font-bold">
                Web Designer and Developer
              </h1>
              <h2 className="text-2xl">Upwork® Global Inc. (2023)</h2>
              <p>Programming Hero</p>
              <p>
                I m working as a full-time freelance web Developer On UpWork
                from 2016. I m working remotely on projects for clients all over
                the world since 2016. I completed 650+ projects on UpWork, I m
                also a Top-Rated Freelancer on Upwork.
              </p>
            </div>
          </div>
        </div>
      )}
      {activeTab === 2 && (
        <div className="card">
         <div className=" p-4">
      <div>
        <h1 className="text-center mt-4 text-5xl font-bold gradient-text">
          MY SKILLS
        </h1>
      </div>
      <div className="skills grid grid-cols-2 gap-4">
        <div className="frontend-skills">
          <button className=" gradient-text p-2 rounded-md text-2xl font-semibold mt-8 mb-4">
            Frontend
          </button>
          {frontendSkills.map((skill, index) => (
            <div key={index} className="skill">
              <div className="skill-name mt-4 ">{skill.name}</div>
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
          <button className="gradient-text p-2 rounded-md text-2xl  font-semibold mt-8 mb-4">
            Backend
          </button>
          {backendSkills.map((skill, index) => (
            <div key={index} className="skill">
              <div className="skill-name mt-4 ">{skill.name}</div>
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
        </div>
      )}
       {activeTab === 3 && (
        <div className="grid  grid-cols-2 gap-4 mt-8">
        <div className="card  hover:bg-purple-600 hover:text-white  bg-white shadow-xl">
          <div className="card-body p-16">
            <h1 className="card-title text-5xl gradient-text font-bold">Education Quality</h1>
            <h2 className="text-2xl">Bachelor of Science - Chemistery</h2>
            <p>National university of Bangladesh (2017 - 2021)</p>
            <p>
              I completed 4 years of B.Sc degree in Physics from the National
              University of Bangladesh, My CGPA is 3.10 out of 4. Chemistry is
              cutting across the edge of all aspects of engineering,
              information technology, biology, medicine, economics, finance,
              accounting and even sociology.
            </p>
          </div>
        </div>
        <div className="card  hover:bg-purple-600 hover:text-white gradient-bg shadow-xl">
          <div className="card-body p-16">
            <h1 className="card-title text-5xl gradient-text font-bold">Higher School certificate - Science</h1>
            <h2 className="text-2xl">Higher School certificate - Science</h2>
            <p>Amtali Degree Collage (2015 - 2016)</p>
            <p>
              The Higher Secondary Certificate (HSC) is a public examination
              credential in Bangladesh, India, and Pakistan. HSC is equivalent
              to GCE A Level in England and 3rd and 4th year of high schools
              in the United States.
            </p>
          </div>
        </div>
        <div className="card hover:bg-purple-600 hover:text-white bg-white shadow-xl">
          <div className="card-body p-16">
            <h1 className="card-title text-5xl hover:text-white gradient-text font-bold">
              Web Designer and Developer
            </h1>
            <h2 className="text-2xl">Upwork® Global Inc. (2023)</h2>
            <p>Programming Hero</p>
            <p>
              I m working as a full-time freelance web Developer On UpWork
              from 2016. I m working remotely on projects for clients all over
              the world since 2016. I completed 650+ projects on UpWork, I m
              also a Top-Rated Freelancer on Upwork.
            </p>
          </div>
        </div>
      </div>
      )}

      {activeTab === 4 && (
        <div className="card text-center mt-8">
          <Link to="https://drive.google.com/file/d/1MCjL9-mFQW891QqdlgltWEDhC3fhHUUO/view?usp=sharing">
            {" "}
            <button className="btn btn-outline btn-secondary">
              Download Resume
            </button>
          </Link>
        </div>
      )}
     
    </div>
  );
};

export default Resome;
