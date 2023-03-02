import React from 'react';

function LuckyNumber() {
  return (
    <div className="group flex h-32 w-80 flex-col justify-between bg-lightbackground p-2">
      <h3 className="font-number text-8xl font-bold">
        <span className="text-darkheadline opacity-100 shadow-highlight transition duration-200 group-hover:drop-shadow-white">
          313
        </span>
      </h3>
      <p className="hidden font-number text-sm  group-hover:flex group-hover:justify-end group-hover:text-darkheadline">
        • my-lucky-number
      </p>
    </div>
  );
}

export default LuckyNumber;
