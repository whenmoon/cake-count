# Algo Rithms Challenge // Cake Count

- [1. Getting started](#1-getting-started)
- [2. Challenge](#2-challenge)
  - [2.1. Examples](#21-examples)
  - [2.2. Testing your solution](#22-testing-your-solution)
  - [2.3. Submitting your solution](#23-submitting-your-solution)

## 1. Getting started
  `github.com/kramire/cake-count`

Fork this repo and then `git clone` your forked repo to your computer.
Once you're happy with your solution, `git push` and submit a pull request at
`github.com/kramire/cake-count`.

## 2. Challenge

Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good at math. Can you help him determine how many cakes he can bake given his available ingreidents?

Write a function `cakes()`, which takes two objects as arguments: the recipe, and the available ingredients.  The function returns maximum number of cakes Pete can bake as an integer. 

For simplicity there are no units (e.g. 200 g of sugar is simply 200). 
Ingredients that are not present can be considered as 0.

### 2.1. Examples

```js
---------------------------------------------------------------
// returns 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});

// returns 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
```

### 2.2. Testing your solution
To test your solution, run `npm i` in the root directory
and then run `npm t` to run the automated tests.

### 2.3. Submitting your solution

To submit your solution:

1. If you're working on a forked repo, push your changes to your forked repo and submit a pull request to this repo.
