import React, { useState, onClick } from 'react';
import Icon from '../Icon/index';
import './style.css';

const Option = (props) => (
  <div
    onClick={() => {
      console.log(props.text);
      props.onSelected();
    }}
    className="option"
  >
    <Icon type={props.type} />
    <div>{props.text}</div>
  </div>
);

export default Option;
