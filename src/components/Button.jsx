import React from 'react';

function Button({ children }) {
  return (
    <div className="flex-start border-radius padding-button transition-basic w-fit cursor-point bg-abso-700 text-xs font-medium text-white hover:bg-abso-600 md:text-sm xl:text-base">
      {children}
    </div>
  );
}

export default Button;
