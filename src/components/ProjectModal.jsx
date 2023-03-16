import React from 'react';
import { X } from 'phosphor-react';
import { projects } from '../constants';

function ProjectModal({ isOpen, onClose, children }) {
  return (
    <div className={`${!isOpen ? 'hidden' : 'flex'}`}>
      <div
        className="fixed inset-0 z-50 h-full w-full bg-[#00000060]"
        onClick={onClose}
      ></div>
      <div className="border-radius fixed top-auto right-1/2 z-[51] translate-x-1/2 translate-y-1/2 bg-gradient-to-br from-black0 p-[1px]">
        <div className="border-radius h-full w-full bg-black19">
          <div className="relative h-full w-full overflow-hidden rounded-t-md pb-48 md:rounded-t-lg xl:rounded-t-[10px]">
            <button
              className="transition-basic border-radius group absolute right-2 top-2 z-10 bg-black20 p-1 hover:bg-black11"
              onClick={onClose}
            >
              <X
                className="h-4 w-4 text-white group-hover:text-white10"
                color="#fafcfc"
              />
            </button>
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
