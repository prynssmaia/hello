import React from 'react';
import Navbar from '../components/Navbar';
import TitleGradient from '../components/TitleGradient';
import ProjectCard from '../components/ProjectCard';
import { InstagramLogo, GithubLogo, LinkedinLogo } from 'phosphor-react';

function Home() {
  return (
    <div className="flex h-screen flex-col bg-[#202020]" id="home">
      <Navbar />
      <div className="container-canva h-full w-full bg-[#245633] p-4">
        <div className="grid auto-cols-fr grid-cols-1 grid-rows-1 gap-4 overflow-hidden md:grid-cols-2">
          <TitleGradient text="Welcome" />
          <div className="grid gap-7 md:col-span-2 md:col-start-2 md:gap-10">
            {/* <div className=" grid gap-7 md:gap-10"> */}

            {/* card lucky number */}
            <div className="group flex h-32 w-80 flex-col justify-between rounded bg-[#FFD171] p-2">
              <h3 className="font-number text-8xl font-bold">
                <span className="text-black opacity-100 shadow-black transition duration-200 group-hover:drop-shadow-white">
                  313
                </span>
              </h3>
              <p className="hidden font-number text-sm  group-hover:flex group-hover:justify-end group-hover:text-[#245633]">
                • my-lucky-number
              </p>
            </div>

            {/* social links */}
            <div className="flex items-center h-32 w-80 rounded bg-[#F86631] py-4 px-8">
              <ul className='flex justify-between w-full'>
                <div>
                  <a className="cursor-point" href="https://www.instagram.com/prynssmaia/" target='_blank'>
                    <li className='absolute flex items-center justify-center transition duration-200 hover:-translate-y-1 hover:-translate-x-1 h-16 w-16 rounded-full border-2 border-[#171717] bg-[#DB438A]'>
                        <InstagramLogo size={32} color="#171717" />
                    </li>
                  </a>
                  <div className='h-16 w-16 bg-white rounded-full'></div>
                </div>

                <div>
                <a className="cursor-point" href="https://github.com/prynssmaia" target='_blank'>
                  <li className='absolute flex items-center justify-center transition duration-200 hover:-translate-y-1 hover:-translate-x-1 h-16 w-16 rounded-full border-2 border-[#171717] bg-[#12BF4F]'>
                    <GithubLogo size={32} color="#171717" />
                  </li>
                  <div className='h-16 w-16 bg-white rounded-full'></div>
                </a>
                </div>
                

                <div>
                <a className="cursor-point" href="https://www.linkedin.com/in/prynss-maia-da-silva-689866241/" target='_blank'>
                  <li className='absolute flex items-center justify-center transition duration-200 hover:-translate-y-1 hover:-translate-x-1 h-16 w-16 rounded-full border-2 border-[#171717] bg-[#0F7BFF]'>
                    <LinkedinLogo size={32} color="#171717" />
                  </li>
                  <div className='h-16 w-16 bg-white rounded-full'></div>
                </a>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
