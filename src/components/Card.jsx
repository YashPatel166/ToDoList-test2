import React from 'react';
import './Card.css';

export const Card = ({ children, title, footer, className = '', ...props }) => {
  return (
    <div className={`card ${className}`} {...props}>
      {title && <div className="card-header">{title}</div>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;

