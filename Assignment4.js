var selectedColor = 0;

var maininput = document.createElement("input");
maininput.id = "userinput";
maininput.setAttribute("type", "text");
maininput.setAttribute ("value", "Enter size between 1-50");

var colors = ["#000000", "#FF0000", "#FFFF00", "#0000FF", "#008001"];

function queryUser() {
	var input = document.createElement("p");
	document.body.appendChild(input);
	input.className = "maininputclass";
	var inputmessage = document.createTextNode("What size canvas would you like to draw on?:");
	input.appendChild(inputmessage);
	input.appendChild(maininput);

	var submit = document.createElement("BUTTON");
	submit.id = "submitId";
	var submitmessage = document.createTextNode("Enter");
	submit.appendChild(submitmessage);
	input.appendChild(submit);

	document.getElementById("submitId").onclick = gridGenerator;
}
queryUser();

for (var m = 0; m < colors.length; m++) {
	var colorsdiv = document.createElement("div");
	colorsdiv.id = colors[m];
	colorsdiv.className = "colorsClass";
	colorsdiv.style.backgroundColor = colors[m];
	colorsdiv.addEventListener("click", colorPicker);
	document.body.appendChild(colorsdiv);
}
var divcontainer = document.createElement("div");
divcontainer.id = "container";
document.body.appendChild(divcontainer);

function gridGenerator() {

var x = document.getElementById("userinput").value;

	if (x < 50) {
	for (var i = 0; i < x; i++) {
    var row = document.createElement("div");

    for (var j=0; j < x; j++) {

	var creatediv = document.createElement("div");
	creatediv.className = "boxClass";
	creatediv.addEventListener("mousedown", draw);
	row.appendChild(creatediv);
	}
	divcontainer.appendChild(row);
	}
	}

	else {
		var retry  = document.createElement("p");
		retry.className = "retryclass";
		document.body.appendChild(retry);
		var retrymessage = document.createTextNode("Please enter a canvas size less than 50");
		retry.appendChild(retrymessage);
		queryUser;

	}
		var eraserbutton = document.createElement("BUTTON")
		eraserbutton.id = "eraserId";
		var erasermessage = document.createTextNode("Eraser");
		eraserbutton.appendChild(erasermessage);
		document.body.appendChild(eraserbutton);
		eraserbutton.addEventListener("mouseover", draw);
}

function colorPicker(e) {
	selectedColor = e.target.id;
}
function draw(e) {
	if (selectedColor==0) {
		selectedColor = "#000000";
	}
	else if (this.id == "eraserId") {
		selectedColor = "#FFFFFF";
	}
	e.target.style.backgroundColor = selectedColor;
}