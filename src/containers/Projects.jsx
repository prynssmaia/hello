import React from 'react';
import TitleGradient from '../components/TitleGradient';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <div className="container min-h-screen py-6 md:py-8" id="projects">
      {/* <div className="grid auto-cols-min grid-cols-1 overflow-hidden py-6 md:grid-cols-2"> */}
      <div className="grid auto-cols-fr grid-cols-1 grid-rows-1 gap-4 overflow-hidden md:grid-cols-2">
        <TitleGradient text="Projects" />
        <div className="grid gap-7 md:col-span-2 md:col-start-2 md:gap-10">
          {/* <div className=" grid gap-7 md:gap-10"> */}
          <ProjectCard
            title="Project Red Umbrella I"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
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
  );
}

export default Projects;
