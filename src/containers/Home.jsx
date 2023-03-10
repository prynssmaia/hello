import React from 'react';
import { socialMedia } from '../constants';
import image from '../../public/assets/selection-area.svg';

import {
  BackgroundVideo,
  Navbar,
  Card,
  FrameBackground,
  Tag,
  Title,
  TitleGradient,
  LuckyNumber,
  ProjectCard,
  SocialLinks,
} from '../components';

function Home() {
  return (
    <div className="flex h-screen flex-col bg-black20" id="home">
      <Navbar />
      <FrameBackground>
        <Card
          flex="flex-start"
          bgColor="bg-black19"
          height="h-48 md:h-56 lg:h-64 xl:h-80"
        >
          <div className="flex flex-row items-center justify-center space-x-2">
            <div className="h-[6px] w-[6px] animate-pulse rounded-full bg-primary opacity-80"></div>
            <p className="paragraph text-black0">Welcome to my Figma file</p>
          </div>
          <div className="flex flex-row items-center space-x-2 md:space-x-4 lg:space-x-6">
            <Title text="Prynss Maia" color="text-white"></Title>
            <div className="h-1 w-10 rounded-[1px] bg-white md:h-[6px] md:w-28 md:rounded-sm lg:h-2.5 lg:w-48 xl:h-3 xl:w-52 xl:rounded-sm xs:hidden ss:flex"></div>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <Tag textColor="text-white10" bgColor="bg-primary" text="UI Designer"></Tag>
            <Tag
              textColor="text-primary"
              border="border-primary border-solid border-[1px] xl:border-2"
              text="313 Project"
            ></Tag>
            <p className="paragraph text-white">@FLN</p>
          </div>
        </Card>

        {/* Coluna 1*/}
        <div className="z-10">
          {/* <Card flex="flex-center" bgColor="bg-black19" height="h-[504px]">
            <p className="heading4 text-white">Sobre</p>
          </Card> */}
          <div className="flex items-center space-x-6">
            {/* <Card
              flex="flex-center"
              bgColor="bg-black19"
              height="h-16"
              width="flex-1"
            >
              <p className="heading4 text-white">hi</p>
            </Card> */}
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
      </FrameBackground>
    </div>
  );
}

export default Home;
