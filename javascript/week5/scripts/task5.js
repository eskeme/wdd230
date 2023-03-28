/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const NewDate = new Date();
// Step 2: Declare another variable to hold the day of the week
let dayOfWeek;
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
dayOfWeek = NewDate.getDay();
// Step 4: Declare a variable to hold a message that will be displayed
let message;
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    message = 'Hang in there!';
} 
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
else {
    message = 'Woohoo! It is the weekend!';
}

console.log(message);
/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let DayMessage;
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (dayOfWeek) {
    case 0:
        DayMessage = 'Sunday'
        break;
    case 1:
        DayMessage = 'Monday'
        break;
    case 2:
        DayMessage = 'Tuesday'
        break;
    case 3:
        DayMessage = 'Wednesday'
        break;
    case 4:
        DayMessage = 'Thursday'
        break;
    case 5:
        DayMessage = 'Friday'
        break;
    case 6:
        DayMessage = 'Saturday'
        break;
    default:
        DayMessage = 'Invalid day'
}

console.log(DayMessage);
/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.getElementById('message1').innerHTML = message;
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.getElementById('message2').innerHTML = DayMessage;
/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let temples = [];
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
function output(temples) {
    const templeContainer = document.getElementById('temples');
    temples.forEach(temple => {
// - Creates an HTML <article> element 
    const article = document.createElement('article');
// - Creates an HTML <h3> element and add the temple's templeName property to it
    const h3 = document.createElement('h3');
// - Creates an HTML <h4> element and add the temple's location property to it
    const h4Location = document.createElement('h4');
// - Creates an HTML <h4> element and add the temple's dedicated property to it
    const h4Dedicated = document.createElement('h4');
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
    const img = document.createElement('img');

    h3.textContent = temple.templeName;
    h4Location.textContent = temple.location;
    h4Dedicated.textContent = temple.dedicated;
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
    article.appendChild(h3);
    article.appendChild(h4Location);
    article.appendChild(h4Dedicated);
    article.appendChild(img);
// - Appends the <article> element to the HTML element with an ID of temples
    templeContainer.appendChild(article);
    });
}
// Step 3: Create another function called getTemples. Make it an async function.
async function getTemples() {
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
    const response = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json');
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
    temples = await response.json();
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
    output(temples);
}

getTemples();
// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset() {
    const templeContainer = document.getElementById('temples');
    templeContainer.innerHTML = '';
}
// Step 8: Declare a function named sortBy that does the following:

function sortBy() {
    // - Calls the reset function
    reset();

    const sortByElement = document.getElementById('sortBy');
    const sortByValue = sortByElement.value;

    // - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
    if (sortByValue === 'templeNameAscending') {
        temples.sort((a, b) => a.templeName.localeCompare(b.templeName));
    } else if (sortByValue === 'templeNameDescending') {
        temples.sort((a, b) => b.templeName.localeCompare(a.templeName));
    }

    // - Calls the output function passing in the sorted list of temples
    output(temples);
}

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.getElementById('sortBy').addEventListener('change', sortBy);

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
// Filter the list of temples based on the selected value

function filterBy() {
    // - Calls the reset function
    reset();

    const filterByElement = document.getElementById('filterBy');
    const filterByValue = filterByElement.value;

    // Filter the list of temples based on the selected value
    if (filterByValue === 'open') {
        filteredTemples = temples.filter(temple => temple.dedicated !== 'Renovation');
    } else if (filterByValue === 'close') {
        filteredTemples = temples.filter(temple => temple.dedicated === 'Renovation');
    } else {
        // If the selected value is not 'open' or 'close', show all temples
        filteredTemples = temples;
    }

    // Call the output function passing in the filtered list of temples
    output(filteredTemples);
}

// Add a change event listener to the HTML element with an ID of filterBy that calls the filterBy function
document.getElementById('filterBy').addEventListener('change', filterBy);
