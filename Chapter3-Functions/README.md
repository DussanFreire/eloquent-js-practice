# Functions in JavaScript 🧬

Functions are fundamental tools in JavaScript, allowing developers to structure larger programs, reduce repetition, and isolate code. Functions help create new vocabulary by defining reusable subprograms.

## Defining Functions ✍️

Functions are created using the function keyword and can have parameters and a body. They can return values using the return statement or perform actions without returning anything. For example:

``` js
const square = function(x) {
  return x * x;
};
```

## Scope and Bindings 🌎
JavaScript has two main types of bindings: global and local. Global bindings are accessible throughout the program, while local bindings, such as function parameters, are only visible inside their respective functions or blocks.
```js
let globalVar = 'I am global';

function showScope() {
  let localVar = 'I am local';
  console.log(globalVar);  // Accessible
  console.log(localVar);   // Accessible
}

showScope();
console.log(globalVar);   // Accessible
// console.log(localVar); // Error: localVar is not defined
```
In this example, globalVar is accessible everywhere, while localVar is only accessible inside the showScope function.

## Nested Scope
Functions can be nested, with inner functions accessing outer function variables. This behavior is known as lexical scoping.

## Functions as Values

Functions in JavaScript are treated as values, meaning they can be passed around and used like any other variable.
```js
function greet() {
  return 'Hello!';
}

let sayHello = greet;
console.log(sayHello()); // Outputs: Hello!
```
This demonstrates how functions can be treated like values and assigned to other variables.

Function Declaration and Arrow Functions

``` js
// Function Declaration
function multiply(a, b) {
  return a * b;
}

// Arrow Function
const multiplyArrow = (a, b) => a * b;

console.log(multiply(2, 3));       // 6
console.log(multiplyArrow(2, 3));  // 6
```
Both function declarations and arrow functions do the same thing here but have different syntaxes.

## There are multiple ways to declare functions:

1.	Function expressions: const square = function(x) {...};
2.	Function declarations: function square(x) {...};
3.	Arrow functions: const square = (x) => x * x;

## Call Stack

JavaScript uses a call stack to manage function calls, ensuring that the program knows where to return after a function completes.

## Optional Arguments

JavaScript allows functions to accept more or fewer arguments than declared. Missing arguments default to undefined, while extra ones are ignored.

```js
function greet(name = 'stranger') {
  console.log(`Hello, ${name}!`);
}

greet('Dussan');  // Outputs: Hello, Dussan!
greet();          // Outputs: Hello, stranger!
```
This function uses a default value of ‘stranger’ if no argument is provided.

## Recursion vs. Loops
* A recursive approach to exponentiation (where a function calls itself to solve a problem) is more elegant and closer to the mathematical definition of exponentiation. However, it tends to be slower in JavaScript compared to a loop-based approach.
*	Loops are often faster because function calls in recursion are more expensive, but recursion can sometimes lead to clearer, more human-friendly code.

```js
// Recursion
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// Loop
function factorialLoop(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));      // 120 (recursion)
console.log(factorialLoop(5));  // 120 (loop)
```
Both functions calculate the factorial of a number, but one uses recursion and the other uses a loop.

### The Recursive Solution
```js
function findSolution(target) {
  function find(current, history) {
    if (current === target) return history;
    if (current > target) return null;
    return find(current + 5, `(${history} + 5)`) ||
           find(current * 3, `(${history} * 3)`);
  }
  return find(1, '1');
}

console.log(findSolution(13));
// Outputs: ((1 * 3) + 5) + 5
```
This recursive function explores different operations to find a solution that matches the target number.

## Trade-off Between Human-Friendliness and Machine-Friendliness:
*	Developers must balance the readability and simplicity of their code (human-friendly) against its efficiency (machine-friendly).
*	Writing more efficient but convoluted code can be detrimental, especially when clarity is more important, as in cases where performance is not a major concern.

## Performance Consideration:
*	Programmers should focus on writing correct and understandable code first. Optimizing for speed can wait until a performance issue is identified.
*	Not all code needs to be optimized right away, as many sections are not executed often enough to warrant optimization.

## The Recursive Solution:
*	The recursive approach is ideal for problems involving branching (exploring multiple paths). The provided example demonstrates a recursive function that explores different operations (addition and multiplication) to reach a target number.
*	The code recursively calls itself to either add 5 or multiply by 3, exploring different combinations until it finds a solution or exhausts all options.

## Recursive Thinking:
* The example involving the number 13 illustrates how the recursive function explores all possibilities in a systematic way, rejecting paths that exceed the target and returning successful results when a valid sequence is found.

## Growing Functions 
* Functions should be introduced when repetitive code is detected or when a new functionality naturally deserves its own function.
* Naming functions appropriately can clarify the intent of the code.

## 	Refactoring for Clarity:
*	A case study about formatting farm inventory (cows, chickens, and pigs) shows how to refactor code for simplicity by creating a zeroPad function that handles padding, removing the need for repeated code.
```js
function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);
// Outputs:
// 007 Cows
// 016 Chickens
// 003 Pigs
```
This example demonstrates refactoring repeated code into a zeroPad function to improve clarity and reduce repetition.

## Pure Functions:
*	Pure functions, which produce the same result when called with the same arguments and have no side effects, are preferable in many cases because they are easier to test and reuse.
*	Side effects, however, are sometimes necessary and useful, such as in functions like console.log.
```js
// Pure function
function add(a, b) {
  return a + b;
}

// Impure function
function impureAdd(a, b) {
  console.log(a + b); // Side effect: console log
  return a + b;
}

console.log(add(2, 3));        // Outputs: 5
impureAdd(2, 3);               // Outputs: 5 (side effect) then returns 5
```

The add function is a pure function, while impureAdd has a side effect (logging to the console).
