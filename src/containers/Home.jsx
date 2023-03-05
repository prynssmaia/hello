import React from 'react';
import styles from '../style';

import {
  BackgroundVideo,
  Navbar,
  Card,
  FrameBackground,
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
        <Card height="h-36">
          <Title text="Welcome to my Figma file" color="text-white"></Title>
        </Card>
        <Card height="">
          <ProjectCard
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, illum!"
          />
        </Card>
      </FrameBackground>
    </div>
  );
}

export default Home;
