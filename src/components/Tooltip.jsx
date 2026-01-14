import React, { useState } from 'react';
import './Tooltip.css';

export const Tooltip = ({ children, text, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`tooltip tooltip-${position}`}>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;

