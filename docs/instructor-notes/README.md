---
title: Lessons plan workflow
---

# {{$frontmatter.title}}

## Lesson headers

Every markdown lesson plan includes a markdown yaml header containing templated information.

```yml
---
title: Title of today's lesson
purpose: What you hope to achieve in today's lesson
covered_last_class: List what was covered last class
  - Topic 1
  - Topic 2
  - Topic 3
lesson: List of content that will be covered today
  - Topic 1
  - Topic 2
  - Topic 3
---
```

## Template for each lesson topic

```yml
---
introduction:
  - Provide a description of this new topic by showing a video, example, or metaphore.
practice:
  - Ask the students to answer one or two questions regarding the topic
solution:
  - Walk through the solution with the class
quiz:
  - A longer series of true or false questions for the class to solve. Try not to include more than 5 questions.
project:
  - This lesson should be a building block on a bigger project. Use this time to talk about how it's going to help implement a feature.
bonus:
  - Anything extra. 
---
```

### Example

```yml
introduction: We will cover objects
practice: Create an object named "car" with properties of color, number of doors, miles per gallon, and sound it makes
solution:
  var car = {
    color: "red",
    numberOfDoors: 5,
    milesPerGallon: 20,
    sound: function(){
      alert("WOAH")
    }
  }
quiz:
  1. Identify whether each field is a prop or a method:
    var cat = {
      eyes: 2, //            1 - _____
      name: "catty", //      2 - _____
      mewo: function(){ //   3 - _____
        console.log("Meow")
      }
  2. Choose the correct way to get the number of eyes the cat object has:
    a. cat[eyes] 
    b. cat.eyes()
    c. cat.eyes
    d. eyes(cat)
  3. Choose the correct way to change the cat's name to Puck:
    a. cat.giveName("Puck")
    b. cat.name = "Puck"
    c. cat.name() = "Puck"
    d. cat.name: "Puck"
  4. Choose the correct way for the cat to meow:
    a. cat.meow()
    b. cat.meow
    c. console.log(cat.meow)
    d. meow(cat)
  5. T/F: Functions in objects act differently than normal functions we've worked before
```
