import React from 'react';

function ProjectCard({ title, description }) {
  return (
    <div className="border-radius group relative w-full  cursor-point">
      {/* background image */}
      <div>
        <img
          className="border-radius h-60 w-full object-cover"
          src="https://images.unsplash.com/photo-1514830902516-48e20ae0ced9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
        />
      </div>
      {/* project info */}
      <div className="border-radius absolute bottom-0 flex w-full flex-col items-start bg-blk px-4 pt-10 pb-4 font-text text-white opacity-100 transition duration-700 group-hover:opacity-100 group-hover:duration-200 md:opacity-0">
        {/* titulo */}
        <h3 className="text-xl font-bold lg:text-2xl">{title}</h3>
        {/* text */}
        <p className="text-sm lg:text-base">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
