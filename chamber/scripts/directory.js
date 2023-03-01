const url = 'https://eskeme.github.io/wdd230/chamber/json/data.json'

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.business);
    displayBusiness(data.business);
  }
  
  getBusinessData();
  
  const displayBusiness = (business) => {
    const cards = document.querySelector('div.businesses');
  
    business.forEach((business) => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let h3 = document.createElement('h3');
      let portrait = document.createElement('img');
  
      h2.textContent = `${business.business_name}`;
      h3.innerHTML = `${business.service}<br>Location: ${business.location}<br>Contact Number: ${business.contact_number}`;
  
      portrait.setAttribute('src', business.image);
      portrait.setAttribute('alt', `Image of ${business.business_name}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      card.appendChild(h2);
      card.appendChild(h3)
      card.appendChild(portrait);
  
      cards.appendChild(card);
    }); // end of forEach loop
};