import React from 'react';
import './ProgressBar.css';

export const ProgressBar = ({ value, max = 100, showLabel = true, variant = 'primary', className = '' }) => {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className={`progress-bar-wrapper ${className}`}>
      {showLabel && (
        <div className="progress-label">
          <span>{value}%</span>
        </div>
      )}
      <div className="progress-bar">
        <div
          className={`progress-fill progress-${variant}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;

