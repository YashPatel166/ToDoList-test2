import React from 'react';
import './Checkbox.css';

export const Checkbox = ({ label, checked, onChange, disabled, className = '', ...props }) => {
  return (
    <label className={`checkbox-wrapper ${className} ${disabled ? 'disabled' : ''}`}>
      <input
        type="checkbox"
        className="checkbox-input"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      <span className="checkbox-label">{label}</span>
    </label>
  );
};

export default Checkbox;

