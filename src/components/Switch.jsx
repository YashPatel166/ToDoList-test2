import React from 'react';
import './Switch.css';

export const Switch = ({ checked, onChange, label, disabled, className = '' }) => {
  return (
    <label className={`switch-wrapper ${className} ${disabled ? 'disabled' : ''}`}>
      <input
        type="checkbox"
        className="switch-input"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="switch-slider"></span>
      {label && <span className="switch-label">{label}</span>}
    </label>
  );
};

export default Switch;

