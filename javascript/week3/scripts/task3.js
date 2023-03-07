/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2) {
    return number1 + number2;
    }

// Step 2: In the function, return the sum of the parameters number1 and number2
function addNumbers() {
    var addend1 = parseInt(document.getElementById('addend1').value);
    var addend2 = parseInt(document.getElementById('addend2').value);
    var sum = add(addend1, addend2);
    document.getElementById('sum').value = sum;
    }
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
document.getElementById('addNumbers').addEventListener('click', addNumbers);
// Step 4: Assign the return value to an HTML form element with an ID of sum
var subtract = function(number1, number2) {
    return number1 - number2;
    };
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
var subtractNumbers = function() {
    var minuend = parseInt(document.getElementById('minuend').value);
    var subtrahend = parseInt(document.getElementById('subtrahend').value);
    var difference = subtract(minuend, subtrahend);
    document.getElementById('difference').value = difference;
    };
// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
var multiply = (number1, number2) => {
    return number1 * number2;
    };
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
var divide = function(number1, number2) {
    return number1 / number2;
    };
// Step 9: Test all of the mathematical functionality of the task3.html page.
var multiplyNumbers = () => {
    var factor1 = parseInt(document.getElementById('factor1').value);
    var factor2 = parseInt(document.getElementById('factor2').value);
    var product = multiply(factor1, factor2);
    document.getElementById('product').value = product;
    };
    
    var divideNumbers = function() {
    var dividend = parseInt(document.getElementById('dividend').value);
    var divisor = parseInt(document.getElementById('divisor').value);
    var quotient = divide(dividend, divisor);
    document.getElementById('quotient').value = quotient;
    };
    
    document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);
    document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const currentDate = new Date();
// Step 2: Declare a variable to hold the current year

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
const currentYear = currentDate.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById("year").textContent = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const myArray = Array.from({length: 25}, (_, index) => index + 1);

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById("array").textContent = myArray;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds"
const oddNumbers = myArray.filter(number => number % 2 !== 0);
document.getElementById("odds").textContent = oddNumbers;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const evenNumbers = myArray.filter(number => number % 2 === 0);
document.getElementById("evens").textContent = evenNumbers;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const sumOfArray = myArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById("sumOfArray").textContent = sumOfArray;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const multipliedArray = myArray.map(number => number * 2);
document.getElementById("multiplied").textContent = multipliedArray;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two. Assign the result to the HTML element with an ID of "sumOfMultiplied"
const sumOfMultiplied = myArray.map(number => number * 2).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;
