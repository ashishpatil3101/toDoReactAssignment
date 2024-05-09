// import React, { useState } from 'react';


const Button = ({ onClick, variant, children }) => {
    const buttonClasses = `px-4 py-2 ${variant === 'big' ? 'text-lg' : 'text-sm'} bg-green-500 text-white rounded-md`;
  
  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;