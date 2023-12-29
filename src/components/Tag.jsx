import React from 'react';

function Tag({ children, text }) {
  return (
    <div className="flex-start border-radius padding-tag z-40 w-fit border-[1px] border-solid border-abso-700/10 bg-abso-700/20 text-xs font-medium text-abso-700 md:text-sm xl:text-base">
      {children}
    </div>
  );
}

export default Tag;
