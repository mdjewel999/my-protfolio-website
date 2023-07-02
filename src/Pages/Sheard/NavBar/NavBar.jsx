import { useState } from "react";
import { Link } from "react-router-dom";
import myimage from "../../../assets/Banner/jewel2.jpg";
import './NavBar.css'

const NavBar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navOptions = (
    <>
      <li onClick={closeMenu}>
        <Link to="/">HOME</Link>
      </li>
      <li onClick={closeMenu}>
        <Link to="myskills">MY SKILLS</Link>
      </li>
      <li onClick={closeMenu}>
        <Link to="protfolio">PORTFOLIO</Link>
      </li>
      <li onClick={closeMenu}>
        <Link to="resome">RESUME</Link>
      </li>
      <li onClick={closeMenu}>
        <Link to="/">TESTIMONIAL</Link>
      </li>
      <li onClick={closeMenu}>
        <Link to="contact">CONTACT</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-neutral bg-opacity-30 w-full mx-auto  max-w-screen-xl autoPlay text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              onClick={handleMenuToggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {isMenuOpen && (
              <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow font-bold rounded-box w-52">
                {navOptions}
              </ul>
            )}
          </div>
          <img
            className="w-h-8 h-8 rounded-lg border-gray-200"
            src={myimage}
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <Link to="contact" className="bg-gradient-to-r from-blue-400 hover:to-blue-400 via-purple-500 to-pink-500 hover:from-pink-500 py-2 px-3 rounded-full">Hire Me</Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
