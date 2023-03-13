import React from 'react';
import Card from './Card';
import { projects } from '../constants';

function ProjectModal() {
  return (
    <div class="modal">
      <div className="fixed inset-0 z-50 h-full w-full bg-[#00000060]"></div>
      <div class="border-radius fixed top-auto right-1/2 z-[51] translate-x-1/2 translate-y-1/2 bg-gradient-to-br from-black0 p-[1px]">
        <div className="border-radius h-full w-full bg-black19">
          <div className="border-radius relative h-full w-full overflow-hidden pb-48">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://source.unsplash.com/random/?red-aesthetic&1"
            />
          </div>
          <div className="padding text-white">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
              recusandae?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
