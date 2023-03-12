import React, { useState, useEffect } from "react";
import { quizQuestions } from "@/data/Quiz";
import style from "@/styles/home/Question.module.css";

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
    <div className={style["question-box"]}>
      <h2>{currentQuestion.question}</h2>
      <div className={style["question-box-answers"]}>
        {currentQuestion.answers.map((option) => (
          <button
            key={currentQuestion.answers.indexOf(option)}
            className={
              style["answer-button"] +
              (isAnswerSelected
                ? option.correct
                  ? " " + style["border-correct"]
                  : " " + style["border-incorrect"]
                : "")
            }
            onClick={() => handleAnswerClick()}
          >
            {option.answer}
          </button>
        ))}
      </div>
    </div>
  );
}
