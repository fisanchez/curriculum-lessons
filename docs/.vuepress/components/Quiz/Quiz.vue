<template>
<quiz class="container">
  <header class="bg-color-gray">
    <h1>VueQuestions</h1>
  </header>
  <body class="bg-color-white">
    <h2 class="title">Who's that Pokemon!?</h2>
    <div class="options-container">
      <div class="option">a. Pikachu</div>
      <div class="option">b. Pikachu</div>
      <div class="option">c. Pikachu</div>
      <div class="option">d. Pikachu</div>
    </div>
  </body>
  <footer class="bg-color-gray"></footer>
</quiz>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");
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
  border-radius: 290486px;
  padding: 9px 18px;
  margin: 0 18px;
  margin-bottom: 12px;
  transition: 1;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.85);
  border: transparent 1px solid;
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

<script>
import quizes from "../../helpers/quiz";

export default {
  data() {
    return {
      question: null
    };
  }
};
</script>
