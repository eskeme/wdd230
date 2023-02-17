const date = new Date();
const formatter = new Intl.DateTimeFormat('en', {month: 'long'});
const month = formatter.format(new Date());
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const copyright = document.querySelector('#copyright');

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

// get the current date and time
const today = new Date();

// check if there is a previous site visit stored in local storage
if (localStorage.getItem('lastVisit')) {
  // get the date of the last site visit from local storage
  const lastVisit = new Date(localStorage.getItem('lastVisit'));
  
  // calculate the time difference between today and the last site visit
  const diffInMilliseconds = Math.abs(today - lastVisit);
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.ceil(diffInHours / 24);
  const resultElement = document.getElementById('visits');
  resultElement.innerHTML = `${diffInDays} days`;

  
  console.log(`The time difference between today and the last site visit is:`);
  console.log(`${diffInMilliseconds} milliseconds`);
  console.log(`${diffInSeconds} seconds`);
  console.log(`${diffInMinutes} minutes`);
  console.log(`${diffInHours} hours`);
  console.log(`${diffInDays} days`);
}

// store the current date and time as the last site visit in local storage
localStorage.setItem('lastVisit', today);