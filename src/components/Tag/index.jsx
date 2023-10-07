import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const Tag = ({ text }) => {
  return (
    <div className="tag-container">
      <span className="tag-text">{text}</span>
    </div>
  );
};
Tag.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Tag;
