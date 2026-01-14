import React from 'react';
import './Avatar.css';

export const Avatar = ({ src, alt, name, size = 'medium', className = '' }) => {
  const initials = name
    ? name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : '';

  return (
    <div className={`avatar avatar-${size} ${className}`}>
      {src ? (
        <img src={src} alt={alt || name} />
      ) : (
        <div className="avatar-initials">{initials}</div>
      )}
    </div>
  );
};

export default Avatar;

