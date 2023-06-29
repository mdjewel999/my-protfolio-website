import { FaBookReader, FaNodeJs, FaYahoo } from "react-icons/fa";
import "./OthersSiklls.css"


const OthersSiklls = () => {
  return (
    <>
      <div className="bg-neutral">
        <div className="text-center mb-8">
          <h1 className="text-5xl text-white">PROGRAMMING</h1>
          <h1 className="text-3xl text-white">and other skills</h1>
        </div>
        <div className="grid grid-cols-3">
          <div className="card w-96 mb-8 hover:bg-red-600 text-2xl hover:text-white shadow-xl image-full">
            <div className="card-body">
              <h1 className="text-7xl">
                {" "}
                <FaBookReader />{" "}
              </h1>
              <h2 className="card-title">Expertise</h2>
              <p>
                JavaScript, ES6, React, Node.js, Express.js, React Hook, React
                Router, Redux, Rest API, Firebase, Tailwind, Bootstrap5,
              </p>
            </div>
          </div>
          <div className="card w-96 mb-8 bg-base-100  hover:bg-red-600 text-2xl  hover:text-white shadow-xl image-full">
            <div className="card-body">
              <h1 className="text-7xl">
                {" "}
                <FaNodeJs />{" "}
              </h1>
              <h2 className="card-title">Comfortable</h2>
              <p>
                Nextjs, PHP, Laravel, WordPress, MongoDB, Mysql, JWT, Material
                Tools: Docker, Github, Figma, Photoshop, npm
              </p>
            </div>
          </div>
          <div className="card w-96 mb-8 bg-base-100  hover:bg-red-600 text-2xl text-black hover:text-white shadow-xl image-full">
            <div className="card-body">
              <h1 className="text-7xl">
                {" "}
                <FaYahoo />{" "}
              </h1>
              <h2 className="card-title">Familiar</h2>
              <p>Vuejs, TypeScript, GraphQL Tools: Heroku, Netlify, VS Code</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OthersSiklls;
