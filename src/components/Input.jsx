import React, { useState } from 'react';
import './Input.css';

export const Input = ({ 
  label, 
  error, 
  helperText, 
  icon,
  iconPosition = 'left',
  onClear,
  showClearButton = false,
  className = '', 
  ...props 
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`input-group ${className}`}>
      {label && <label className="input-label">{label}</label>}
      <div className={`input-wrapper ${isFocused ? 'input-focused' : ''} ${error ? 'input-error-wrapper' : ''}`}>
        {icon && iconPosition === 'left' && (
          <span className="input-icon input-icon-left">{icon}</span>
        )}
        <input 
          className={`input-field ${error ? 'input-error' : ''}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props} 
        />
        {icon && iconPosition === 'right' && (
          <span className="input-icon input-icon-right">{icon}</span>
        )}
        {showClearButton && props.value && (
          <button 
            className="input-clear" 
            onClick={onClear}
            type="button"
            aria-label="Clear input"
          >
            ×
          </button>
        )}
      </div>
      {error && <span className="input-error-text">{error}</span>}
      {helperText && !error && <span className="input-helper">{helperText}</span>}
    </div>
  );
};

export default Input;

