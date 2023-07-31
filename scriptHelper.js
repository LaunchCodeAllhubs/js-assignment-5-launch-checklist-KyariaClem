// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const missionTarget = document.getElementById("missionTarget")
   missionTarget.innerHTML =
  `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
   `

}

function validateInput(testInput) {
   if(testInput === "") {
    let alertEmpty;
    return alertEmpty = alert("Empty")

   } else if(isNaN(testInput)) {
    return "Not a Number"
   } else {
     return "Is a Number"
   }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    if (pilot === "" || copilot === "" || fuelLevel === "" ||cargoLevel === "") {

        alert("All fields are required!");
        return false
    } 

    if(isNaN(fuelLevel) || isNaN(cargoLevel)){
        alert("please enter valid fields")
        return false
    } 
    return true
}

//const missonTarget = document.getElementById("")
async function myFetch() {
    let planetsReturned;
    //let data;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
    return response.json()
    });
   // data = await planetsReturned.json();

   // console.log(data)
  return planetsReturned
}

function pickPlanet(planets) {
    // set a variable for math random method
return Math.floor(Math.random() * (planets.length))
    // set variable for plaent to hold random index
//return addDestinationInfo()
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
