---
title: Week 4 - Objects & Arrays I
purpose: Understand how to write, access and execute array and objects
covered_last_class:
  - What is a DOM ( Document Object Model )
    - Explain how ids and classes work in html
  - Interacting with DOM elements
    - Selecting an element `document.getElementById`
    - Selecting multiple elements `document.getElementsByClassName`
  - What we can do with elements
    - We can access properties such as - value and style. Longer list can be found by calling .attributes
  - Event listeners
lesson: List of content that will be covered today
  - Objects
  - Arrays 
---

# {{$frontmatter.title}}

## Objects

### Introduction
We will cover objects

### Practice
Create an object named "car" with properties of color, number of doors, miles per gallon, and sound it makes

### Solution

### Quiz

1. Identify whether each field is a prop or a method:

```js
  var cat = {
    eyes: 2, //            1 - _____
    name: "catty", //      2 - _____
    mewo: function(){ //   3 - _____
      console.log("Meow")
    }
```

1. Choose the correct way to get the number of eyes the cat object has:
  <ol type="a">
    <li> `cat.eyes()` </li>
    <li> `cat.eyes` </li>
    <li> `cat.name()` </li>
    <li> `eyes(cat)` </li>
  </ol>
2. Choose the correct way to change the cat's name to Puck:
  <ol type="a">
    <li> `cat.giveName("Puck")` </li>
    <li> `cat.name = "Puck"` </li>
    <li> `cat.name() = "Puck"` </li>
    <li> `cat.name: "Puck"` </li>
  </ol>
3. Choose the correct way for the cat to meow:
  <ol type="a">
    <li> `cat.meow()` </li>
    <li> `cat.meow` </li>
    <li>  `console.log(cat.meow)` </li>
    <li> `meow(cat)` </li>
  </ol>
4. Functions in objects act differently than normal functions we've worked before
  <ol type="a">
    <li> `True` </li>
    <li> `False` </li>
  </ol>

## Arrays

### Introduction

Arrays are boxes that can store many things of any type, not just one like a variable and are denoted by braces `[]`

First let's remember what data types we have worked with until this point:
  - `Boolean` example: `true`, `false`
  - `Number` example: `1`, `2924`, `0.002912`, `2/3`
  - `String` example: `"Hello"`, `"Goodbye"`, `"I can be anything I want~"`
  - `Variable` example: `name`, `iRepresentSomething`, `imDefinedElsewhere`

An array is similar to a variable where it can store information, but unlike a variable it can store an infinite number of things. Let's compare. 

```js
var cat1 = "Benny the Cat"
var cat2 = "Jimmy the Cat"
var cat3 = "Arto the Artistic Cat"
```

In the example above we see three variables - 3 cats. What if we want to group all these cats together into one variable? We use an **array!** We will name this cats.

```js
var cats = [cat1, cat2, cat3]
console.log(cats)
// > ["Benny the Cat", "Jimmy the Cat", "Arto the Artistic Cat"]
```

#### Methods available with arrays

1. `array.push(item)` - Adds an item to the array at the end.
  ```js
  //example - adding another cat to our list
  cats.push("Piggy the Clean Cat")
  ```
2. `array.shift()` - removes the first item in the array and returns that item
  ```js
  // example
  var cats = [cat1, cat2, cat3]
  cats.shift()
  // > "Benny the Cat"
  console.log(cats)
  // > [cat2, cat3]
  ```
3. `array.pop()` - removes the last item in the array and returns that item
  ```js
  // example
  var cats = [cat1, cat2, cat3]
  cats.pop()
  // > "Arto the Artistic Cat"
  console.log(cats)
  // > [cat1, cat2]
  ```
4. `document.appendChild(item)`
  ```js
  
  

### Practice

1. Create an empty array called `toybox`, and using array methods fill it with the name of three toys.

### Solution

### Quiz


### Homework

Add history to calculator solution
