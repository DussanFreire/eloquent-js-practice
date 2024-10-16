# Expressions and Statements in JavaScript

In JavaScript, values and operators are combined to produce new values, which form the core of any program. However, these values must be organized within a larger structure to be useful. This chapter focuses on the distinction between expressions and statements.

## Expressions

An **expression** is a fragment of code that produces a value. Examples include:
- Literals: `22`, `"psychoanalysis"`
- Parenthesized expressions: `(5 + 5)`
- Binary operations: `3 + 4`
- Unary operations: `!false`

Expressions can contain other expressions, allowing for complex computations.

## Statements

A **statement** is akin to a complete sentence in programming. The simplest statement is an expression followed by a semicolon:

```javascript
1;
!false;
```

Although these statements produce values, they are often deemed useless if they don’t have side effects, such as displaying output or changing program state.

### Example of a Useless Statement

```javascript
console.log(1); // This outputs 1 but doesn't affect the program.
```

## Bindings

Bindings, or variables, are used to maintain the internal state of a program. They allow us to remember values and are defined using the let, var, or const keywords.

## Creating a Binding

```javascript
let caught = 5 * 5; // Creates a binding called 'caught'
```

After defining a binding, its value can be updated:

```javascript
let mood = "light";
mood = "dark"; // Updates the binding to a new value
```

### Example of Binding in Action
```javascript
let luigisDebt = 140;
luigisDebt = luigisDebt - 35; // Luigi pays back $35
console.log(luigisDebt); // Outputs: 105
```

## Binding Names

Binding names can include letters, digits (not starting with a digit), dollar signs, and underscores. However, certain keywords and reserved words cannot be used as binding names.

## Reserved Words
Some examples of reserved words include:

*	break
*	case
*	const
*	function
*	if

### The Environment

The environment encompasses all bindings and their values at a given time. It typically contains standard bindings for interacting with the system, especially in a browser environment.

## Functions

Functions are values that wrap program code, allowing for execution. They can produce side effects or return values. For example:

### Calling a Function
```javascript
prompt("Enter passcode"); // Displays a dialog for user input
```
### Console Output Example
```javascript
let x = 30;
console.log("The value of x is", x); // Outputs: The value of x is 30
```
## Return Values
Functions may return values, allowing them to be used in larger expressions. For instance:
```javascript
console.log(Math.max(2, 4)); // Outputs: 4
console.log(Math.min(2, 4) + 100); // Outputs: 102
```

## Control Flow
Control flow in a program follows a straight path unless specified otherwise. Here’s an example of simple control flow:

```javascript
let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " + theNumber * theNumber);
```
## Conditional Execution
Conditional execution allows branching in code using the if statement:
```javascript
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}
```

### Chaining Conditionals
You can chain multiple if/else statements to handle different conditions:

```javascript
let num = Number(prompt("Enter a number"));
if (num > 0) {
  console.log("Positive number");
} else if (num < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}
```
## While and Do Loops
### While Loop
*	A while loop repeats a block of code as long as a specified condition is true.
*	Example: Printing even numbers from 0 to 12.

```javascript
let number = 0;
while (number <= 12) {
  console.log(number);
  number += 2; // Increments by 2
}
// Output: 0, 2, 4, 6, 8, 10, 12
```

### Do Loop
* A do loop executes its block at least once before checking the condition.
* Example: Asking for user input until a valid name is entered.

```javascript
let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log("Hello " + yourName);
```
### Indenting Code
* Indentation helps improve code readability by visually representing the structure of the code.
* Proper indentation shows where blocks of code start and end.

## For Loops
* For loops provide a concise way to iterate, combining initialization, condition checking, and incrementing.
* Example: Printing even numbers from 0 to 12 using a for loop.

```javascript
for (let number = 0; number <= 12; number += 2) {
  console.log(number);
}
// Output: 0, 2, 4, 6, 8, 10, 12
```
### Breaking Out of a Loop
*	The break statement exits the loop immediately.
*	Example: Finding the first number greater than or equal to 20 that is divisible by 7.

```javascript
for (let current = 20; ; current++) {
  if (current % 7 === 0) {
    console.log(current); // Output: 21
    break;
  }
}
```
### Continue Statement
*	The continue statement skips the rest of the current loop iteration and continues to the next one.
## Updating Bindings
JavaScript offers shortcuts for updating variables:
*	counter += 1; is equivalent to counter = counter + 1;.
*	counter++ and counter-- are shorter forms for incrementing and decrementing by one.

## Switch Statement
The switch statement allows for multiple case evaluations based on a variable’s value.
Example:
```javascript
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
    // Missing break here shares code with the next case
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
```
## Capitalization and Binding Names
Binding names cannot contain spaces and often use camelCase or underscores for readability.

## Comments

*	Comments are used to add explanations or notes in the code.
*	Single-line comments: // comment
*	Multi-line comments: /* comment */
