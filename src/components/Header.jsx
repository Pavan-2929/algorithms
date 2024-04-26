import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={` p-4 font-semibold border-b-2 border-gray-500`}>
      <div className="md:flex justify-around items-center">
        <div className="text-[2rem] flex justify-around items-center relative">
          <span className=" animate-fire text-red-500">Algorithms</span>
          <div onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        <div>
          <ul
            className={`text-[1.5rem] font-semibold md:flex ${
              isMenuOpen ? "block" : "hidden"
            } space-y-8 md:space-y-0 items-center flex flex-col md:flex-row justify-center `}
          >
            <li className="md:ml-5 xl:mx-5 sm:mt-0 mt-10 hover:text-red-600">
              <NavLink to="/" onClick={closeMenu}>
                <div className="line hover:text-red-600 flex items-center gap-2">
                  Prio-Preemptive
                </div>
              </NavLink>
            </li>

            <li className="md:ml-5 xl:mx-5 hover:text-red-600 ">
              <NavLink to="/algo2">
                <div className="flex items-center gap-2">Reader-Writer</div>
              </NavLink>
            </li>
            <li className="md:ml-5 xl:mx-5 hover:text-red-600 ">
              <NavLink to="/algo3">
                <div className="flex items-center gap-2">FCFS</div>
              </NavLink>
            </li>
            <li className="md:ml-5 xl:mx-5 hover:text-red-600 ">
              <NavLink to="/algo4">
                <div className="flex items-center gap-2">LRU</div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
