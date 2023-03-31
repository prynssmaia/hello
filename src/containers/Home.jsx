import React from 'react';
import { useState } from 'react';
import FrameBackground from '../containers/FrameBackground';
import {
  Navbar,
  CardAbout,
  CardContact,
  CardPresentation,
  CardProjects,
  ProjectModal,
} from '../components';

function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState();

  function handleOpenModal() {
    setModalOpen(true);
  }
  function handleCloseModal() {
    setModalOpen(false);
  }

  return (
    <div className="flex h-screen flex-col bg-black20" id="home">
      <Navbar />

      <ProjectModal
        selectedProject={selectedProject}
        isOpen={modalOpen}
        onClose={handleCloseModal}
      >
        <p>Conteúdo da modal aqui</p>
      </ProjectModal>
      <FrameBackground>
        <div className="z-10 flex h-full flex-col space-y-6">
          <CardPresentation />
          <div className="flex h-full flex-col space-y-6 sm:flex sm:flex-row sm:space-y-0 sm:space-x-6">
            {/* Section 1 */}
            <div className="flex w-full flex-col space-y-6">
              <CardAbout></CardAbout>
              <CardContact></CardContact>
            </div>
            {/* Section 2 */}
            <div className="h-full w-full text-white">
              <CardProjects
                onClick={(proj) => {
                  console.log(proj);
                  setSelectedProject(proj);
                  handleOpenModal();
                }}
              />
            </div>
          </div>
        </div>
      </FrameBackground>
    </div>
  );
}

export default Home;
