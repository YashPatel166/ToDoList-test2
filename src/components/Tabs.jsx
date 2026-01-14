import React, { useState } from 'react';
import './Tabs.css';

export const Tabs = ({ children, defaultTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const tabs = React.Children.toArray(children);

  return (
    <div className="tabs">
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {tabs[activeTab]}
      </div>
    </div>
  );
};

export const Tab = ({ children }) => {
  return <div className="tab-panel">{children}</div>;
};

export default Tabs;

