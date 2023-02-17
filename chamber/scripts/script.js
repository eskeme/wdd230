const date = new Date();
const formatter = new Intl.DateTimeFormat('en', {month: 'long'});
const month = formatter.format(new Date());
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const copyright = document.querySelector('#copyright');
const visitsDisplay = document.querySelector("#visits");

let day = date.getDate();
let year = date.getFullYear();
let day_week = weekday[date.getDay()]

var announcement = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 PM'
if (day_week == 'Monday' || day_week == 'Tuesday') {
    document.getElementById('announcement').innerText = announcement;
}

// This arrangement can be altered based on how we want the date's format to appear.
document.getElementById("current_date").innerText = `${day_week}, ${day} ${month} ${year}`;

copyright.textContent = `© ${new Date().getFullYear()}`;
copyright1.textContent = `© ${new Date().getFullYear()}`;
copyright2.textContent = `© ${new Date().getFullYear()}`;

let oLastModif = document.getElementById("lastupdate").innerText = document.lastModified;
let oLastModif1 = document.getElementById("lastupdate1").innerText = document.lastModified;
let oLastModif2 = document.getElementById("lastupdate2").innerText = document.lastModified;

function toggleMenu() {
    document.getElementById('primary-nav').classList.toggle('open');
    document.getElementById('hamburger-button').classList.toggle('open');
}

const x = document.getElementById('hamburger-button')
x.onclick = toggleMenu;

let numVisits = Number(window.localStorage.getItem("visits-ls")); 
// Using the Number() function ensures that if the storage item does not exist, it will be converted into a zero (0) which helps on the if block condition.

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

