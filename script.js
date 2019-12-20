
var _ = require('lodash');
console.log(_);
var array = [1,2,3,4,5,6];
console.log('answer',_.without(array,3));



//browserify script.js > bundle.js

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background=
    "linear-gradient(to right,"
    +color1.value
    +","
    +color2.value
    
    +" )";
}
color1.addEventListener("input" , setGradient);
color2.addEventListener("input",setGradient);