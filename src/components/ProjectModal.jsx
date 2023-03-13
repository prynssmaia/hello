import React from 'react';
import Card from './Card';
import { projects } from '../constants';

function ProjectModal() {
  return (
    // <div className="absolute z-40 text-white">
    //   <Card flex="flex-center" bgColor="bg-black19" height="h-full" width="w-full">
    //     <div class="padding border-radius relative h-full w-full overflow-hidden pb-48">
    //       <img
    //         className="absolute inset-0 h-full w-full object-cover"
    //         src="https://source.unsplash.com/random/?red-aesthetic&1"
    //       />
    //     </div>
    //     <div className="text-white">lorem ipsum</div>
    //   </Card>
    // </div>
    <div class="modal">
      <div class="modal-overlay"></div>
      <div class="modal-container">
        <div class="modal-header">
          <h2 class="modal-title">Título da modal</h2>
          <button class="modal-close">Fechar</button>
        </div>
        <div class="modal-body">
          <p>Conteúdo da modal aqui</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
