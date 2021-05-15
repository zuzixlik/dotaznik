import React, { useState } from 'react';
import QuestionBody from '../QuestionBody/index';
import Option from '../Option/index';
import './style.css';

const Question = (props) => {
  const [answered, setAnswered] = useState(false);
  const handleSelect = () => {
    setAnswered(true);
  };

  return (
    <div className="question">
      <QuestionBody
        iconType={answered ? 'symbolTick' : 'symbolQuestion'}
        text="Kdo jinému jámu kopá, sám do ní padá"
      />
      <div className="question__options">
        <Option
          onSelected={handleSelect}
          type="smileyStrongYes"
          text="Souhlasím"
        />
        <Option
          onSelected={handleSelect}
          type="smileyYes"
          text="Spíše souhlasím"
        />
        <Option onSelected={handleSelect} type="smileyNeutral" text="Nevím" />
        <Option
          onSelected={handleSelect}
          type="smileyNo"
          text="Spíše nesouhlasím"
        />
        <Option
          onSelected={handleSelect}
          type="smileyStrongNo"
          text="Nesouhlasím"
        />
      </div>
    </div>
  );
};

export default Question;
