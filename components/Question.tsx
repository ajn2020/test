import React, { useState, useEffect } from 'react';
import {quizQuestions} from '@/data/Quiz'

type QuizQuestion = {
  question: string,
  answers: Array<Option>
}

type Option = {
  answer: string;
  correct: boolean;
}

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion>();
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setCurrentQuestion(quizQuestions[Math.floor(Math.random() * quizQuestions.length)]);
    console.log(currentQuestion)
  }, [])

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
      <h2>{currentQuestion?.question}</h2>
      <div className="options">
        {currentQuestion?.answers.map((option) => (
          <button style={style} onClick={() => handleAnswerClick(option)}>
            {option.answer}
          </button>
        ))}
      </div>
    </div>
  );
}
