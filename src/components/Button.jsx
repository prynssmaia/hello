import React from 'react';

function Button({ children }) {
  return (
    <div className="flex-start border-radius padding-button transition-basic w-fit cursor-point bg-primary text-xs font-medium text-white hover:bg-[#D90232] hover:shadow-md hover:shadow-primary/50 md:text-sm xl:text-base">
      {children}
    </div>
  );
}

export default Button;
