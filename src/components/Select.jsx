import React from 'react';
import './Select.css';

export const Select = ({ label, options = [], error, helperText, className = '', ...props }) => {
  return (
    <div className={`select-group ${className}`}>
      {label && <label className="select-label">{label}</label>}
      <select className={`select-field ${error ? 'select-error' : ''}`} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="select-error-text">{error}</span>}
      {helperText && !error && <span className="select-helper">{helperText}</span>}
    </div>
  );
};

export default Select;

