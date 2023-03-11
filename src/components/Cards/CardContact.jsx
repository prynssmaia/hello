import React from 'react';
import Card from '../Card';
import { socialMedia } from '../../constants';

function CardContact() {
  return (
    <div className="h-fit">
      <div className="flex-center-x h-full space-x-6">
        <Card flex="flex-grow-x h-20 w-20" bgColor="bg-black19">
          <p className="heading4 text-white">Say hello</p>
        </Card>
        <div className="flex items-center space-x-6">
          {socialMedia.map((icons, index) => (
            <Card
              flex="flex-center"
              bgColor="bg-black19 hover:bg-primary transition delay-150 duration-400 ease"
              height="h-20"
              width="w-20"
              cursor="cursor-point"
            >
              <a href={`${icons.link}`} target="_blank">
                <icons.icon size={32} color="#fafcfc" />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardContact;
