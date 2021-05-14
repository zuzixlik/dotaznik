import React from 'react';
import Smiley from '../Smiley/index';
import './style.css';

const Option = ({ type, text }) => (
  <div className="option">
    <Smiley type={type} />
    <div>{text}</div>
  </div>
);

export default Option;