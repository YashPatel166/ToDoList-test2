import React from 'react';
import './Radio.css';

export const Radio = ({ label, name, value, checked, onChange, disabled, className = '' }) => {
  return (
    <label className={`radio-wrapper ${className} ${disabled ? 'disabled' : ''}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="radio-input"
      />
      <span className="radio-label">{label}</span>
    </label>
  );
};

export default Radio;

