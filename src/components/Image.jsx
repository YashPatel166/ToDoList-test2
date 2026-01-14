import React, { useState } from 'react';
import './Image.css';

export const Image = ({ src, alt, fallback, className = '', ...props }) => {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  return (
    <div className={`image-wrapper ${className}`}>
      {error && fallback ? (
        <div className="image-fallback">{fallback}</div>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={handleError}
          className="image"
          {...props}
        />
      )}
    </div>
  );
};

export default Image;

