import React from 'react';
import styles from '../style';

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
        <Card className="" height="h-80">
          <div className="flex flex-row items-center justify-center space-x-2">
            <div className="h-[6px] w-[6px] animate-pulse rounded-full bg-primary opacity-80"></div>
            <p className="text-black0">Welcome to my Figma file</p>
          </div>
          <Title text="Prynss Maia" color="text-white"></Title>
          <div className="flex space-x-4">
            <Tag textColor="text-white10" bgColor="bg-primary" text="UI Designer"></Tag>
            <Tag textColor="text-white10" bgColor="bg-primary" text="Lorem Ipsum"></Tag>
          </div>
        </Card>
        {/* <Card height="">
          <ProjectCard
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, illum!"
          />
        </Card> */}
      </FrameBackground>
    </div>
  );
}

export default Home;
