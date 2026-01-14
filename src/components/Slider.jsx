import React from 'react';
import './Slider.css';

export const Slider = ({ value, min = 0, max = 100, onChange, step = 1, className = '' }) => {
  return (
    <div className={`slider-wrapper ${className}`}>
      <input
        type="range"
        className="slider"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        step={step}
      />
      <div className="slider-value">{value}</div>
    </div>
  );
};

export default Slider;

