import React from 'react';
import Navbar from '../components/Navbar';
import TitleGradient from '../components/TitleGradient';
import ProjectCard from '../components/ProjectCard';

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
            <ProjectCard
              title="Project Red Umbrella II"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sequi laborum veritatis."
            />
            <ProjectCard
              title="Project Red Umbrella III"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, cum exercitationem. Et, suscipit!"
            />
            {/* <div className="">
              <img src="https://images.unsplash.com/photo-1514830902516-48e20ae0ced9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" />
            </div>
            <div className="">
              <img src="https://images.unsplash.com/photo-1518834984017-faefb4572688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
            </div>
            <div className="">
              <img src="https://images.unsplash.com/photo-1612170482263-b7e393c4e87f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
