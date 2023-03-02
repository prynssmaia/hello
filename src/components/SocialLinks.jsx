import React from 'react';
import { InstagramLogo, GithubLogo, LinkedinLogo } from 'phosphor-react';

function SocialLinks() {
  return (
    <div className="flex h-32 w-80 items-center">
      <div className="flex w-full justify-between">
        <div>
          <a
            className="cursor-point"
            href="https://www.instagram.com/prynssmaia/"
            target="_blank"
          >
            <li className="absolute flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#171717] bg-[#DB438A] transition duration-200 hover:-translate-y-1 hover:-translate-x-1">
              <InstagramLogo size={32} color="#171717" />
            </li>
          </a>
          <div className="h-16 w-16 rounded-full bg-white"></div>
        </div>

        <div>
          <a
            className="cursor-point"
            href="https://github.com/prynssmaia"
            target="_blank"
          >
            <li className="absolute flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#171717] bg-[#12BF4F] transition duration-200 hover:-translate-y-1 hover:-translate-x-1">
              <GithubLogo size={32} color="#171717" />
            </li>
            <div className="h-16 w-16 rounded-full bg-white"></div>
          </a>
        </div>

        <div>
          <a
            className="cursor-point"
            href="https://www.linkedin.com/in/prynss-maia-da-silva-689866241/"
            target="_blank"
          >
            <li className="absolute flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#171717] bg-[#0F7BFF] transition duration-200 hover:-translate-y-1 hover:-translate-x-1">
              <LinkedinLogo size={32} color="#171717" />
            </li>
            <div className="h-16 w-16 rounded-full bg-white"></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialLinks;
