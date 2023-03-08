import React, { useState } from 'react';
import styles from '../style';
import { navIcons, navLinks } from '../constants';
import { List, UserCircle, X } from 'phosphor-react';
import { Profile, Divider } from '../components';

function Navbar() {
  const [active, setActive] = useState('home');
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-black0 bg-black10">
      <nav className={`${styles.containerHeader}`}>
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
        {/* file name */}
        <div className="hidden space-x-1 font-text md:flex md:items-center md:justify-center">
          <UserCircle size={32} color="#B6B6B6" weight="thin" />
          <p className="text-white">
            <span className="text-[#B6B6B6]">Draft / </span>
            Personal Portfolio
          </p>
        </div>
        {/* menu-desktop */}
        <ul className="hidden h-full md:flex md:items-center md:justify-center">
          {navIcons.map((ico, index) => (
            <li
              key={ico.ref}
              className={`flex h-full cursor-point items-center p-2 transition delay-150 duration-200 ease-in-out hover:bg-black11 ${
                active === ico.ref ? 'bg-primary' : 'bg-black10'
              }`}
              onClick={() => setActive(ico.ref)}
            >
              <a href={`#${ico.ref}`}>
                <ico.icon size={32} color="#fafcfc" weight="thin" />
              </a>
            </li>
          ))}
        </ul>

        {/* menu-mobile */}
        <div className="md:hidden lg:hidden xl:hidden">
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
        </div>

        <div
          className={`${
            !toggleMenu ? 'hidden' : 'flex'
          } sidenav fixed right-0 top-0 h-screen w-screen flex-col justify-start bg-black10 text-white10`}
        >
          <div className="container-canva z-50 overflow-y-auto">
            <Profile />
            <Divider />
            <ul>
              {navLinks.map((nav, index) => (
                <li className="cursor-point py-4 text-xl font-semibold transition delay-150 duration-300 ease-in-out hover:bg-primary hover:text-white">
                  <a
                    className="flex content-center items-center"
                    onClick={() => setToggleMenu(false)}
                    href={`#${nav.id}`}
                  >
                    <nav.icon className="mr-6" size={24} color="#fafcfc" weight="thin" />
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
            <Divider />
            <div className="flex items-center justify-center text-xs opacity-60">
              <p className="mr-2">Designed & Developed by</p>
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
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
