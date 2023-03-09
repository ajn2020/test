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

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion>(
    quizQuestions[Math.floor(Math.random() * quizQuestions.length)]
  );
  const [isAnswerSelected, setAnswerSelected] = useState(false);

  const handleAnswerClick = async () => {
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
      <h3 style={{
        marginBottom: 20
      }}>{currentQuestion.question}</h3>
      <div className="question-box-answers">
        {currentQuestion.answers.map((option) => (
          <button
            key={currentQuestion.answers.indexOf(option)}
            className={`answer-button ${
              isAnswerSelected
                ? option.correct
                  ? "border-correct"
                  : "border-incorrect"
                : ""
            }`}
            onClick={() => handleAnswerClick()}
          >
            {option.answer}
          </button>
        ))}
      </div>
    </div>
  );
}
