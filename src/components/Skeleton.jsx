import React from 'react';
import './Skeleton.css';

export const Skeleton = ({ width, height, variant = 'rectangular', className = '' }) => {
  const style = {
    width: width || '100%',
    height: height || '1rem',
  };

  return (
    <div
      className={`skeleton skeleton-${variant} ${className}`}
      style={style}
    />
  );
};

export default Skeleton;

