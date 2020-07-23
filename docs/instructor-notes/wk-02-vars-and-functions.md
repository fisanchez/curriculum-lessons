---
title: Week 2 - Variables and functions
purpose: Introduce students to the basic idea of what a function is, how to write and run basic functions.
---

## Lesson plan week 2

### Social checkup

### Rewind review
In the previous lesson we assigned the students to write out psudocode

### Lesson

**Introduction to simple browser functions**
  - Get them writing some functions! There a few functions I want them to play around with little explanation from me. 
  - Introduce the students to the following functions to test in their IDEs. Don't forget to have them bring up their consoles.

  ```js
  // Everything below are functions. 
  // Try putting this functions into your code and run it. 
  // Can you think of some ways we could use these in a project?
  // What happens when it's empty?
  
  console.log("TYPE WHATEVER STRING HERE")
  alert("TYPE WHATEVER STRING HERE")
  prompt("TYPE WHATEVER STRING HERE")
  ```
  
  **Possible break?*
  

**Writing our own function**
<sub> Hint: Parenthesis </sub>


**Checkpoint:**
  - What is a function?
  - Where did the text that came up come from? 
  - Did it work if it was empty?

**Variables**
<sub> How to save these responses </sub>

What are variables? 
  - A jar that can only hold on thing. Jars aren't very big but big enough for one thing.
  - We will talk about other data types later but for now we will focus on using strings.

**Parts of a variable**
  - The `var` keyword - short for variable
  - The name you want to give it (It can be anything)
  - Remember: variables act  exactly the same as what it's holding - A variable containing strings will act like strings

```js
//jar containing my name
var my_name = "Fernando Sanchez"
var favorite_color = "Yellow"
var home = "Atlanta"

//We can add strings together! Try the following what do you get?
console.log(my_name + favorite_color + home)
console.log("Apple apple apple" + my_name + "Pickles")

// Try different combinations! TIME: 5 minutes

// How can we get the following from the console? TIME: 5 minutes
//> "Hello my name is Fernando Sanchez, my favorite color is Yellow and I live in Atlanta"

Answer: 
console.log("Hello my name is" + my_name + ", my favorite color is" + favorite_color + "and I live in " + home)
```


**5 Parts of a function:**
  - The `function` keyword
  - The name of your `function` ( You can name it anything you want that starts with a letter )
  - Parameters:
    - One or more things your function expects to be given. 
    - In our examples from before it expected us to give it text, something to say or else it won't do anything!
  - Curly braces `{}`
  - The action

  ```js
  // Writing our own functions
  // Please identify the following parts of this function
  
  function double(number){
    console.log(number * 2)
  }
  // What do you expect the function to do?
  
  // Example #2
  function add(number1, number2){
    console.log(number1 + number2)
  }
  ```
  
**Homework** 

1. Here is the function that converts fahrenheit to celsius 

```js
// formula as psudocode - (32*fahrenheit - 32) * (5/9)
// Make a function that accepts fahrenheit as a number and logs out a number in celsius

// Converting 100F should roughly equal 37.77 celsius, for now dont worry about getting the decimals correct

convert(100) 
//> 37.778
```


2. Write an introduction about yourself, or a short story using 10 variables. You will use console.log() to log out the messages

```js
// Example

var name = "Fernando"
var hobby = "biking"
var superpower = "flight"
//...etc

console.log("Hello my name is" + name)
console.log("My hobby is" + hobby)
console.log("What while many don't know is that I am actually a superhero!")
console.log("While other people have powers of super strength, I have" + superpower)
```
