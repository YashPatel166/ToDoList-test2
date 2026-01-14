import React from 'react';
import './Textarea.css';

export const Textarea = ({ label, error, helperText, rows = 4, className = '', ...props }) => {
  return (
    <div className={`textarea-group ${className}`}>
      {label && <label className="textarea-label">{label}</label>}
      <textarea
        className={`textarea-field ${error ? 'textarea-error' : ''}`}
        rows={rows}
        {...props}
      />
      {error && <span className="textarea-error-text">{error}</span>}
      {helperText && !error && <span className="textarea-helper">{helperText}</span>}
    </div>
  );
};

export default Textarea;

