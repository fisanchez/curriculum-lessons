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
    - Selecting multiple elements: `document.getElementsByClassName`
  - What we can do with elements
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

```js
// Getting the correct input object
var nameObject = document.getElementById("name")

// Getting the value of your element - which is the name in this case.
var name = nameObject.value
console.log(name)
```
