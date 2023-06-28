import { useState } from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const SpeedDial = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:mdjewel878761@gmail.com";
  };

  return (
    <div data-dial-init className="fixed right-6 bottom-4 group z-50">
      <div
        id="speed-dial-menu-bottom-right"
        className={`flex flex-col items-center ${
          isMenuOpen ? "mb-4" : "hidden"
        }`}
      >
        {/* github */}
        <Link
          to="https://github.com/mdjewel999"
          data-tooltip-target="tooltip-share"
          data-tooltip-placement="left"
          className="flex justify-center items-center mt-2 w-[52px] h-[52px] text-gray-700 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
          target="_blank"
        >
          <BsGithub className="text-xl text-violet-600" />
          <span className="sr-only">Github</span>
        </Link>

        <div
          id="tooltip-share"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Github
          <div className="tooltip-arrow" data-popper-arrow />
        </div>

        {/* facebook */}
        <Link
          to="https://www.facebook.com/"
          data-tooltip-target="tooltip-share"
          data-tooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] my-2 text-gray-700 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
          target="_blank"
        >
          <BsFacebook className="text-xl text-violet-600" />
          <span className="sr-only">Facebook</span>
        </Link>

        <div
          id="tooltip-share"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Facebook
          <div className="tooltip-arrow" data-popper-arrow />
        </div>

        {/* linkedIn */}
        <Link
          to="https://www.linkedin.com/in/md-jewel-954986250/"
          data-tooltip-target="tooltip-share"
          data-tooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] mb-2 text-gray-700 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
          target="_blank"
        >
          <BsLinkedin className="text-xl text-violet-600" />
          <span className="sr-only">LinkedIn</span>
        </Link>

        <div
          id="tooltip-share"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          LinkedIn
          <div className="tooltip-arrow" data-popper-arrow />
        </div>

        {/* email */}
        <button
          onClick={handleEmailClick}
          type="button"
          data-tooltip-target="tooltip-share"
          data-tooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] text-gray-700 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
        >
          <SiGmail className="text-xl text-violet-600" />
          <span className="sr-only">Email</span>
        </button>

        <div
          id="tooltip-share"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Email
          <div className="tooltip-arrow" data-popper-arrow />
        </div>

        {/* Other buttons and tooltips */}
      </div>

      <button
        type="button"
        data-dial-toggle="speed-dial-menu-bottom-right"
        aria-controls="speed-dial-menu-bottom-right"
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
        className="flex items-center justify-center text-white bg-violet-700 rounded-full w-14 h-14 hover:bg-violet-800 dark:bg-violet-600 dark:hover:bg-violet-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-violet-800"
      >
        <svg
          aria-hidden="true"
          className={`w-8 h-8 transition-transform ${
            isMenuOpen ? "rotate-45" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <span className="sr-only">Open actions menu</span>
      </button>
    </div>
  );
};

export default SpeedDial;
