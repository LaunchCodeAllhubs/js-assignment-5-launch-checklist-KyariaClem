// Write your JavaScript code here!


window.addEventListener("load", function() {
// calling form submission fucntion for validation


//formSubmission();

// setting form variable for form
let form = document.querySelector("testForm")

// create objects- for user input box on form submission

// call form submission function

const pilot = document.getElementById('pilotName')
const coPilot = document.querySelector("input[name=copilotName]")
const fuelLevel = document.querySelector("input[name=fuelLevel]")
const cargoMass = document.querySelector("input[name=cargoMass]")
const submitButton = document.getElementById("formSubmit")


// create objects for lauch status in index.html
const launchStatus = document.getElementById('launchStatus')
const pilotStatus = document.getElementById('pilotStatus')
const coPilotStatus = document.getElementById('copilotStatus')
const fuelStatus = document.getElementById('fuelStatus')
const cargoStatus = document.getElementById('cargoStatus')
const faultyItems = document.getElementById('faultyItems')

//
const launchStatusCheckList = document.getElementById("launchStatus")

submitButton.addEventListener("click", function(event){

// created isSubmitted to equal forsubmission function
const isSubmitted = formSubmission(window.document, faultyItems.value, pilot.value, coPilot.value, fuelLevel.value, cargoMass.value);
console.log(isSubmitted)

// preventDefauilt
event.preventDefault()

if(isSubmitted) {

    // pilot status event listner 
    //pilot inner html equal to template literal
        pilotStatus.innerHTML = ` Pilot ${pilot.value} is ready for launch`
        console.log(pilotStatus)
    
       
       // co-piolt event listener
       coPilotStatus.innerHTML = `Co-Pilot ${coPilot.value} is ready for launch`
       console.log(coPilotStatus)
      
       
       // fuel level event listener
   
       // did isSubmitted so launch status can show if submission is valid, so if field is empty then t wont show an fuel level is under 10000
       if(isSubmitted & fuelLevel.value < 10000) {
           fuelStatus.innerHTML = `Fuel level too low for launch`
           console.log(fuelStatus)
           faultyItems.style.visibility = 'visible'
           launchStatus.innerHTML = "Shuttle Not Ready for launch"
           launchStatus.style.color = 'red';
           console.log(launchStatus)
       
           } else if (fuelLevel.value >= 10000 || cargoMass.value === null) {
           launchStatus.innerHTML = "Shuttle is ready for launch"
           launchStatus.style.color = "#419F6A";
           faultyItems.style.visibility = 'hidden'
           } else {
           
           }
               
       if(cargoMass.value > 10000) {
           faultyItems.style.visibility = 'visible'
           cargoStatus.innerHTML = "Cargo mass too heavy for launch"
           launchStatus.innerHTML = "Shuttle Not Ready for Launch"
           launchStatus.style.color = "rgb(199, 37, 78)";
       } else if (cargoMass.value === "") {
           
           faultyItems.style.visibility = 'hidden' 
       }

event.preventDefault()

}

    
});
// use const isSubmitted varibale for if conditional to run code below



let planetsReturned = myFetch()
let listedPlanets;
// Set listedPlanetsResponse equal to the value returned by calling myFetch()
let listedPlanetsResponse = planetsReturned
listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
    console.log(listedPlanets);
}).then(function () {
    console.log(listedPlanets);
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let planetIndex = pickPlanet(listedPlanets)
    console.log(planetIndex)
    // set randomPlanet varibale equal to random planet index
    let randomPlanet = listedPlanets[planetIndex]
    console.log(randomPlanet)
    // passed listPlanets into pick Planet
    pickPlanet(listedPlanets)
    
    // calling destioattio info with parametes passed in
    addDestinationInfo(window.document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image)

})

   
});