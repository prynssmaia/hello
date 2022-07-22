import React, { useState } from 'react';
import { NavigationArrow, Layout, TextT, ChatCircle, List, X } from 'phosphor-react';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-black10 border-b border-[#444444]">
      <nav className="container relative flex h-16 items-center justify-between lg:h-12">
        {/* logo */}
        <div className="z-40">
          <svg
            className="lg:h-11 lg:w-14"
            width="42"
            height="24"
            viewBox="0 0 56 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5996 6.40625L1.38867 32H20.8652L11.6367 6.40625H10.5996ZM2.68945 31.0508L10.7227 8.70898L11.1094 7.47852L11.4961 8.70898L19.5117 31.0508H2.68945Z"
              fill="#FAFCFC"
            />
            <line x1="28.5" y1="6" x2="28.5" y2="32" stroke="#FAFCFC" />
            <path
              d="M44.5996 6.40625L35.3887 32H54.8652L45.6367 6.40625H44.5996ZM36.6895 31.0508L44.7227 8.70898L45.1094 7.47852L45.4961 8.70898L53.5117 31.0508H36.6895Z"
              fill="#FAFCFC"
            />
          </svg>
        </div>
        {/* menu-desktop */}
        <ul className="hidden h-full md:flex md:justify-center md:items-center">
          <li className="flex items-center h-full p-2 bg-blue10">
            <a className="cursor-point" href="#home">
              <NavigationArrow size={32} color="#fafcfc" weight="thin" />
            </a>
          </li>
          <li className="h-full p-2 duration-300 transition-all hover:bg-black20">
            <a className="cursor-point" href="#projects">
              <Layout size={32} color="#fafcfc" weight="thin" />
            </a>
          </li>
          <li className="h-full p-2 duration-300 transition-all hover:bg-black20">
            <a className="cursor-point" href="#about">
              <TextT size={32} color="#fafcfc" weight="thin" />
            </a>
          </li>
          <li className="h-full p-2 duration-300 transition-all hover:bg-black20">
            <a className="cursor-point" href="#contact">
              <ChatCircle size={32} color="#fafcfc" weight="thin" />
            </a>
          </li>
        </ul>
        {/* menu-mobile */}
        <div className="md:hidden lg:hidden">
          {toggleMenu ? (
            <div
              className="absolute right-[-1.2px] top-[20px] z-50 cursor-point"
              onClick={() => setToggleMenu(false)}
            >
              <X size={24} color="#FAFCFC" weight="light" />
            </div>
          ) : (
            <div className="cursor-point" onClick={() => setToggleMenu(true)}>
              <List size={24} color="#FAFCFC" weight="light" />
            </div>
          )}
          {toggleMenu && (
            <div className="bg-ora fixed left-0 top-0 flex h-screen w-screen flex-col justify-center space-y-12 bg-black10 text-center text-white10">
              <ul className="grid gap-16">
                <li className="duration-600 font-text text-5xl font-semibold transition-all hover:text-white">
                  <a onClick={() => setToggleMenu(false)} href="#home">
                    <NavigationArrow size={32} color="#fafcfc" weight="thin" />
                    Home
                  </a>
                </li>
                <li className="duration-600 font-text text-5xl font-semibold transition-all hover:text-white">
                  <a onClick={() => setToggleMenu(false)} href="#projects">
                    <Layout size={32} color="#fafcfc" weight="thin" />
                    Projects
                  </a>
                </li>
                <li className="duration-600 font-text text-5xl font-semibold transition-all hover:text-white">
                  <a onClick={() => setToggleMenu(false)} href="#about">
                    <TextT size={32} color="#fafcfc" weight="thin" />
                    About
                  </a>
                </li>
                <li className="duration-600 font-text text-5xl font-semibold transition-all hover:text-white">
                  <a onClick={() => setToggleMenu(false)} href="#contact">
                    <ChatCircle size={32} color="#fafcfc" weight="thin" />
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
