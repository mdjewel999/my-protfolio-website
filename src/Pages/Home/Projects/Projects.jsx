import { useEffect, useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import project1 from "../../../assets/projects/Screenshot 2023-06-14 232107.png";
import project2 from "../../../assets/projects/Screenshot 2023-06-15 003038.png";
import project3 from "../../../assets/projects/Screenshot 2023-06-15 010302.png";
import project4 from "../../../assets/projects//Screenshot 2023-06-15 012502.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Projects = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="projects" className="mb-8 p-4">
      <div className="">
      <h1 className="text-center font-bold text-7xl text-violet-600 mt-10  pt-4 gap-10">
        My Portfolio
      </h1>
      <h2 className="text-center font-bold text-2xl text-violet-600 mt-4">
        VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
      </h2>
      </div>
      <div className="w-full  mx-auto my-6 grid sm:grid-cols-1 lg:grid-cols-2">
        {/* shutter camp */}
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-950  hover:-translate-y-2 hover:bg-violet-300 hover:transition-colors hover:delay-300 hover:duration-500 mr-6"
        >
          <div className="mx-auto">
            <img
              className="rounded-lg h-[300px] object-cover mx-auto border-violet-600 px-3 mt-4"
              src={project1}
              alt=""
            />
            <h3 className="title-text text-center mt-3 text-2xl dark:text-white">
              Summer Camp (Drawing summer camp School)
            </h3>
            <hr className="my-6 border-violet-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
          </div>
          <div className="p-5">
            <div>
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 bg-gray-100 border border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={toggleAccordion}
                aria-expanded={isOpen}
                aria-controls="accordion-arrow-icon-body-1"
              >
                Project Details
              </button>
              {isOpen && (
                <div
                  id="accordion-arrow-icon-body-1"
                  aria-labelledby="accordion-arrow-icon-heading-1"
                  className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                >
                  <div>
                    <h3 className="text-xl text-violet-600 dark:text-violet-600 font-semibold ">
                      Description:{" "}
                    </h3>
                    <p className="dark:text-white">
                      ● It is a MERN stack-based website for summer camp school.{" "}
                      <br /> ● This website is admin, instructor and student
                      dashboard are also provided and there is also a payment
                      system, where students can select and enroll in class by
                      paying ,instructor can added new classes and be approved
                      by the admin. <br /> ● It contains class details and
                      summer camp schedules and descriptions of instructors.{" "}
                    </p>
                    <h3 className="text-xl font-semibold text-violet-600 dark:text-violet-600">
                      Features:{" "}
                    </h3>

                    <ul className="dark:text-white">
                      <li className="flex">
                        <BsCheckCircleFill className="mt-1 mr-2 text-green-500"></BsCheckCircleFill>{" "}
                        Provide Admin Panel and Instructor Panel for
                        instructors.
                      </li>
                      <li className="flex">
                        <BsCheckCircleFill className="mt-1 mr-2 text-green-500"></BsCheckCircleFill>
                        Stripe payment system has been integrated
                      </li>
                      <li className="flex">
                        <BsCheckCircleFill className="mt-1 mr-2 text-green-500 text-xl"></BsCheckCircleFill>
                        Axios is used in sending asynchronous HTTP requests and
                        handling responses
                      </li>
                    </ul>
                  </div>
                  {/* technology */}
                  <div>
                    <p>
                      {" "}
                      <span className="text-xl font-semibold text-violet-600 dark:text-violet-600">
                        Technologies:{" "}
                      </span>{" "}
                      React,Tailwind, daisyUi, React Hook Form, Axios, Tanstack
                      query, AOS, Stripe, React awesome reveal, React awesome
                      Slider, Firebase, MongoDb,express js, React Icon, React
                      Toastify, SweetAlert2
                    </p>
                  </div>
                  <div
                    className="mt-4 flex sm:flex-col lg:flex-row justify-around"
                    target="_blank"
                  >
                    <Link to="https://royal-drawing-school.web.app">
                      Live Side
                    </Link>
                    <Link to="https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-mdjewel999">
                      Sever side
                    </Link>
                    <Link to="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-mdjewel999">
                      Client side
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* disney magic toys */}
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1000"
          className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:hover:bg-gray-950  dark:border-gray-700  hover:-translate-y-2 hover:bg-violet-300 hover:transition-colors hover:delay-300 hover:duration-500"
        >
          <div className="mx-auto">
            <img
              className="rounded-lg h-[300px] object-cover mx-auto border-violet-600 px-3 mt-4"
              src={project2}
              alt=""
            />
            <h3 className="title-text text-center mt-3 text-2xl dark:text-white">
              Toy market (Toy Online Market Place)
            </h3>
            <hr className="my-6 border-violet-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
          </div>
          <div className="p-5">
            <div>
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 bg-gray-100 border border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={toggleAccordion}
                aria-expanded={isOpen}
                aria-controls="accordion-arrow-icon-body-1"
              >
                Project Details
              </button>
              {isOpen && (
                <div
                  id="accordion-arrow-icon-body-1"
                  aria-labelledby="accordion-arrow-icon-heading-1"
                  className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                >
                  <div>
                    <h3 className="text-xl text-violet-600 dark:text-violet-600 font-semibold ">
                      Description:{" "}
                    </h3>
                    <p className="dark:text-white">
                      ● This project is based on for toy house who wants to buy
                      a toy from best market place. It is a E-commerce website.{" "}
                      <br />
                      ● For user friendly design, here used Tailwind css and
                      Daisy UI framework. <br /> ● Secure API and awesome UI UX
                      that makes a unique user interface.
                    </p>
                    <h3 className="text-xl font-semibold text-violet-600 dark:text-violet-600">
                      Features:{" "}
                    </h3>
                    {/* feature list */}
                    <ul className="dark:text-white">
                      <li className="flex">
                        <BsCheckCircleFill className="mt-2 mr-2 text-green-500"></BsCheckCircleFill>{" "}
                        Sellers can read, add, update and delete data.
                      </li>
                      <li className="flex">
                        <BsCheckCircleFill className="mt-1 mr-2 text-green-500 w-5"></BsCheckCircleFill>
                        Implemented Firebase authentication for Login, Logout
                        and Registration
                      </li>
                      <li className="flex">
                        <BsCheckCircleFill className="mt-1 mr-2 text-green-500 "></BsCheckCircleFill>
                        REST API for fetching data from express server.
                      </li>
                    </ul>
                  </div>
                  {/* technology */}
                  <div>
                    <p>
                      {" "}
                      <span className="text-xl font-semibold text-violet-600 dark:text-violet-600">
                        Technologies:{" "}
                      </span>
                      Tailwind, daisyUI,
                      React,lottie-react,react-tabs,react-select,swiper js,
                      Firebase, MongoDb, React Icons, React Toastify,
                      SweetAlert2, express js,
                    </p>
                  </div>
                  {/* links */}
                  <div className="mt-4 flex sm:flex-col lg:flex-row justify-around">
                    <Link to="https://happy-toy-house-508d2.web.app/">
                      Live Side
                    </Link>
                    <Link to="https://github.com/mdjewel999/happy-toy-house-server">
                      Sever side
                    </Link>
                    <Link to="https://github.com/mdjewel999/happy-toy-house-client">
                      Client side
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* cooking alchemist */}
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-950  hover:-translate-y-2 hover:bg-violet-300 hover:transition-colors hover:delay-300 hover:duration-500 mr-6 mt-6"
        >
          <div className="mx-auto">
            <img
              className="rounded-lg h-[300px] object-cover mx-auto border-violet-600 px-3 mt-4"
              src={project3}
              alt=""
            />
            <h3 className="title-text text-center mt-3 text-2xl dark:text-white">
              Chef Recipe Hunter (Healthy Food Recipe)
            </h3>
            <hr className="my-6 border-violet-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
          </div>
          <div className="p-5">
            <div>
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 bg-gray-100 border border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={toggleAccordion}
                aria-expanded={isOpen}
                aria-controls="accordion-arrow-icon-body-1"
              >
                Project Details
              </button>
              {isOpen && (
                <div
                  id="accordion-arrow-icon-body-1"
                  aria-labelledby="accordion-arrow-icon-heading-1"
                  className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                >
                  <div>
                    <h3 className="text-xl text-violet-600 dark:text-violet-600 font-semibold ">
                      Description:{" "}
                    </h3>
                    <p className="dark:text-white">
                      ● This project is based on some popular Healthy Food
                      Recipe. <br /> ● It is a single page application. There
                      you will find chefs and their famous recipes worldeiwd.{" "}
                      <br /> ● This is a Firebase authentication-based website
                      used for user login and register system. The chefs and
                      description of some their famous recipesand information on
                      cooking methods, ingredients etc.
                    </p>
                    <h3 className="text-xl font-semibold text-violet-600 dark:text-violet-600">
                      Features:{" "}
                    </h3>

                    <ul className="dark:text-white">
                      <li className="flex">
                        <BsCheckCircleFill className="mt-2 mr-2 text-green-500"></BsCheckCircleFill>{" "}
                        Express server has implemented for getting the data into
                        client side.
                      </li>
                      <li className="flex">
                        <BsCheckCircleFill className="mt-1 mr-2 text-green-500 w-5"></BsCheckCircleFill>
                        Implemented feedback form with Email JS to get feedback
                        from users.
                      </li>
                      <li className="flex">
                        <BsCheckCircleFill className="mt-1 mr-2 text-green-500 "></BsCheckCircleFill>
                        Applied React to pdf package for converting into a pdf
                        document.
                      </li>
                    </ul>
                  </div>
                  {/* technology */}
                  <div>
                    <p>
                      {" "}
                      <span className="text-xl font-semibold text-violet-600 dark:text-violet-600">
                        Technologies:{" "}
                      </span>
                      Tailwind, daisyUI, React,lottie-react,react-hot-toast,
                      Firebase, MongoDb, React Icons,
                      react-lazy-load,react-to-pdf, react-toastify,
                      react-tooltip, emailjs,express js,
                    </p>
                  </div>
                  {/* links */}
                  <div className="mt-4 flex sm:flex-col lg:flex-row justify-around">
                    <Link to="https://healthy-food-recipe-302b2.web.app/category/0">
                      Live Side
                    </Link>
                    <Link to="https://github.com/mdjewel999/healthy-food-recipe-server">
                      Sever side
                    </Link>
                    <Link to="https://github.com/mdjewel999/healthy-food-recipe-client">
                      Client side
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* elite Recruiting */}
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1000"
          className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-950   hover:-translate-y-2 hover:bg-violet-300 hover:transition-colors hover:delay-300 hover:duration-500 mr-6 mt-6 px-4"
        >
          <div className="mx-auto">
            <img
              className="rounded-lg h-[300px] object-cover mx-auto border-violet-600 px-3 mt-4"
              src={project4}
              alt=""
            />
            <h3 className="title-text text-center mt-3 text-2xl dark:text-white">
              Elite Recruiting
            </h3>
            <hr className="my-6 border-violet-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
          </div>
          <div className="p-5">
            <div>
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 bg-gray-100 border border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={toggleAccordion}
                aria-expanded={isOpen}
                aria-controls="accordion-arrow-icon-body-1"
              >
                Project Details
              </button>
              {isOpen && (
                <div
                  id="accordion-arrow-icon-body-1"
                  aria-labelledby="accordion-arrow-icon-heading-1"
                  className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                >
                  <div>
                    <h3 className="text-xl text-violet-600 dark:text-violet-600 font-semibold ">
                      Description:{" "}
                    </h3>
                    <p className="dark:text-white">
                      This is a project for those who are willing to find a new
                      job and here they can find their dream job. This is
                      basically a react based project where remote and onsite
                      job opportunities are showing.{" "}
                    </p>
                    <h3 className="text-xl font-semibold text-violet-600 dark:text-violet-600">
                      Features:{" "}
                    </h3>

                    <ul className="dark:text-white">
                      <li className="flex">
                        <BsCheckCircleFill className="mt-2 mr-2 text-green-500"></BsCheckCircleFill>{" "}
                        Various categories of jobs are available where user can
                        apply.
                      </li>
                      <li className="flex">
                        <BsCheckCircleFill className="mt-1 mr-2 text-green-500 w-5"></BsCheckCircleFill>
                        Implemented recharts for showing data in a stacked area
                        charts.
                      </li>
                      <li className="flex">
                        <BsCheckCircleFill className="mt-1 mr-2 text-green-500 w-7"></BsCheckCircleFill>
                        On applied job section user can see their added jobs on
                        the basis of their preferences on remote or onsite.
                      </li>
                    </ul>
                  </div>
                  {/* technology */}
                  <div>
                    <p>
                      {" "}
                      <span className="text-xl font-semibold text-violet-600 dark:text-violet-600">
                        Technologies:{" "}
                      </span>
                      Tailwind, daisyUI, React,lottie-react,heroicons,recharts
                    </p>
                  </div>
                  {/* links */}
                  <div className="mt-4 flex sm:flex-col lg:flex-row justify-around">
                    <Link to="https://royal-drawing-school.web.app">
                      Live Side
                    </Link>
                    <Link to="https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-mdjewel999">
                      Sever side
                    </Link>
                    <Link to="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-mdjewel999">
                      Client side
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
