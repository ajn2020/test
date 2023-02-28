export const questions = [
  {
    id: 0,
    question: "Is the item too big to fit in an empty bin?",
    options: [
      {
        id: "a",
        value: "Yes",
        followUpQuestion: 1,
      },
      {
        id: "b",
        value: "No",
        followUpQuestion: 5,
      },
    ],
  },
  {
    id: 1,
    question: "Is it furniture / an electrical appliance?",
    options: [
      {
        id: "e",
        value: "Yes",
        followUpQuestion: 2,
      },
      {
        id: "f",
        value: "No",
        followUpQuestion: 4,
      },
    ],
  },
  {
    id: 2,
    question: "Is it reusable / would you like to donate it?",
    options: [
      {
        id: "c",
        value: "Yes",
        followUpQuestion: 3,
      },
      {
        id: "d",
        value: "No",
        followUpQuestion: 4,
      },
    ],
  },
  {
    id: 3,
    question: "You can use the Hounslow Furniture Recycling Project!",
    options: [],
  },
  {
    id: 4,
    question: "You can use the Bulky Waste Collection Service!",
    options: [],
  },
  {
    id: 5,
    question: "What material is it made of?",
    options: [
      {
        id: "g",
        value: "Plastic / Metal",
        followUpQuestion: 6,
      },
      {
        id: "h",
        value: "Cardboard / Paper",
        followUpQuestion: 7,
      },
      {
        id: "i",
        value: "Glass",
        followUpQuestion: 8,
      },
      {
        id: "j",
        value: "Textiles",
        followUpQuestion: 9,
      },
      {
        id: "k",
        value: "Food",
        followUpQuestion: 10,
      },
      {
        id: "l",
        value: "Natural / Organic",
        followUpQuestion: 11,
      },
      {
        id: "m",
        value: "Other",
        followUpQuestion: 14,
      },
    ],
  },
  {
    id: 6,
    question: "You can use the red recycling box!",
    options: [],
  },
  {
    id: 7,
    question: "You can use the blue recycling box!",
    options: [],
  },
  {
    id: 8,
    question: "You can use the green recycling box!",
    options: [],
  },
  {
    id: 9,
    question:
      "You can use a clearly marked plastic bag and put it alongside your recycling boxes!",
    options: [],
  },
  {
    id: 10,
    question: "You can use the food waste bin!",
    options: [],
  },

  {
    id: 11,
    question: "Is it infectious (blood / tissue)?",
    options: [
      {
        id: "n",
        value: "Yes",
        followUpQuestion: 12,
      },
      {
        id: "o",
        value: "No",
        followUpQuestion: 13,
      },
    ],
  },
  {
    id: 12,
    question: "You can use the clinical waste collection service!",
    options: [],
  },
  {
    id: 13,
    question: "You can use the brown wheeled bin!",
    options: [],
  },
  {
    id: 14,
    question: "Is it an electrical appliance?",
    options: [
      {
        id: "p",
        value: "Yes",
        followUpQuestion: 9,
      },
      {
        id: "q",
        value: "No",
        followUpQuestion: 15,
      },
    ],
  },
  {
    id: 15,
    question:
      "Sorry, this item is rubbish and cannot be recycled. Please, use the black wheeled bin!",
    options: [],
  },
];
