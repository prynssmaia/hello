import React from 'react';
import Card from '../Card';
import { projects } from '../../constants';
import Tag from '../Tag';

function CardProjects() {
  return (
    <div className="group flex h-full w-full space-x-6">
      {projects.map((proj) => (
        <Card flex="flex-center" bgColor="bg-black19" height="h-full" width="w-full">
          <div class="border-radius relative h-full w-full overflow-hidden pb-48">
            <img
              className="transition-basic absolute inset-0 h-full w-full transform object-cover group-hover:scale-125 group-hover:opacity-50"
              src={`${proj.image}`}
              alt={`${proj.id}`}
            />
          </div>
          <div className="flex-center transition-basic absolute w-[200px] bg-black19 text-white opacity-0 group-hover:opacity-100">
            <div className="heading4">{`${proj.title}`}</div>
            <div className="paragraph">{`${proj.description}`}</div>
            <Tag textColor="text-white10" bgColor="bg-primary" text="Saiba mais"></Tag>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default CardProjects;
