const quizes = {
  variable1: {
    questions: [
      {
        text: "What is a variable?",
        options: [
          { text: "A box that can store so many things" },
          { text: "A small box that can hold one thing", correct: true },
          { text: "A type of number" },
        ],
        explanation: `
        These are small labeled boxes with one data type in it - we are starting with strings.
        `,
      },
      {
        text: "How do we create a variable?",
        options: [
          { text: "var smallBox = buzz lightyear", correct: true },
          { text: "variable smallBox" },
          { text: "smallbox = new variable" },
          { text: "new smallBox = 'buzz lightyear'" },
        ],
        explanation: `
        The format we write variables in is: 
        {typeOfData} {nameOfData} = {data}

        typeOfData is var
        nameOfData is smallBox
        data is "buzz lightyear"
        `,
      },
    ],
  },
};

export default quizes;
