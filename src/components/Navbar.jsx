import React, { useState } from 'react';
import { List, X } from 'phosphor-react';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="sticky top-0 z-20">
      <nav className="relative flex h-16 items-center justify-between lg:h-20">
        {/* logo */}
        <div className="z-40">
          <svg
            className="lg:h-11 lg:w-16"
            width="56"
            height="36"
            viewBox="0 0 56 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5996 6.40625L1.38867 32H20.8652L11.6367 6.40625H10.5996ZM2.68945 31.0508L10.7227 8.70898L11.1094 7.47852L11.4961 8.70898L19.5117 31.0508H2.68945Z"
              fill="#350207"
            />
            <line x1="28.5" y1="6" x2="28.5" y2="32" stroke="#350207" />
            <path
              d="M44.5996 6.40625L35.3887 32H54.8652L45.6367 6.40625H44.5996ZM36.6895 31.0508L44.7227 8.70898L45.1094 7.47852L45.4961 8.70898L53.5117 31.0508H36.6895Z"
              fill="#350207"
            />
          </svg>
        </div>
        {/* menu-desktop */}
        <ul className="hidden space-x-12 text-primary md:flex">
          <li className="duration-600 font-text text-lg font-light transition-all hover:text-white">
            <a className="cursor-point" href="#home">Home</a>
          </li>
          <li className="duration-600 font-text text-lg font-light transition-all hover:text-white">
            <a className="cursor-point" href="#projects">Projects</a>
          </li>
          <li className="duration-600 font-text text-lg font-light transition-all hover:text-white">
            <a className="cursor-point" href="#about">About</a>
          </li>
          <li className="duration-600 font-text text-lg font-light transition-all hover:text-white">
            <a className="cursor-point" href="#contact">Contact</a>
          </li>
        </ul>
        {/* menu-mobile */}
        <div className="md:hidden lg:hidden">
          {toggleMenu ? (
            <div
              className="absolute right-[-1.2px] top-[20px] z-50 cursor-point"
              onClick={() => setToggleMenu(false)}
            >
              <X size={24} color="#320207" weight="light" />
            </div>
          ) : (
            <div className="cursor-point" onClick={() => setToggleMenu(true)}>
              <List size={24} color="#320207" weight="light" />
            </div>
          )}
          {toggleMenu && (
            <div className="bg-ora fixed left-0 top-0 flex h-screen w-screen flex-col justify-center space-y-12 bg-home text-center text-primary">
              <ul className="grid gap-16">
                <li className="duration-600 font-text text-5xl font-semibold transition-all hover:text-white">
                  <a onClick={() => setToggleMenu(false)} href="#home">
                    Home
                  </a>
                </li>
                <li className="duration-600 font-text text-5xl font-semibold transition-all hover:text-white">
                  <a onClick={() => setToggleMenu(false)} href="#projects">
                    Projects
                  </a>
                </li>
                <li className="duration-600 font-text text-5xl font-semibold transition-all hover:text-white">
                  <a onClick={() => setToggleMenu(false)} href="#about">
                    About
                  </a>
                </li>
                <li className="duration-600 font-text text-5xl font-semibold transition-all hover:text-white">
                  <a onClick={() => setToggleMenu(false)} href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
