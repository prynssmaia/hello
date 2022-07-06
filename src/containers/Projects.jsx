import React from 'react';
import TitleGradient from '../components/TitleGradient'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
    <div className="container min-h-screen" id="projects">
      <div className='grid grid-cols-1 md:grid-cols-2 py-6'>

        <TitleGradient text="Projects"/>
        <div className='grid gap-7 md:gap-10'>
          <ProjectCard title='Project Red Umbrella I' description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'/>
          <div className=''>
            <img src="https://images.unsplash.com/photo-1514830902516-48e20ae0ced9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"/>
          </div>
          <div className=''>
            <img src="https://images.unsplash.com/photo-1518834984017-faefb4572688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"/>
          </div>
          <div className=''>
            <img src="https://images.unsplash.com/photo-1612170482263-b7e393c4e87f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
