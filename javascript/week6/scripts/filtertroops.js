const groundCheckbox = document.getElementById('ground-checkbox');
const airCheckbox = document.getElementById('air-checkbox');

groundCheckbox.addEventListener('change', () => {
  if (groundCheckbox.checked) {
    airCheckbox.checked = false;
  }
});

airCheckbox.addEventListener('change', () => {
  if (airCheckbox.checked) {
    groundCheckbox.checked = false;
  }
});

const url = '../data/troops.json';

async function getTroopData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.troops);
  displayTroops(data.troops);
}

getTroopData();

const displayTroops = (troops) => {
  const cards = document.querySelector('div#troops-container');

  const groundCheckbox = document.getElementById('ground-checkbox');
  const airCheckbox = document.getElementById('air-checkbox');
  const attackRadio = document.getElementById('attack-radio');
  const healthRadio = document.getElementById('health-radio');
  const speedRadio = document.getElementById('movement-radio');

  const applyFilters = () => {
    const filteredTroops = troops.filter((troop) => {
      if (groundCheckbox.checked && troop.type !== 'ground') {
        return false;
      }
      if (airCheckbox.checked && troop.type !== 'air') {
        return false;
      }
      return true;
    });

    if (attackRadio.checked) {
      filteredTroops.sort((a, b) => b.attack - a.attack);
    } else if (healthRadio.checked) {
      filteredTroops.sort((a, b) => b.health - a.health);
    } else if (speedRadio.checked) {
      filteredTroops.sort((a, b) => b.speed - a.speed);
    }

    cards.innerHTML = '';
    filteredTroops.forEach((troop) => {
      let card = document.createElement('section');
      let imageWrapper = document.createElement('div');
      let infoWrapper = document.createElement('div');
      let h2 = document.createElement('h2');
      let p = document.createElement('p');
      let portrait = document.createElement('img');

      h2.textContent = `${troop.name}`;
      p.innerHTML = `Attack: ${troop.attack}<br>Health: ${troop.health}<br>Speed: ${troop.speed}<br><br> "${troop.comments}"`;

      portrait.setAttribute('src', troop.image);
      portrait.setAttribute('alt', `Image of ${troop.name}`);
      portrait.setAttribute('loading', 'lazy');

      imageWrapper.appendChild(portrait);
      infoWrapper.appendChild(h2);
      infoWrapper.appendChild(p);

      card.appendChild(imageWrapper);
      card.appendChild(infoWrapper);

      cards.appendChild(card);
    });
  }

  groundCheckbox.addEventListener('change', applyFilters);
  airCheckbox.addEventListener('change', applyFilters);
  attackRadio.addEventListener('change', applyFilters);
  healthRadio.addEventListener('change', applyFilters);
  speedRadio.addEventListener('change', applyFilters);

  applyFilters();
};