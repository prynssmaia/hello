import React from 'react';

function Tag({ children, textColor, bgColor, text, border }) {
  return (
    <div
      className={`${textColor} ${bgColor} ${border} flex-start border-radius padding-tag z-40 w-fit text-xs font-medium md:text-sm xl:text-base`}
    >
      {children}
    </div>
  );
}

export default Tag;
