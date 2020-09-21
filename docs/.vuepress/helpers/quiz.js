const quizes = {
  variable1: {
    questions: [
      {
        text: "Who's that pokemon?",
        responces: [
          { text: "pikachu" },
          { text: "snorlax" },
          { text: "raichu" },
          { text: "piglet", correct: true },
        ],
      },
      {
        text: "Who's that not pokeman?",
        responces: [
          { text: "pikachu", correct: true },
          { text: "snorlax" },
          { text: "raichu" },
          { text: "piglet" },
        ],
      },
    ],
  },
};

export default quizes;
