# Chapter Notes: Eloquent JavaScript

## Data and Bits 0️⃣1️⃣

In the digital world, everything is data. Computers store and process this data as bits (zeros and ones). Each bit represents two-valued forms such as:
* High or low electrical charge
* Strong or weak signal
* Shiny or dull spots on a CD

### Example:
The number 13 in binary (base 2):

``` javascript
   0   0   0   0   1   1   0   1
 128  64  32  16   8   4   2   1
```

This binary number (00001101) represents 13 because 8 + 4 + 1 = 13.

## Values and Memory 💾

* Values are chunks of information created from bits.
* In JavaScript, values can be numbers, text (strings), functions, etc.
* Memory stores these values, but once a value is no longer needed, its bits are recycled for other uses.

## Numbers 🔢
Numbers in JavaScript are stored as 64-bit chunks, allowing representation of:
*	Up to 18 quintillion unique numbers
*	Some precision loss for fractional numbers

###	Examples:
Whole number:
``` javascript
13
```
Fractional number:
``` javascript
9.81
```
Scientific notation:
``` javascript
2.998e8  // 299,800,000
```

## Arithmetic Operations ✖️➕

Common arithmetic operators:
* + (addition)
*	- (subtraction)
*	* (multiplication)
*	/ (division)
``` javascript
(100 + 4) * 11  // 1144
```
Modulo (remainder) operator:
``` javascript
314 % 100  // 14
```
## Special Numbers 💯
JavaScript has three special numeric values:

*	Infinity: Positive infinity
*	-Infinity: Negative infinity
*	NaN: Not a number

## Strings 🔤
* quotes (", ', or `).
*	Special characters can be included using a backslash (\) for escaping.
``` javascript
"This is the first line\nAnd this is the second"
```
Strings can be concatenated using the + operator:
``` javascript
"con" + "cat" + "e" + "nate"  // "concatenate"
```
Template literals (with backticks) allow embedding values:
``` javascript
`half of 100 is ${100 / 2}`  // "half of 100 is 50"
```
## Operators 🧮
### Unary Operators
Operators that work on a single value, like typeof:
``` javascript
typeof 4.5  // "number"
```
### Boolean Values
JavaScript has a Boolean type with values true and false.

### Comparisons

Comparison operators produce Boolean values:
``` javascript
3 > 2  // true
"Aardvark" < "Zoroaster"  // true
```
### Other Operators
*	>=, <=, ==, != for greater/less than and equal comparisons.
