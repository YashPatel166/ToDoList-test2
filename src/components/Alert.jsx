import React from 'react';
import './Alert.css';

export const Alert = ({ children, variant = 'info', onClose, className = '' }) => {
  return (
    <div className={`alert alert-${variant} ${className}`}>
      <div className="alert-content">{children}</div>
      {onClose && (
        <button className="alert-close" onClick={onClose}>×</button>
      )}
    </div>
  );
};

export default Alert;

