import React from 'react';

function ProjectCard({ title, description }) {
  return (
    <div className="group relative grid w-full cursor-pointer rounded">
      {/* background image */}
      <div className="rounded">
        <img
          className="h-60 w-full rounded object-cover"
          src="https://images.unsplash.com/photo-1514830902516-48e20ae0ced9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
        />
      </div>
      {/* project info */}
      <div className="absolute bottom-0 grid w-full justify-start gap-4 rounded-b bg-blk p-4 pt-10 font-text text-white opacity-100 transition duration-700 group-hover:opacity-100 group-hover:duration-200 md:opacity-0">
        {/* titulo */}
        <h3 className="text-xl font-bold lg:text-2xl">{title}</h3>
        {/* text */}
        <p className="min-w-full text-sm lg:text-base">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
