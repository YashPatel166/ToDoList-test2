import React from 'react';
import './Divider.css';

export const Divider = ({ text, orientation = 'horizontal', className = '' }) => {
  if (orientation === 'vertical') {
    return <div className={`divider divider-vertical ${className}`} />;
  }

  return (
    <div className={`divider divider-horizontal ${className}`}>
      {text && <span className="divider-text">{text}</span>}
    </div>
  );
};

export default Divider;

