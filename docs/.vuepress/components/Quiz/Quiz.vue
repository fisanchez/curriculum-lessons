<template>
<quiz class="container">
  <header class="bg-color-gray">
    <h1>VueQuestions</h1>
  </header>
  <body class="bg-color-white" v-if="endOfQuestions">
    <h3>End of quiz</h3>
  </body>
  <body class="bg-color-white" v-if="!endOfQuestions">
    <h2 class="title">{{questions[questionIndex].text}}</h2>
    <div class="options-container">
      <div
        class="option"
        v-for="(option, index) in questions[questionIndex].options"
        :key="index"
        v-bind:class="{'is-selected': userSelected && ( questionSelected ==
        index ), 'answer-correct': userSubmitted && option.correct}"
        @click="selectOption(index)"
      >{{option.text}}</div>
    </div>
  </body>
  <explanation>
    <answer v-if="showExplanation">{{questions[questionIndex].explanation}}</answer>
  </explanation>
  <footer class="bg-color-gray">
    <button v-if="questionIndex > 0" class="back" v-on:click="questionIndex-= 1">Back</button>
    <button v-if="!userSubmitted" class="button submit" @click="submitAnswer">Submit</button>
    <button v-if="userSubmitted && !endOfQuestions" class="button next" @click="nextQuestion">Next</button>
  </footer>
</quiz>
</template>

<script>
import quizes from "../../helpers/quiz";

export default {
  methods: {
    selectOption(index) {
      this.userSelected = true;
      this.questionSelected = index;
    },
    submitAnswer() {
      this.userSubmitted = true;
      this.showExplanation = true;
    },
    nextQuestion() {
      if (this.questions[this.questionIndex + 1] !== undefined) {
        this.questionIndex += 1;
        this.userSubmitted = false;
        this.userSelected = false;
        this.showExplanation = false;
      } else {
        this.endOfQuestions = true;
        this.showExplanation = false;
      }
    }
  },
  data() {
    return {
      questionIndex: 0,
      quiz: quizes["variable1"],
      questions: quizes["variable1"].questions,
      questionSelected: 0,
      userSubmitted: false,
      userSelected: false,
      showExplanation: false,
      endOfQuestions: false
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");

.is-selected {
  border-color: rgba(black, 0.5);
  background-color: white !important;
}

.answer-correct {
  background-color: #3eb07c !important;
}
.bg-color-white {
  background-color: white;
}

.bg-color-gray {
  background-color: #cfd8dc;
}

.options-container {
  margin-top: 12px;
  flex-grow: 1;
}

.option {
  border-radius: 30rem;
  padding: 9px 18px;
  margin: 0 18px;
  margin-bottom: 12px;
  transition: 1;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.85);
  border: transparent 1px solid;
}

.option:active {
  transform: scaleX(0.9);
}

.option:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  font-family: Montserrat, sans;
  font-weight: normal;
}

header {
  text-align: center;
}

quiz {
  font-family: "Open Sans", sans-serif;
  min-height: 30rem;
  max-height: 30rem;
  width: 30rem;
  margin: auto;
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100vh;
}
</style>
