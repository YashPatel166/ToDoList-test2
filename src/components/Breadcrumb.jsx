import React from 'react';
import './Breadcrumb.css';

export const Breadcrumb = ({ items = [] }) => {
  return (
    <nav className="breadcrumb">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="breadcrumb-separator">/</span>}
          {index === items.length - 1 ? (
            <span className="breadcrumb-item active">{item.label}</span>
          ) : (
            <a href={item.href} className="breadcrumb-item">
              {item.label}
            </a>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;

