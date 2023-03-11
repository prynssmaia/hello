import React from 'react';
import Card from '../Card';

function CardAbout() {
  return (
    <div className="h-full">
      <Card
        flex="flex-center"
        bgColor="bg-black19"
        height="h-full"
        width="w-full"
        padding="padding"
      >
        <p className="heading4 text-white">About</p>
      </Card>
    </div>
  );
}

export default CardAbout;
