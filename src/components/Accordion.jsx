import React, { useState } from 'react';
import './Accordion.css';

export const Accordion = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className={`accordion-header ${openIndex === index ? 'active' : ''}`}
            onClick={() => toggleItem(index)}
          >
            <span>{item.title}</span>
            <span className="accordion-icon">{openIndex === index ? '−' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="accordion-content">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

