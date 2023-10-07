import React from 'react';
import './index.scss';

const Tag = ({ text }) => {
  return (
    <div className="tag-container">
      <span className="tag-text">{text}</span>
    </div>
  );
};

export default Tag;
