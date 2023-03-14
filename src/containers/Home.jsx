import React from 'react';
import { socialMedia } from '../constants';
import image from '../../public/assets/selection-area.svg';
import { useState } from 'react';

import {
  BackgroundVideo,
  Navbar,
  Card,
  CardAbout,
  CardContact,
  CardProjects,
  FrameBackground,
  Tag,
  Title,
  TitleGradient,
  LuckyNumber,
  ProjectCard,
  ProjectModal,
  SocialLinks,
} from '../components';

function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  function handleOpenModal() {
    setModalOpen(true);
  }
  function handleCloseModal() {
    setModalOpen(false);
  }

  return (
    <div className="flex h-screen flex-col bg-black20" id="home">
      <Navbar />

      <ProjectModal isOpen={modalOpen} onClose={handleCloseModal}>
        <p>Conteúdo da modal aqui</p>
      </ProjectModal>
      <FrameBackground>
        <div className="z-10 flex h-full flex-col space-y-6">
          <Card
            flex="flex-start md:space-y-4 space-y-2"
            bgColor="bg-black19"
            height="h-48 md:h-56 lg:h-64 xl:h-80"
            padding="padding"
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
              <Tag textColor="text-white10" bgColor="bg-primary">
                UI Designer
              </Tag>
              <Tag
                textColor="text-primary"
                border="border-primary border-solid border-[1px] xl:border-2"
              >
                313 Project
              </Tag>
              <p className="paragraph text-white">@FLN</p>
            </div>
          </Card>
          <div className="flex h-full flex-col space-y-6 sm:flex sm:flex-row sm:space-y-0 sm:space-x-6">
            {/* Section 1 */}
            <div className="flex w-full flex-col space-y-6">
              <CardAbout></CardAbout>
              <CardContact></CardContact>
            </div>
            {/* Section 2 */}
            <div className="h-full w-full text-white" onClick={handleOpenModal}>
              <CardProjects></CardProjects>
            </div>
          </div>
        </div>
      </FrameBackground>
    </div>
  );
}

export default Home;
