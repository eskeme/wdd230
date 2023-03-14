/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myInfo = {};
// Step 2: Inside of the object, add a property named name with a value of your name as a string
myInfo.name = "Justine Insong";
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
myInfo.photo = "images/justine-insong.jpg";
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
myInfo.favoriteFoods = ["Hamburger", "Sushi", "French Fries"];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
myInfo.hobbies = ["Sleeping", "Watching movies", "Playing video games"];
// Step 6: Add another property named placesLived with a value of an empty array
myInfo.PlacesLived = [];
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
myInfo.PlacesLived.push({ place: "", length: ""});
// Step 8: For each property, add appropriate values as strings
myInfo.PlacesLived[0].place = "Davao City";
myInfo.PlacesLived[0].length = "14 years";
// Step 9: Add additional objects with the same properties for each place you've lived
myInfo.PlacesLived.push({ place: "Cagayan de Oro City", length: "6 years"});
myInfo.PlacesLived.push({ place: "Ozamiz City", length: "4 years"});
myInfo.PlacesLived.push({ place: "Panabo City", length: "2 years"});

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById("name").textContent = myInfo.name
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").setAttribute("src", myInfo.photo);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").setAttribute("alt", myInfo.name)
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let favoriteFoodsList = document.getElementById("favorite-foods");

myInfo.favoriteFoods.forEach(function(food){
let listItem = document.createElement("li");
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
listItem.textContent = food;
favoriteFoodsList.appendChild(listItem);
});
// Step 6: Repeat Step 4 for each hobby in the hobbies property
let hobbiesList = document.getElementById("hobbies");
myInfo.hobbies.forEach(function(hobby){
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
let listItem = document.createElement("li")
listItem.textContent = hobby;
hobbiesList.appendChild(listItem);
});
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
let placesLivedList = document.getElementById("places-lived");
myInfo.PlacesLived.forEach(function(place) {
let HowLong = document.createElement("dt");
HowLong.textContent = place.place;
let cities = document.createElement("dd");
cities.textContent = place.length;
// Step 9:Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
placesLivedList.appendChild(HowLong);
placesLivedList.appendChild(cities);
});