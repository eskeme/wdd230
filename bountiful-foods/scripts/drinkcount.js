const form = document.getElementById("drink-form");
const drinkCountDisplay = document.getElementById("drink-count");

// Get the current drink count from local storage or set it to 0
let drinkCount = localStorage.getItem("drinkCount") || 0;

// Update the drink count display
drinkCountDisplay.textContent = `${drinkCount}`;

// Handle form submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission behavior
  const formData = new FormData(form);

  // Increment the drink count and store it in local storage
  drinkCount++;
  localStorage.setItem("drinkCount", drinkCount);

  // Update the drink count display
  drinkCountDisplay.textContent = `${drinkCount}`;

  // Display the order details and nutrition information as before
  // ...
});