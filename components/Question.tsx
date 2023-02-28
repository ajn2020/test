import React, { useState, useEffect } from "react";
import { quizQuestions } from "@/data/Quiz";

type QuizQuestion = {
  question: string;
  answers: Array<Option>;
};

type Option = {
  answer: string;
  correct: boolean;
};

/*export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion>();
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number>();

  useEffect(() => {
    setCurrentQuestion(quizQuestions[Math.floor(Math.random() * quizQuestions.length)]);
  }, [])

  const handleAnswerClick = (selectedOption: Option) => {
    setSelectedAnswerIndex(currentQuestion?.answers.indexOf(selectedOption));
  }

  return (
    <div>
      <h2>{currentQuestion?.question}</h2>
      <div>
        {currentQuestion?.answers.map((option) => (
          <button key={currentQuestion?.answers.indexOf(option)}
            className={`answer-button ${selectedAnswerIndex === currentQuestion?.answers.indexOf(option)
              ? option.correct
                ? "border-correct"
                : "border-incorrect"
              : ""}`} 
            onClick={() => handleAnswerClick(option)}>
            {option.answer}
          </button>
        ))}
      </div>
    </div>
  );
}*/

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion>();
  const [isAnswerSelected, setAnswerSelected] = useState(false);

  useEffect(() => {
    setCurrentQuestion(
      quizQuestions[Math.floor(Math.random() * quizQuestions.length)]
    );
  }, []);

  const handleAnswerClick = async (selectedOption: Option) => {
    if (!isAnswerSelected) {
      setAnswerSelected(true);
      await new Promise((r) => setTimeout(r, 10000));
      setAnswerSelected(false);
      setCurrentQuestion(
        quizQuestions[Math.floor(Math.random() * quizQuestions.length)]
      );
    }
  };

  return (
    <div className="question-box">
      <h3>{currentQuestion?.question}</h3>
      <div className="question-box-answers">
        {currentQuestion?.answers.map((option) => (
          <button
            key={currentQuestion?.answers.indexOf(option)}
            className={`answer-button ${
              isAnswerSelected
                ? option.correct
                  ? "border-correct"
                  : "border-incorrect"
                : ""
            }`}
            onClick={() => handleAnswerClick(option)}
          >
            {option.answer}
          </button>
        ))}
      </div>
    </div>
  );
}
