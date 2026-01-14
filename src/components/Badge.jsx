import React from 'react';
import './Badge.css';

export const Badge = ({ children, variant = 'primary', size = 'medium', className = '' }) => {
  return (
    <span className={`badge badge-${variant} badge-${size} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;

