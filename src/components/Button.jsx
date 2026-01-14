import React from 'react';
import './Button.css';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  disabled, 
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '', 
  ...props 
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full-width' : ''} ${loading ? 'btn-loading' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <span className="btn-spinner"></span>
          <span className="btn-text">{children}</span>
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="btn-icon btn-icon-left">{icon}</span>}
          <span className="btn-text">{children}</span>
          {icon && iconPosition === 'right' && <span className="btn-icon btn-icon-right">{icon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;

