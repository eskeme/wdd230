const date = new Date();
const formatter = new Intl.DateTimeFormat('en', {month: 'long'});
const month = formatter.format(new Date());
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const copyright = document.querySelector('#copyright');

let day = date.getDate();
let year = date.getFullYear();
let day_week = weekday[date.getDay()]

// This arrangement can be altered based on how we want the date's format to appear.
document.getElementById("current_date").innerText = `${day_week}, ${day} ${month} ${year}`;

copyright.textContent = `© ${new Date().getFullYear()}`;

let oLastModif = document.getElementById("lastupdate").innerText = document.lastModified;

function toggleMenu() {
    document.getElementById('primary-nav').classList.toggle('open');
    document.getElementById('hamburger-button').classList.toggle('open');
}

const x = document.getElementById('hamburger-button')
x.onclick = toggleMenu;