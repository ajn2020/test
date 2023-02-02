import React, { useState } from 'react';

type QiuzOption = {
    id: string;
    value: string;
    followUpQuestion: number;
}

type QiuzQuestion = {
    id: number;
    question: string;
    options: Array<QiuzOption>;
}

const questions = [
    {
      id: 1,
      question: "Is the item too big to fit in an empty bin?",
      options: [
        {
          id: "a",
          value: "Yes",
          followUpQuestion: 1
        },
        {
          id: "b",
          value: "No",
          followUpQuestion: 6
        }
      ]
    },
    {
      id: 2,
      question: "Is it reusable / would you like to donate it?",
      options: [
        {
          id: "c",
          value: "Yes",
          followUpQuestion: 2
        },
        {
          id: "d",
          value: "No",
          followUpQuestion: 5
        }
      ]
    },
    {
      id: 3,
      question: "Is it furniture or electrical appliance?",
      options: [
        {
          id: "e",
          value: "Yes",
          followUpQuestion: 3
        },
        {
          id: "f",
          value: "No",
          followUpQuestion: 4
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
          id: "g",
          value: "Plastic or metal",
          followUpQuestion: 7
        },
        {
          id: "h",
          value: "Cardboard or paper",
          followUpQuestion: 8
        },
        {
          id: "i",
          value: "Glass",
          followUpQuestion: 9
        },
        {
          id: "j",
          value: "Textiles",
          followUpQuestion: 10
        },
        {
          id: "k",
          value: "Food",
          followUpQuestion: 11
        },
        {
          id: "l",
          value: "Natural / organic",
          followUpQuestion: 12
        },
        {
          id: "m",
          value: "Other / different materials",
          followUpQuestion: 15
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
            id: "n",
            value: "Yes",
            followUpQuestion: 13
          },
          {
            id: "o",
            value: "No",
            followUpQuestion: 14
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
          id: "p",
          value: "Yes",
          followUpQuestion: 10
        },
        {
          id: "q",
          value: "No",
          followUpQuestion: 16
        }
      ]
    },
    {
      id: 17,
      question: "Sorry, this item is a rubbish and cannot be recycled. Please, use the black bin!",
      options: []
    }
  ];

  export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleOptionClick = (option: QiuzOption) => {
    if (questions[option.followUpQuestion].options.length === 0) {
        setCurrentQuestion(option.followUpQuestion);
        // End the quiz
        return;        
    }
    setCurrentQuestion(option.followUpQuestion);
    
  };

  const handleReset = () => {
    setCurrentQuestion(0);
  };

  const currentQuizQuestion = questions[currentQuestion];

  return (
    <div className="quiz-wrapper">
      <div className='quiz-title'>
        <h2>
            Choose the right recycling service for your item here!
        </h2>
      </div>  
      <div className='quiz'>
        <h3>{currentQuizQuestion.question}</h3>
        <div>
        {currentQuizQuestion.options.map((option) => (
            <button className="quiz-option" key={option.id} onClick={() => handleOptionClick(option)}>
                {option.value}
            </button>
        ))}
        </div>
        <button onClick={handleReset}>Restart</button>
      </div>  
    </div>
  );
}
