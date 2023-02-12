import React, {useState} from 'react';
import {quizQuestions} from '@/data/Quiz'

export type Option = {
  answer: string;
  correct: boolean;
}

export default function Question() {
  // Choose at random question from the list of quiz questions
  const randQuestionIndex = Math.floor(Math.random() * quizQuestions.length);
  const currentQuestion = quizQuestions[randQuestionIndex];
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswerClick = (selectedOption: Option) => {
    setIsAnswered(true)
    setIsCorrect(selectedOption.correct);
  };
  
  const style = {
    color: "white",
    backgroundColor: isAnswered === true && isCorrect === true ? "green" : isAnswered === true && isCorrect === false ? "red" : "",
    padding: "10px 20px",
    borderRadius: "5px"
  }

  return (
    <div className="quiz">
      <h2>{currentQuestion.question}</h2>
      <div className="options">
        {currentQuestion.answers.map((option) => (
          <button style={style} onClick={() => handleAnswerClick(option)}
          >
            {option.answer}
          </button>
        ))}
      </div>
    </div>
  );
}
