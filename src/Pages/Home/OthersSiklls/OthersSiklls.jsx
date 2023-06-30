import { FaBookReader, FaNodeJs, FaYahoo } from "react-icons/fa";
import "./OthersSiklls.css";

const OthersSiklls = () => {
  return (
    <>
      <div className="bg-neutral w-full mx-auto">
        <div className="text-center mb-8"> <br />
          <h1 className="text-center font-bold text-5xl text-white">PROGRAMMING</h1>
          <h1 className="text-center font-bold text-5xl text-white mt-4"> <span className="text-center font-bold text-2xl">AND</span> SKILLS</h1>
        </div>
        <div className="grid grid-cols-1 mb-8 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto">
          <div className="card w-96 mb-8 hover:bg-base-100 text-2xl hover:text-white shadow-xl image-full">
            <div className="card-body othercard">
              <h1 className="text-7xl">
                <FaBookReader />
              </h1>
              <h2 className="card-title">Expertise</h2>
              <p>
                JavaScript, ES6, React, Node.js, Express.js, React Hook, React
                Router, Redux, Rest API, Firebase, Tailwind, Bootstrap5,
              </p>
            </div>
          </div>
          <div className="card w-96 mb-8 hover:bg-base-100 text-2xl hover:text-white shadow-xl image-full">
            <div className="card-body othercard">
              <h1 className="text-7xl">
                <FaNodeJs />
              </h1>
              <h2 className="card-title">Comfortable</h2>
              <p>
                Nextjs, PHP, Laravel, WordPress, MongoDB, Mysql, JWT, Material
                Tools: Docker, Github, Figma, Photoshop, npm
              </p>
            </div>
          </div>
          <div className="card w-96 mb-8 hover:bg-base-100 text-2xl text-black hover:text-white shadow-xl image-full">
            <div className="card-body othercard">
              <h1 className="text-7xl">
                <FaYahoo />
              </h1>
              <h2 className="card-title">Familiar</h2>
              <p>Vuejs, TypeScript, GraphQL Tools: Heroku, Netlify, VS Code</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default OthersSiklls;
