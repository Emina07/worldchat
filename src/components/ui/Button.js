// src/components/ui/Button.js
import React from 'react';

export const Button = ({ children, variant = 'primary', ...props }) => {
  const baseStyles = 'px-4 py-2 rounded text-white font-semibold transition duration-300';

  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-500',
    outline: 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    secondary: 'bg-green-600 hover:bg-green-500',
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`} {...props}>
      {children}
    </button>
  );
};
