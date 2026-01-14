import React from 'react';
import './Button.css';

export const Button = ({ children, variant = 'primary', size = 'medium', onClick, disabled, className = '', ...props }) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

