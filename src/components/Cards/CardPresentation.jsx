import React from 'react';
import { Card, Tag, Title } from '../../components';

function CardPresentation() {
  return (
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
        <Tag>UI Designer</Tag>
        <Tag>313 Project</Tag>
        <p className="paragraph text-white">@FLN</p>
      </div>
    </Card>
  );
}

export default CardPresentation;
