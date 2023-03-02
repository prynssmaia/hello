import React from 'react';
import styles from '../style';

import {
  BackgroundVideo,
  Navbar,
  Card,
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
      <div
        className={`container-canva flex h-screen flex-col justify-between bg-green20 ${styles.padding}`}
      >
        <Card height="h-1/4">
          <BackgroundVideo className="my-4" />
        </Card>
        <Card height="h-1/4">
          <Title text="Prynss" color="bg-yellow30" className="my-4" />
        </Card>
        <ProjectCard
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, illum!"
        />
      </div>
    </div>
  );
}

export default Home;
