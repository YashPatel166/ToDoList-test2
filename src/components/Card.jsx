import React from 'react';
import './Card.css';

export const Card = ({ 
  children, 
  title, 
  footer, 
  image,
  imageAlt,
  actions,
  variant = 'default',
  className = '', 
  ...props 
}) => {
  return (
    <div className={`card card-${variant} ${className}`} {...props}>
      {image && (
        <div className="card-image">
          <img src={image} alt={imageAlt || title || 'Card image'} />
        </div>
      )}
      {title && <div className="card-header">{title}</div>}
      <div className="card-body">{children}</div>
      {actions && <div className="card-actions">{actions}</div>}
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;

