// change the color of the body element to #6f84a5
// use document.body
var bkgdcolor = document.body;
bkgdcolor.style.background = "#6f84a5";

// change the display property of the <a> elements to be block
// use document.getElementsByTagName()
var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
	links[i].style.display = "block";
}

// change the font size of the first paragraph to be 20px
// use document.getElementById()
// all properties in css that are hyphenated should be camelcased
var par1 = document.getElementById("p1");
par1.style.fontSize = "20px";

// change the color of the elements with class "sam" to rgb(24, 84, 69)
// use document.getElementsByClassName()
var sam = document.getElementsByClassName("sam");
for (var i = 0; i < sam.length; i++) {
	sam[i].style.color = "rgb(24, 84, 69)";
}

// change the color of the elements with class "angel" to rgb(77, 24, 84)
// use document.querySelectorAll()
var angel = document.querySelectorAll(".angel");
for (var i = 0; i < angel.length; i++) {
	angel[i].style.color = "rgb(77, 24, 84)";
}

// change the font size of the fourth paragraph to be 20px
// use document.querySelector()
var par4 = document.getElementById("p4");
par4.style.fontSize = "20px";

// center all the paragraphs
var allpar = document.getElementsByTagName("p");
for (var i = 0; i < allpar.length; i++) {
	allpar[i].style.textAlign = "center";
}

// bonus: select the first paragraph using each of the five different
// methods
var p1 = document.getElementById("p1");
var p1 = document.getElementsByClassName("sam");
var p1 = document.getElementsByTagName("p");
var p1 = document.querySelector("p");
var p1 = document.querySelectorAll("p")[0];