import { useEffect } from "react";
import htmlLogo from "../../../assets/skills/icons8-html-5-96.png";
import cssLogo from "../../../assets/skills/icons8-css-logo-96.png";
import bootstrapLogo from "../../../assets/skills/icons8-bootstrap-96.png";
import tailwindLogo from "../../../assets/skills/icons8-tailwind-css-96.png";
import javascriptLogo from "../../../assets/skills/icons8-javascript-96.png";
import reactLogo from "../../../assets/skills/icons8-react-native-96.png";
import firebaseLogo from "../../../assets/skills/icons8-firebase-96.png";
import nodeJSLogo from "../../../assets/skills/icons8-nodejs-96.png";
import expressJSLogo from "../../../assets/skills/icons8-express-js-96.png";
import mongoDBLogo from "../../../assets/skills/icons8-mongodb-96.png";
import gitHubLogo from "../../../assets/skills/icons8-github-96.png";
import gitLogo from "../../../assets/skills/icons8-git-96.png";
import nextLogo from "../../../assets/skills/icons8-js-100.png";
import redux from "../../../assets/skills/Redux.png"
import context from "../../../assets/skills/cotext.png"
import AOS from "aos";
import "aos/dist/aos.css";
import "./Skills.css"

AOS.init({
  duration: 1200,
});
const Skills = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id="skills" className="bg-neutral w-full mx-auto">
      <div className="">
        <h1 className="text-white font-bold text-4xl text-center mb-8">
          Technical Skills
        </h1>
      </div>
      <div className="bg-violet-300 relative transition duration-200 transform hover:-translate-y-2 rounded shadow-2xl hover:shadow-2xl dark:bg-violet-900 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 p-6 hover:bg-gray-900">
        {/* Html */}
        <div
          data-aos="fade-down-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="max-w-sm p-6 bg-white border-2 border-b-violet-400 border-x-0 border-t-0 border-violet-400 hover:-translate-y-2 hover:transition hover:delay-100 hover:duration-1000 rounded-lg shadow dark:bg-violet-400 dark:border-gray-800 text-center hover:bg-violet-400 hover:border-none dark:hover:bg-slate-300 dark:hover:text-slate-900"
        >
          <img className="mx-auto" src={htmlLogo} alt="HTML" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900">
            HTML
          </h5>
        </div>
        {/* css */}
        <div
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="max-w-sm p-6 bg-white border-2 border-b-violet-400 border-x-0 border-t-0 border-violet-400 hover:-translate-y-2 hover:transition hover:delay-100 rounded-lg shadow dark:bg-violet-400 dark:border-gray-800 text-center hover:bg-violet-400 hover:border-none hover:duration-1000 dark:hover:bg-slate-300 dark:hover:text-slate-900"
        >
          <img className="mx-auto" src={cssLogo} alt="CSS" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900 ">
            CSS
          </h5>
        </div>
        {/* bootstrap */}
        <div
          data-aos="fade-down-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="max-w-sm p-6 bg-white border-2 border-b-violet-400 border-x-0 border-t-0 border-violet-400 hover:-translate-y-2 hover:transition hover:delay-100 rounded-lg shadow dark:bg-violet-400 dark:border-gray-800 text-center hover:bg-violet-400 hover:border-none hover:duration-1000 dark:hover:bg-slate-300 dark:hover:text-slate-900"
        >
          <img className="mx-auto" src={bootstrapLogo} alt="Bootstrap" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900 ">
            Bootstrap
          </h5>
        </div>
        {/* tailwind */}
        <div
          data-aos="fade-down-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="max-w-sm p-6 bg-white border-2 border-b-violet-400 border-x-0 border-t-0 border-violet-400 hover:-translate-y-2 hover:transition hover:delay-100 rounded-lg shadow dark:bg-violet-400 dark:border-gray-800 text-center hover:bg-violet-400 hover:border-none hover:duration-1000 dark:hover:bg-slate-300 dark:hover:text-slate-900"
        >
          <img className="mx-auto" src={tailwindLogo} alt="Tailwind" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900">
            Tailwind
          </h5>
        </div>
        {/* javascript */}
        <div
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="max-w-sm p-6 bg-white border-2 border-b-violet-400 border-x-0 border-t-0 border-violet-400 hover:-translate-y-2 hover:transition hover:delay-100 rounded-lg shadow dark:bg-violet-400 dark:border-gray-800 text-center hover:bg-violet-400 hover:border-none hover:duration-1000 dark:hover:bg-slate-300 dark:hover:text-slate-900"
        >
          <img className="mx-auto" src={javascriptLogo} alt="JavaScript" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900">
            JavaScript
          </h5>
        </div>
        {/* react */}
        <div
          data-aos="fade-down-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="max-w-sm p-6 bg-white border-2 border-b-violet-400 border-x-0 border-t-0 border-violet-400 hover:-translate-y-2 hover:transition hover:delay-100 rounded-lg shadow dark:bg-violet-400 dark:border-gray-800 text-center hover:bg-violet-400 hover:border-none hover:duration-1000 dark:hover:bg-slate-300 dark:hover:text-slate-900"
        >
          <img className="mx-auto" src={reactLogo} alt="React" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900">
            React
          </h5>
        </div>
        {/* firebase */}
        <div
          data-aos="fade-down-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="max-w-sm p-6 bg-white border-2 border-b-violet-400 border-x-0 border-t-0 border-violet-400 hover:-translate-y-2 hover:transition hover:delay-100 rounded-lg shadow dark:bg-violet-400 dark:border-gray-800 text-center hover:bg-violet-400 hover:border-none hover:duration-1000 dark:hover:bg-slate-300 dark:hover:text-slate-900"
        >
          <img className="mx-auto" src={firebaseLogo} alt="Firebase" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900 ">
            Firebase
          </h5>
        </div>
        {/* Node Js*/}
        <div
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="max-w-sm p-6 bg-white border-2 border-b-violet-400 border-x-0 border-t-0 border-violet-400 hover:-translate-y-2 rounded-lg shadow dark:bg-violet-400 dark:border-gray-800 text-center hover:bg-violet-400 hover:border-none hover:duration-1000 dark:hover:bg-slate-300 dark:hover:text-slate-900"
        >
          <img className="mx-auto" src={nodeJSLogo} alt="Node JS" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900 ">
            Node JS
          </h5>
        </div>
        {/* express Js */}
        <div
          data-aos="fade-down-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="max-w-sm p-6 bg-white border-2 border-b-violet-400 border-x-0 border-t-0 border-violet-400 hover:-translate-y-2 hover:transition hover:delay-100 rounded-lg shadow dark:bg-violet-400 dark:border-gray-800 text-center hover:bg-violet-400 hover:border-none hover:duration-1000 dark:hover:bg-slate-300 dark:hover:text-slate-900"
        >
          <img className="mx-auto" src={expressJSLogo} alt="Express JS" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900 ">
            Express JS
          </h5>
        </div>
        {/* mongodb */}
        <div
          data-aos="fade-down-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="max-w-sm p-6 bg-white border-2 border-b-violet-400 border-x-0 border-t-0 border-violet-400 hover:-translate-y-2 hover:transition hover:delay-100 rounded-lg shadow dark:bg-violet-400 dark:border-gray-800 text-center hover:bg-violet-400 hover:border-none hover:duration-1000 dark:hover:bg-slate-300 dark:hover:text-slate-900"
        >
          <img className="mx-auto" src={mongoDBLogo} alt="MongoDB" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900 ">
            MongoDB
          </h5>
        </div>
        {/* github */}
        <div
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="max-w-sm p-6 bg-white border-2 border-b-violet-400 border-x-0 border-t-0 border-violet-400 hover:-translate-y-2 hover:transition hover:delay-100 rounded-lg shadow dark:bg-violet-400 dark:border-gray-800 text-center hover:bg-violet-400 hover:border-none hover:duration-1000 dark:hover:bg-slate-300 dark:hover:text-slate-900"
        >
          <img className="mx-auto" src={gitHubLogo} alt="GitHub" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900 ">
            GitHub
          </h5>
        </div>
        {/* git */}
        <div
          data-aos="fade-down-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="max-w-sm p-6 bg-white border-2 border-b-violet-400 border-x-0 border-t-0 border-violet-400 hover:-translate-y-2 hover:transition hover:delay-100 rounded-lg shadow dark:bg-violet-400 dark:border-gray-800 text-center hover:bg-violet-400 hover:border-none hover:duration-1000 dark:hover:bg-slate-300 dark:hover:text-slate-900"
        >
          <img className="mx-auto" src={gitLogo} alt="GIT" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900 ">
            Git
          </h5>
        </div>
        {/* next js */}
        <div
          data-aos="fade-down-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="max-w-sm p-6 bg-white border-2 border-b-violet-400 border-x-0 border-t-0 border-violet-400 hover:-translate-y-2 hover:transition hover:delay-100 rounded-lg shadow dark:bg-violet-400 dark:border-gray-800 text-center hover:bg-violet-400 hover:border-none hover:duration-1000 dark:hover:bg-slate-300 dark:hover:text-slate-900"
        >
          <img className="mx-auto" src={nextLogo} alt="Next Js" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900 ">
            Next JS
          </h5>
        </div>
        {/* redux js */}
        <div
          data-aos="fade-down-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="max-w-sm p-6 bg-white border-2 border-b-violet-400 border-x-0 border-t-0 border-violet-400 hover:-translate-y-2 hover:transition hover:delay-100 rounded-lg shadow dark:bg-violet-400 dark:border-gray-800 text-center hover:bg-violet-400 hover:border-none hover:duration-1000 dark:hover:bg-slate-300 dark:hover:text-slate-900"
        >
          <img className="mx-auto" src={redux} alt="Next Js" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900 ">
            Redux
          </h5>
        </div>
        {/* context js */}
        <div
          data-aos="fade-down-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="max-w-sm p-6 bg-white border-2 border-b-violet-400 border-x-0 border-t-0 border-violet-400 hover:-translate-y-2 hover:transition hover:delay-100 rounded-lg shadow dark:bg-violet-400 dark:border-gray-800 text-center hover:bg-violet-400 hover:border-none hover:duration-1000 dark:hover:bg-slate-300 dark:hover:text-slate-900"
        >
          <img className="mx-auto" src={context} alt="Next Js" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900 ">
            Context API
          </h5>
        </div>
      </div>

      <hr className="my-6 border-violet-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
    </div>
  );
};

export default Skills;