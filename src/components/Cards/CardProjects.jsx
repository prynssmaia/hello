import React from 'react';
import Card from '../Card';
import { projects } from '../../constants';
import { Button } from '../../components';

function CardProjects() {
  return (
    <a className="group flex h-full w-full space-x-6">
      {projects.map((proj) => (
        <Card flex="flex-center" bgColor="bg-black19" height="h-full" width="w-full">
          <div class="padding border-radius relative h-full w-full overflow-hidden">
            <img
              className="transition-basic absolute inset-0 h-full w-full transform object-cover group-hover:scale-125 group-hover:opacity-50"
              src={`${proj.image}`}
              alt={`${proj.id}`}
            />
          </div>
          <div className="border-radius flex-center transition-basic absolute space-y-2 bg-black19 py-4 text-white opacity-0  group-hover:opacity-100 lg:w-[228px] xl:w-[274px]">
            <div className="heading4">{`${proj.title}`}</div>
            <div className="paragraph">{`${proj.description}`}</div>
            <Button>Conheça o projeto</Button>
          </div>
        </Card>
      ))}
    </a>
  );
}

export default CardProjects;
