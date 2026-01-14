import React from 'react';
import './Spinner.css';

export const Spinner = ({ size = 'medium', color = 'primary', className = '' }) => {
  return (
    <div className={`spinner spinner-${size} spinner-${color} ${className}`}>
      <div className="spinner-circle"></div>
    </div>
  );
};

export default Spinner;

