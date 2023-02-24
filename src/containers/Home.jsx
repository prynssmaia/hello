import React from 'react';
import Navbar from '../components/Navbar';
import TitleGradient from '../components/TitleGradient';
import BackgroundVideo from '../components/BackgroundVideo';
import { InstagramLogo, GithubLogo, LinkedinLogo } from 'phosphor-react';

function Home() {
  return (
    <div className="flex h-screen flex-col bg-[#202020]" id="home">
      <Navbar />
      <div className="container-canva relative grid h-full w-full gap-4 bg-[#004643] p-4">
        <div className="grid grid-flow-col grid-rows-4 gap-4 text-center">
          <div className="row-span-2 grid content-center rounded border-2 border-[#001E1D] bg-[#ABD1C6] ">
            01 - HELLO
          </div>
          <div className="row-span-2 grid content-center rounded border-2 border-[#001E1D] bg-[#ABD1C6] ">
            02 - PRYNSS
          </div>
          <div className="col-span-3 row-span-4 grid content-center rounded border-2 border-[#001E1D] bg-[#ABD1C6]">
            03 - PROJECTS
          </div>
        </div>
        <div className="grid grid-flow-col grid-rows-4 gap-4 text-center">
          <div className="col-span-2 row-span-1 grid content-center rounded border-2 border-[#001E1D] bg-[#ABD1C6]">
            04
          </div>
          <div className="col-span-2 row-span-3 grid content-center rounded border-2 border-[#001E1D] bg-[#ABD1C6]">
            05
          </div>
          <div className="col-span-2 row-span-2 grid content-center rounded border-2 border-[#001E1D] bg-[#ABD1C6]">
            06
          </div>
          <div className="col-span-2 row-span-2 grid content-center rounded border-2 border-[#001E1D] bg-[#ABD1C6]">
            07
          </div>
          <div className="col-span-2 row-span-3 grid content-center rounded border-2 border-[#001E1D] bg-[#ABD1C6]">
            08
          </div>
          <div className="col-span-2 row-span-1 grid content-center rounded border-2 border-[#001E1D] bg-[#ABD1C6]">
            09
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
