console.log("bakChange.js loaded");

var dsd = document.getElementById("dsd");
var d6 = document.getElementById("d6");
var pers = document.getElementById("personal");

dsd.addEventListener("mouseover", function() {changeImg(dsd);});
dsd.addEventListener("mouseout", function() {changeBack(dsd);});
d6.addEventListener("mouseover", function() {changeImg(d6);});
d6.addEventListener("mouseout", function() {changeBack(d6);});
pers.addEventListener("mouseover", function() {changeImg(pers);});
pers.addEventListener("mouseout", function() {changeBack(pers);});

function changeImg(x) {
	x.style.backgroundImage = "url('blackCircuit.jpg')";
}

function changeBack(x) {
	x.style.backgroundImage = "";
}

// research event handler
// add event listener only has anonymous function so no parentheses in an eventListener function
// next add gradual mouseover for 	