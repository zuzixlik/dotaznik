import React from 'react';
import Option from '../Option/index';
import './style.css';

const Question = ({ text }) => (
  <div className="question">
    <p className="question__text">
      {text}
    </p>
    <div className="question__answer">
      Zodpovězeno
    </div>
    <div className="question__options">
      <Option type="strongYes" text="Souhlasím"/>
      <Option type="yes" text="Spíše souhlasím"/>
      <Option type="neutral" text="Nevím"/>
      <Option type="no" text="Spíše nesouhlasím"/>
      <Option type="strongNo" text="Nesouhlasím"/>
    </div>
    
  </div>
);

export default Question;