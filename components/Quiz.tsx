import React, { useState } from 'react';

type QiuzOption = {
    id: string;
    value: string;
    content: string;
    followUpQuestion: any;
    options: any; 
}

const questions = [
    {
      id: 1,
      question: "Is the item too big to fit in an empty bin?",
      options: [
        {
          id: "a",
          value: "Yes",
          followUpQuestion: 2
        },
        {
          id: "b",
          value: "No",
          followUpQuestion: 7
        }
      ]
    },
    {
      id: 2,
      question: "Is it reusable / would you like to donate it?",
      options: [
        {
          id: "a",
          value: "Yes",
          followUpQuestion: 3
        },
        {
          id: "b",
          value: "No",
          followUpQuestion: 6
        }
      ]
    },
    {
      id: 3,
      question: "Is it furniture or electrical appliance?",
      options: [
        {
          id: "a",
          value: "Yes",
          followUpQuestion: 4
        },
        {
          id: "b",
          value: "No",
          followUpQuestion: 5
        }
      ]
    },
    {
      id: 4,
      question: "You can use the Furniture recycling service!",
      options: []
    },
    {
      id: 5,
      question: "You can use the Bulky waste collection service!",
      options: []
    },
    {
      id: 6,
      question: "You can use the Bulky waste collection service!",
      options: []
    },
    {
      id: 7,
      question: "What material is it made of?",
      options: [
        {
          id: "a",
          value: "Plastic or metal",
          followUpQuestion: 8
        },
        {
          id: "b",
          value: "Cardboard or paper",
          followUpQuestion: 9
        },
        {
          id: "c",
          value: "Glass",
          followUpQuestion: 10
        },
        {
          id: "d",
          value: "Textiles",
          followUpQuestion: 11
        },
        {
          id: "e",
          value: "Food",
          followUpQuestion: 12
        },
        {
          id: "f",
          value: "Natural / organic",
          followUpQuestion: 13
        },
        {
          id: "g",
          value: "Other / different materials",
          followUpQuestion: 14
        }
      ]
    },
    {
      id: 8,
      question: "You can use the Red bin (or such with a red mark on it)!",
      options: []
    },
    {
      id: 9,
      question: "You can use the Blue bin (or such with a blue mark on it)!",
      options: []
    },
    {
      id: 10,
      question: "You can use the Green bin (or such with a green mark on it)!",
      options: []
    },
    {
      id: 11,
      question: "You can use a clearly marked plastic bag and put it alongside your recycling boxes!",
      options: []
    },
    {
      id: 12,
      question: "You can use the food waste bin!",
      options: []
    },
    
    {
        id: 13,
        question: "Is it infectious (blood / tissue)?",
        options: [
          {
            id: "a",
            value: "Yes",
            followUpQuestion: 14
          },
          {
            id: "b",
            value: "No",
            followUpQuestion: 15
          }
        ]
      },
    {
      id: 14,
      question: "You can use the 'Clinical waste' collection service!",
      options: []
    },
    {
      id: 15,
      question: "You can use the 'Garden waste' collection service!",
      options: []
    },
    {
      id: 16,
      question: "Is it an electrical appliance?",
      options: [
        {
          id: "a",
          value: "Yes",
          followUpQuestion: 17
        },
        {
          id: "b",
          value: "No",
          followUpQuestion: 18
        }
      ]
    },
    {
      id: 17,
      question: "You can use a clearly marked plastic bag and put it alongside your recycling boxes!",
      options: []
    },
    {
      id: 18,
      question: "Sorry, this item is a rubbish and cannot be recycled. Please, use the black bin!",
      options: []
    }
  ];

  export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleOptionClick = (option: QiuzOption) => {
    if (option.options.length === 0) {
        // End the quiz
        return;
    }
    setCurrentQuestion(option.followUpQuestion);
  };

  const currentQuizQuestion = questions[currentQuestion];

  return (
    <div className="quiz">
      <h2>{currentQuizQuestion.question}</h2>
      <div className="options">
      {currentQuizQuestion.options.map((option) => (
        <button key={option.id} onClick={() => handleOptionClick(option)}>
            {option.value}
        </button>
      ))}
      </div>
    </div>
  );
}
