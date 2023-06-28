import React, { useState } from "react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
// import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const NavBar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="bg-violet-100 z-40 fixed  dark:bg-gray-900 w-full border-2 border-b-violet-700 dark:border-4 dark:border-x-0 dark:border-t-0 dark:border-b-violet-700 dark:shadow-md dark:shadow-violet-800/80 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link className="/">
          <span className="self-center text-2xl font-semibold whitespace-nowrap lobster-fonts dark:text-white">
            Moriam Akter Swarna
          </span>
        </Link>

        <div className="flex md:order-2">
          <div className="mr-3">{<DarkThemeToggle></DarkThemeToggle>}</div>

          <button className="primary-btn">Hit me Up</button>
          <button
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isNavbarOpen}
            onClick={toggleNavbar}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isNavbarOpen ? "" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col p-4 md:p-2  lg:px-4 lg:py-4 mt-4 border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-white bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-violet-300 dark:focus:ring-violet-800 shadow-lg shadow-violet-500/50 dark:shadow-lg dark:shadow-violet-800/80 font-medium rounded-lg text-sm px-5  text-center mr-2 mb-2">
            {/*  Home link */}

            <li>
              <Link
                activeClass="active"
                className="hover:text-[#ffffff] block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="home"
                aria-current="page"
              >
                Home
              </Link>
            </li>

            {/* about link */}

            <li>
              <Link
                activeClass="active"
                className="hover:text-[#ffff] block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                to="about"
              >
                About
              </Link>
            </li>

            {/* skills link */}
            <li>
              <Link
                activeClass="active"
                className="hover:text-[#ffffff] block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="skills"
              >
                Skills
              </Link>
            </li>

            {/* Projects link */}
            <li>
              <Link
                activeClass="active"
                className="hover:text-white block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="projects"
              >
                Projects
              </Link>
            </li>

            {/* services link */}
            <li>
              <Link
                activeClass="active"
                className="hover:text-white block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="services"
              >
                Services
              </Link>
            </li>

            {/* contact link */}
            <li>
              <Link
                activeClass="active"
                className="hover:text-white block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
