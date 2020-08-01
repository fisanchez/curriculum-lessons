---
title: Week 3 - The DOM I
purpose: Introduce the students to interacting with html using JavaScript. Will not focus on writing HTML/CSS
coveredLastClass: 
  - How to write functions.
  - How to call functions.
  - How to create variables.
  - Understand how arguments work in functions.
todaysLesson:
  - What is a DOM ( Document Object Model )
    - Explain how ids and classes work in html
  - Interacting with DOM elements
    - Selecting an element `document.getElementById`
    - Selecting multiple elements `document.getElementsByClassName`
  - What we can do with elements
    - We can access properties such as - value and style. Longer list can be found by calling .attributes
  - Event listeners
---

# {{ $frontmatter.title }}
**{{ $frontmatter.purpose }}**

## Covered Last class

- How to write functions.
- How to call functions.
- Creating variables.
- Understanding how arguments work in functions.

## Today's Lesson
  - What is a DOM ( Document Object Model )
    - Explain how ids and classes work in html
  - Interacting with DOM elements
    - Selecting an element: `document.getElementById`
    - We can access properties such as: value and style. Longer list can be found by calling .attributes
  - Event listeners
    - What is it?

## DOM (Document Object Model)

*Everything you see on a website are objects. The comment section, the headers, inputs, everything.*

### Selecting DOMs

When writing HTML you can give any element a class name or an id. Both are used to interact with it through JS.

- ids
  - should be unique in a page. Used when selecting one element/object.
- class
  - can be added to multiple elements. Used when interacting with multiple objects

::: warning
getElementsByClassName will be skipped this week because it involves looping through the results. Will be addressed again when we cover loops.
:::

### Example - Targeting specific element using JavaScript
<br/>
<div style="background-color: yellow;">
  <label for="name">First name:</label>
  <input type="text" id="name" name="name" value="Peter Piper">
</div>

::: details code
  ```js
  <label for="name">First name:</label>
  <input type="text" id="name" name="name" value="Peter Piper">
  ```
:::

::: details solution
  ```js
    // Getting the correct input object
    var nameObject = document.getElementById("name")

    // Getting the value of your element - which is the name in this case.
    var name = nameObject.value
    console.log(name)
  ```
:::

#### Checkpoint

<sub> Please change the color of the highlighted sentence below to RED </sub>
<sub> Use this link as a reference: https://www.w3schools.com/jsref/met_document_getelementbyid.asp </sub>

<div style="background-color: yellow;">
  <p id="wk2-sentence"> Congratulations for making it this far! Let's keep going, make me red! </p>
</div>

::: details code
```html
<p id="wk2-sentence"> Congratulations for making it this far! Let's keep going, make me red! </p>
```
:::

::: details solution
```js
var element = document.getElementById("wk2-sentence")
element.style.color = "red"
```
:::

### Event listeners

*Calling a function whenever you interact with the webpage*

#### Adding an event listener to a button

<div style="background-color: yellow">
  <button class="button" id="click-me-button"> CLICK ME </button>
</div>

::: details code
```html
  <button class="button" id="click-me-button"> CLICK ME </button>
```
:::

There are many interactions we can do but to start we will focus on the "click" interaction.
</br>
**Goal:** Alert a message when clicking the button.

::: details solution
```js
  var buttonElement = document.getElementById("click-me-button")
  buttonElement.addEventListener("click", function(){
    alert("OH HI THERE!")
  })
:::

#### Checkpoint

- Create a button that when clicked will:
  - Ask you what number you would like to double
  - alerts the number you said, but doubled.
  - Acceptance test:
    - given you pass the prompt the number 2, it should return 4
    - given you pass the prompt 234, it should return 468

::: details solution
```html
<!-- html -->
<button id="whatever-you-want"> Click me! </button>
```

```js
//js
var buttonElement = document.getElementById("whatever-you-want")
buttonElement.addEventListener("click", function(){
  var userResponse = prompt("What number do you want to double?")
  alert("Your double numbered is " + (userResponse * 2))
});
:::

## Homework

Given an [HTML Template](https://codepen.io/NaviCode/pen/wvMZGGX?editors=1010) implement the following behaviors into the site:

- The convert button should:
  - [ ] Have a click event listener
  - [ ] Store the number in the Fahrenheit input field in a variable
  - [ ] Pass that number to your fahrenheit to celsius function
  - [ ] Set the new converted celsius to the celsius input field
- The reset button should:
  - [ ] Set the value of the fahrenheit field to an empty string
  - [ ] Set the value of the celsius to an empty string
