import React from 'react';

function ProjectCard({ title, description }) {
  return (
    <div className='grid relative group'>
      {/* card content */}
      <div >
        <div className='absolute group-hover:-inset-0.5 group-hover:bg-hero group-hover:blur-md group-hover:opacity-40'></div>
        {/* background image */}
        <div className='relative'>
              <img src="https://images.unsplash.com/photo-1514830902516-48e20ae0ced9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"/>
        </div>
        {/* project info */}
        <div className='grid gap-4 font-text pt-10 p-4 text-white bg-blk absolute bottom-0 w-full opacity-0 group-hover:opacity-100 transition duration-700 group-hover:duration-200'>
          {/* titulo */}
          <h3 className='font-bold text-xl lg:text-2xl'>{title}</h3>
          {/* text */}
          <p className='min-w-full text-sm lg:text-base'>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
