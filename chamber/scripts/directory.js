const url = 'json/data.json';
let isTableView = false;

async function getBusinessData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.business);
  displayBusiness(data.business);
}

getBusinessData();

const displayBusiness = (business) => {
  const cards = document.querySelector('.businesses');
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const trHead = document.createElement('tr');
  const th1 = document.createElement('th');
  const th2 = document.createElement('th');
  const th3 = document.createElement('th');

  th1.textContent = 'Business Name';
  th2.textContent = 'Location';
  th3.textContent = 'Contact Number';

  trHead.appendChild(th1);
  trHead.appendChild(th2);
  trHead.appendChild(th3);
  thead.appendChild(trHead);
  table.appendChild(thead);
  table.appendChild(tbody);

  business.forEach((business) => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let portrait = document.createElement('img');

    h2.textContent = `${business.business_name}`;
    const locationH3 = document.createElement("h3");
    locationH3.textContent = `${business.location}`;
    locationH3.classList.add('full-address');
    const contactH3 = document.createElement("h3");
    contactH3.textContent = `${business.contact_number}`;
    const websiteLink = document.createElement("a");
    websiteLink.href = business.website;
    websiteLink.target = "_blank";
    websiteLink.textContent = "Website Link";

    card.style.textAlign = "center";

    portrait.setAttribute('src', business.image);
    portrait.setAttribute('alt', `Image of ${business.business_name}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('height', '200');

    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(locationH3);
    card.appendChild(contactH3);
    card.appendChild(websiteLink);
    tbody.appendChild(createTableRow(business));

    cards.appendChild(card);
  });

  function createTableRow(business) {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    td1.textContent = business.business_name;
    td2.textContent = business.location;
    td3.textContent = business.contact_number;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    return tr;
  }

  const toggleButton = document.createElement('button');
  toggleButton.classList.add('toggle-view-btn');
  toggleButton.textContent = 'Table View';

  const gridButton = document.querySelector('#grid');
  const listButton = document.querySelector('#list');
  const display = document.querySelector('.businesses');

  gridButton.addEventListener('click', () => {
    display.classList.remove('list');
    display.classList.add('grid');
  });

  listButton.addEventListener('click', () => {
    display.classList.remove('grid');
    display.classList.add('list');
  });

  toggleButton.addEventListener('click', () => {
    isTableView = !isTableView;
    if (isTableView) {
      display.style.display = 'none';
      table.style.display = 'table';
      toggleButton.textContent = 'Card View';
    } else {
      display.style.display = 'flex';
      table.style.display = 'none';
      toggleButton.textContent = 'Table View';
    }
  });
}

const locationH3 = document.createElement("h3");
locationH3.textContent = `${business.location}`;
locationH3.classList.add('location');

const contactH3 = document.createElement("h3");
contactH3.textContent = `${business.contact_number}`;
contactH3.classList.add('phone-number');