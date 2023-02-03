import React, { useState } from 'react';
import { questions } from '@/data/DecisionTreeQuestions'

type Option = {
    id: string;
    value: string;
    followUpQuestion: number;
}

type Question = {
    id: number;
    question: string;
    options: Array<Option>;
}

export default function DecisionTree() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleOptionClick = (option: Option) => {
    setCurrentQuestionIndex(option.followUpQuestion);
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="decision-tree-wrapper">
      <div className='decision-tree-title'>
        <h2>
            Find the right recycling service for your item here!
        </h2>
      </div>  
      <div className='decision-tree'>
        <h3>{currentQuestion.question}</h3>
        <div>
        {currentQuestion.options.map((option) => (
            <button className="decision-tree-option" key={option.id} onClick={() => handleOptionClick(option)}>
                {option.value}
            </button>
        ))}
        </div>
        <button onClick={handleReset}>Restart</button>
      </div>  
    </div>
  );
}
