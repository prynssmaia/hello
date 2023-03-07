import React from 'react';

function Tag({ children, textColor, bgColor, text }) {
  return (
    <div
      className={`${textColor} ${bgColor} flex-start border-radius padding-tag z-40 w-fit text-xs font-medium md:text-sm xl:text-base`}
    >
      {text}
    </div>
  );
}

export default Tag;
