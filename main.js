// ------------- Tekst, kleur en opmaak
var faseVanDeDag = new Date();
var uren = faseVanDeDag.getHours();

if (uren >= 6 && uren < 12) {
	text = "Good morning!";
	textOnderschrift = "Don't forget to put on some clothes before you go out the door.";
	document.getElementById("stars").style.display = "none";
	document.getElementById("sun").style.display = "none";
	document.getElementById("clouds").style.display = "none";
}

else if (uren >= 12 && uren < 18) {
	text = "Good afternoon!";
	textOnderschrift = "Have you made someone laugh already? It's essential for a day of success.";
	document.getElementById("birds").style.display = "none";
	document.getElementById("stars").style.display = "none";
	document.getElementById("clouds").style.display = "none";
}

else if (uren >= 18 && uren <= 23) {
	text = "Good evening!";
	textOnderschrift = "You can find you rubber duck under your pillow to use in the bath tub tonight.";
	document.getElementById("textGood").style.color = "white";
	document.getElementById("textOnderschrift").style.color = "white";
	document.getElementById("clock").style.color = "white";
	document.getElementById("date").style.color = "white";
	document.getElementById("tekstVoorDatum").style.color = "white";
	document.getElementById("stars").style.display = "none";
	document.getElementById("sun").style.display = "none";
	document.getElementById("birds").style.display = "none";
}

else {
	text = "Good night!";
	textOnderschrift = "If you have trouble falling asleep, ask someone to sing you a lullaby.";
	document.getElementById("textGood").style.color = "white";
	document.getElementById("textOnderschrift").style.color = "white";
	document.getElementById("clock").style.color = "white";
	document.getElementById("date").style.color = "white";
	document.getElementById("tekstVoorDatum").style.color = "white";
	document.getElementById("birds").style.display = "none";
	document.getElementById("sun").style.display = "none";
	document.getElementById("clouds").style.display = "none";
}

document.getElementById("textGood").innerHTML = text;
document.getElementById("textOnderschrift").innerHTML = textOnderschrift;



// ------------- Achtergrond
var achtergrondPerFase = new Date();
var uren = achtergrondPerFase.getHours();

if (uren >= 6 && uren < 12) {
	document.body.style.backgroundImage = "url('img/backgroundMorning.jpeg')";
}

else if (uren >= 12 && uren < 18) {
	document.body.style.backgroundImage = "url('img/backgroundAfternoon.jpeg')";
}

else if (uren >= 18 && uren <= 23) {
	document.body.style.backgroundImage = "url('img/backgroundEvening.jpeg')";
}

else {
	document.body.style.backgroundImage = "url('img/backgroundNight.jpeg')";
}

// ------------- Klok werkend krijgen
function realtimeClock() {

	var rtClock = new Date();

	var hours = rtClock.getHours();
	var minutes = rtClock.getMinutes();
	var seconds = rtClock.getSeconds();

	var amPm = (hours >= 12) ? "PM" : "AM";

	hours = hours % 12;
	hours = (hours ? hours : 12);

	hours = ("0" + hours).slice(-2);
	minutes = ("0" + minutes).slice(-2);
	seconds = ("0" + seconds).slice(-2);

	document.getElementById('clock').innerHTML = 
		hours + "    :    " + minutes + "    :    " + seconds + "     "+ amPm;
	var t = setTimeout(realtimeClock, 500);
}

// ------------- Datum werkend krijgen
var today = new Date();
var date = (today.getMonth() + 1 ) + '  -  ' + today.getDate() + '  -  ' + today.getFullYear();
	document.getElementById('date').innerHTML = 
	date;