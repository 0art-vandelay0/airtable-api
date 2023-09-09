import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import AgeCalc from './js/ageCalc.js';

function handleEarthAgeForm(event) {
    event.preventDefault();
    document.querySelector('#response').innerText = null;
    const earthAgeInput = document.querySelector('#earth-age-input').value;
    const age = new AgeCalc(earthAgeInput);
    const mercAge = age.getMercuryAge();
    const venusAge = age.getVenusAge();
    const marsAge = age.getMarsAge();
    const jupiterAge = age.getJupiterAge();
    const pTag1 = document.createElement("p");
    const pTag2 = document.createElement("p");
    const pTag3 = document.createElement("p");
    const pTag4= document.createElement("p");
    pTag1.append(`You are ${mercAge} years old on Mercury.`);
    pTag2.append(`You are  ${venusAge} years old on Venus.`);
    pTag3.append(`You are  ${marsAge} years old on Mars.`);
    pTag4.append(`You are  ${jupiterAge} years old on Jupiter.`);
    document.querySelector('#response').append(pTag1);
    document.querySelector('#response').append(pTag2);
    document.querySelector('#response').append(pTag3);
    document.querySelector('#response').append(pTag4);
    document.querySelector('#planet-ages-div').removeAttribute("class", "hidden");
    document.querySelector('#years-passed-form').removeAttribute("class", "hidden");
}

function handleYearsPassedForm(event) {
    event.preventDefault();
    document.querySelector('#response2').innerText = null;
    // add years passed UI logic here
}

function handleYearsFutureForm(event) {
    event.preventDefault();
    document.querySelector('#response3').innerText = null;
    // add years in the future UI logic here
}

window.addEventListener("load", function() {
    document.querySelector("#earthAge-form").addEventListener("submit", handleEarthAgeForm);
    document.querySelector("#years-passed-form").addEventListener("submit", handleYearsPassedForm);
    document.querySelector("#years-passed-form").addEventListener("submit", handleYearsFutureForm);
});
