import React from 'react';
import TitleGradient from '../components/TitleGradient';
import Navbar from '../components/Navbar';
import BodyText from '../components/BodyText';
import { InstagramLogo, GithubLogo, LinkedinLogo, CaretDown } from 'phosphor-react';

function Home() {
  return (
    <div className="container flex h-screen flex-col" id="home">
      <Navbar />
      <div className="flex flex-1 flex-col justify-center">
        <TitleGradient text="Prynss Maia" />
        <BodyText text="Losing myself to design and some web projects while listen to music." />
        {/* Socials Section */}
        <ul className="flex w-36 justify-between pt-10 md:w-44 md:pt-14 lg:w-48 lg:pt-20">
          <li className="flex h-7 w-7 transform items-center justify-center rounded-full transition-all duration-700 hover:scale-105 hover:shadow-pink">
            <a href="https://www.instagram.com/prynssmaia/" target="_blank">
              <InstagramLogo
                className="lg:h-10 lg:w-10"
                size={28}
                color="#350207"
                weight="thin"
              />
            </a>
          </li>
          <li className="flex h-7 w-7 transform items-center justify-center rounded-full transition-all duration-700 hover:scale-105 hover:shadow-red">
            <a href="https://github.com/prynssmaia" target="_blank">
              <GithubLogo
                className="lg:h-10 lg:w-10"
                size={28}
                color="#350207"
                weight="thin"
              />
            </a>
          </li>
          <li className="flex h-7 w-7 transform items-center justify-center rounded-full transition-all duration-700 hover:scale-105 hover:shadow-blue">
            <a
              href="https://www.linkedin.com/in/prynss-maia-da-silva-689866241/"
              target="_blank"
            >
              <LinkedinLogo
                className="lg:h-10 lg:w-10"
                size={28}
                color="#350207"
                weight="thin"
              />
            </a>
          </li>
        </ul>
      </div>
      {/* Arrow Down */}
      <div className="flex items-center justify-center pb-5 md:pb-10 lg:pb-12">
        <a href="#projects">
        <CaretDown
          className="transform cursor-pointer transition-all duration-500 hover:scale-105 lg:h-14 lg:w-14"
          size={48}
          color="#350207"
          weight="thin"
        />
        </a>
      </div>
    </div>
  );
}

export default Home;
