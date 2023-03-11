import React from 'react';
import Card from '../Card';
import { HandWaving } from 'phosphor-react';
import { socialMedia } from '../../constants';

function CardContact() {
  return (
    <div className="h-fit">
      <div className="flex-center-x h-full space-x-6">
        <Card
          flex="flex-grow-x flex items-center md:justify-between group"
          height="h-8 sm:h-12 md:h-16 lg:h-12 xl:h-14"
          width="w-8 sm:w-12 md:w-16 lg:w-12 xl:w-14"
          bgColor="bg-black19"
          padding="px-4 md:px-6 xl:px-8"
        >
          <p className="heading4 hidden text-white md:flex">Say hello.</p>
          <div className="flex-center group-hover:animate-wave">
            <HandWaving className="h-4 w-4 text-white group-hover:text-primary sm:h-6 sm:w-6 lg:h-6 lg:w-6 xl:h-8 xl:w-8" />
          </div>
        </Card>
        <div className="flex items-center space-x-6">
          {socialMedia.map((icons, index) => (
            <a href={`${icons.link}`} target="_blank">
              <Card
                flex="flex-center"
                bgColor="bg-black19 hover:bg-primary transition delay-150 duration-400 ease"
                height="h-8 sm:h-12 lg:h-12 xl:h-14"
                width="w-8 sm:w-12 lg:w-12 xl:w-14"
                cursor="cursor-point"
              >
                <div className="flex-center">
                  <icons.icon className="h-4 w-4 text-white sm:h-6 sm:w-6 lg:h-6 lg:w-6 xl:h-8 xl:w-8" />
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardContact;
