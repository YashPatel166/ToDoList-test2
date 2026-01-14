import React from 'react';
import './Spinner.css';

export const Spinner = ({ 
  size = 'medium', 
  color = 'primary', 
  variant = 'circle',
  className = '',
  text 
}) => {
  return (
    <div className={`spinner-wrapper ${className}`}>
      <div className={`spinner spinner-${size} spinner-${color} spinner-${variant}`}>
        {variant === 'circle' && <div className="spinner-circle"></div>}
        {variant === 'dots' && (
          <>
            <div className="spinner-dot"></div>
            <div className="spinner-dot"></div>
            <div className="spinner-dot"></div>
          </>
        )}
        {variant === 'pulse' && <div className="spinner-pulse"></div>}
      </div>
      {text && <span className="spinner-text">{text}</span>}
    </div>
  );
};

export default Spinner;

