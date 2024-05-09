// import React, { useState } from 'react';

// Button component
const Button = ({ onClick, variant, children }) => {
  const buttonClasses = `px-4 py-2 ${variant === 'big' ? 'text-lg' : 'text-sm'} bg-blue-500 text-white rounded-md`;
  
  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};