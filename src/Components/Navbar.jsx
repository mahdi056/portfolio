import logo from '../assets/logo.png';
import { FaDownload } from "react-icons/fa";
const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <a href="#home" className="hover:text-green-500 transition duration-200">Home</a>
      </li>
      <li>
        <a href="#about" className="hover:text-green-500 transition duration-200">About</a>
      </li>
      <li>
        <a href="#skills" className="hover:text-green-500 transition duration-200">Skills</a>
      </li>
      <li>
        <a href="#education" className="hover:text-green-500 transition duration-200">Education</a>
      </li>
      <li>
        <a href="#projects" className="hover:text-green-500 transition duration-200">Projects</a>
      </li>
      <li>
        <a href="#contact" className="hover:text-green-500 transition duration-200">Contact</a>
      </li>
    </>
  );

  return (
    <div className="navbar backdrop-blur sticky top-0 z-50 shadow-md px-4 md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 text-base"
          >
            {navLinks}
          </ul>
        </div>
        <img className="w-24" src={logo} alt="Mahdi Logo" />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base font-medium space-x-1">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end">
        <a
          href="/Mahdi-Resume.pdf"
          download
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition duration-300"
        >
          <FaDownload /> Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
