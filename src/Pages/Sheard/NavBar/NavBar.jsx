import { Link } from "react-router-dom";
import myimage from "../../../assets/Banner/jewel2.jpg"

const NavBar = () => {
  
  const navOptions = (
    <>
    <li>
      <Link to="/">HOME</Link>
    </li>
    <li>
      <Link to="myskills">MY SKILLS</Link>
    </li>
    <li>
      <Link>PORTFOLIO</Link>
    </li>
    <li>
      <Link to="resome">RESUME</Link>
    </li>
    <li>
      <Link>TESTIMONIAL</Link>
    </li>
    <li>
      <Link to="contact">CONTACT</Link>
    </li>
    
  </>
);
          
 

  return (
    <>
      <div className="navbar fixed z-10  bg-opacity-30 max-w-screen-xl autoPlay bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <img className="w-h-8 h-8 rounded" src={myimage} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
