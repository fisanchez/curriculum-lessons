---
title: DOM (Document Object Model) I
---

[[toc]]

## Understanding objects 

When we think of objects think of physicals things, and like all physical things it has two things: 
- Things it has (attributes/properties)
- Things it does (functions/methods)

And we access an objects properties or functions using the dot notation (a period)

### Real life Example
**A car** - Let's break it into it's two parts
- Functions
  - drive()
  - openDoor()
  - accelerate()
  - brake() 
- Properties
  - doors
  - color
  - headlights

If we want to know how many doors this car has we might do something like this

```js
car.doors
```

::: tip 
Notice the period after car and before doors. This is translated to say: `"From the object car get the property called doors."`
:::

### DOM
