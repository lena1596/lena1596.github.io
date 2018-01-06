/*

Name: 		Lena Chiu
Course: 	CIS 115
Term: 		Fall 2017
Assignment: Project 3

*/

window.onload = function(){

	colorList();
	sr();
	drawFlower("IndianRed", 1, 0.2);

	let displayButton = document.querySelector("#display");
	displayButton.addEventListener("click", drawTextBG);

	var colorDropdown = document.querySelector("#colorDropdown");
	colorDropdown.addEventListener("change", changeColors);
	
	var clearButton = document.querySelector("#clear");
	clear.addEventListener("click",redraw);

}

function image (){
	var canvas = document.querySelector("#canvas");
	var ctx = canvas.getContext("2d");
	var image = new Image();
	image.onload = function () {
		ctx.drawImage(image, 40, 40, 120, 120);
	}
	image.src = "http://www.avhomesinc.com/wp-content/uploads/2016/08/c4fa477949c39a30c3e4d9339bb447df.jpg";
}


let colors = [ 	"white",
				"PeachPuff",
				"Plum",
				"PowderBlue",
				"PaleGreen",
				"NavajoWhite"]


function colorList() {
	let colorList = document.querySelector("#colorDropdown");

	let option1 = document.createElement("option");
	option1.value = 1;
	option1.text = colors[1];

	let option2 = document.createElement("option");
	option2.value = 2;
	option2.text = colors[2];

	let option3 = document.createElement("option");
	option3.value = 3;
	option3.text =colors[3];

	let option4 = document.createElement("option");
	option4.value = 4;
	option4.text =colors[4];

	let option5 = document.createElement("option");
	option5.value = 5;
	option5.text =colors[5];


	colorList.appendChild(option1);
	colorList.appendChild(option2);
	colorList.appendChild(option3);
	colorList.appendChild(option4);
	colorList.appendChild(option5);
}


function handleDisplayClick() {
	var textInput = document.querySelector("#textInput")
	var userInput = textInput.value;
	if (userInput == "") {
		alert("please enter a text")
	}
	else{
		/*var index = document.querySelector("#colorDropdown").value;
		var canvas = document.querySelector("#canvas");
		var ctx = canvas.getContext("2d");
		ctx.fillStyle = "red";
		ctx.fillRect(0, 0, canvas.width, canvas.height);*/
		
		var canvas = document.querySelector("#canvas");
		var ctx = canvas.getContext("2d");
		ctx.font = "30px Arial";
		ctx.fillText(userInput, 250, 40);
	}
}

function drawTextBG (){
	var textInput = document.querySelector("#textInput")
	var userInput = textInput.value;
	var canvas = document.querySelector("#canvas");
	var ctx = canvas.getContext("2d");
	var index = document.querySelector("#colorDropdown").value;

	if (userInput == "") {
		alert("please enter a text")
	}
	else{
		ctx.save();		//save current state
		ctx.font = "30px Arial";
		ctx.textBaseline = "top";	//draw text from top
		ctx.fillStyle = colors[index];	//color for BG
		var width = ctx.measureText(userInput).width;	//get width of text
		ctx.fillRect(0, 0, canvas.width, canvas.height);	
		ctx.fillStyle = "black";
		ctx.textAlign = "center";
		ctx.fillText(userInput, 350, 40);
	}
	sr();
}

function sr(){
	car();
	circle();
	sun();
	image();
	drawFlower("IndianRed", 1, 0.2);
}

function changeColors (){
	//get user color option
	var index = document.querySelector("#colorDropdown").value;

	var canvas = document.querySelector("#canvas");
	var ctx = canvas.getContext("2d");
	ctx.save();	
	ctx.fillStyle = colors[index];
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	colorList();
	sr();
	//draw();
	image();
	drawTextBG();
	/*var colorDropdown = document.querySelector("#colorDropdown");
	colorDropdown.addEventListener("click", changeColors());*/
}

function redraw (){
	var canvas = document.querySelector("#canvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.save();		//save current state
		
		function drawText(){
			var textInput = document.querySelector("#textInput")
			var userInput = textInput.value;
			ctx.font = "30px Arial";
			ctx.textBaseline = "top";	//draw text from top
			ctx.fillStyle = "black";
			ctx.textAlign = "center";
			ctx.fillText(userInput, 350, 40);
	}
	drawText();
	sr();
}

/*draw the tires
two different cordinates*/

function circle (){
	var canvas = document.querySelector("#canvas");
	var ctx = canvas.getContext("2d");

	ctx.beginPath();
	ctx.arc(230,360,38,0, 2*Math.PI, false)
	ctx.closePath();
	ctx.strokeStyle = "DarkBlue";
	ctx.lineWidth = 5;
	ctx.stroke();
	ctx.fillStyle = "CornflowerBlue";
	ctx.fill();

	ctx.beginPath();
	ctx.arc(470,360,38,0,2*Math.PI,false)
	ctx.closePath();
	ctx.strokeStyle = "DarkBlue";
	ctx.lineWidth = 5;
	ctx.stroke();
	ctx.fillStyle = "CornflowerBlue";
	ctx.fill();
}

function sun (){
	var canvas = document.querySelector("#canvas");
	var ctx = canvas.getContext("2d");

	ctx.beginPath();
	ctx.arc(680,40,38,0, 2*Math.PI, false)
	ctx.closePath();
	ctx.strokeStyle = "Gold";
	ctx.lineWidth = 5;
	ctx.stroke();
	ctx.fillStyle = "Gold";
	ctx.fill();
}

function car (){
	var canvas = document.querySelector("#canvas");
	var ctx = canvas.getContext("2d");

	ctx.beginPath();
	ctx.moveTo(200,360);
	ctx.lineTo(500,360);
	ctx.lineTo(550,360);
	ctx.lineTo(550,280);
	ctx.lineTo(500,280);
	ctx.lineTo(420,220);
	ctx.lineTo(280,220);
	ctx.lineTo(200,280);
	ctx.lineTo(150,280);
	ctx.lineTo(150,360);
	ctx.closePath();
	ctx.strokeStyle = "black";
	ctx.lineWidth = 5;
	ctx.stroke();
}

function createPetal(length, width){
	var path = new Path2D();

	path.moveTo(0,0); //draw outter line
	path.lineTo(length * 0.3, -width);
	path.lineTo(length * 0.8, -width);
	path.lineTo(length, 0);
	path.lineTo(length * 0.8, width);
	path.lineTo(length * 0.3, width);
	path.closePath(); //the path goes back to the start
	path.moveTo(0,0);
	path.lineTo(length, 0); //create the line down the middle
	return path;
}


// x,y is center
// startAt is the angle of the first

function drawPetals(x, y, count, startAt, petal){
	var canvas = document.querySelector("#canvas");
	var ctx = canvas.getContext("2d");

	var step = (Math.PI *2) / count;
	ctx.setTransform(1, 0, 0, 1, x, y); //set center
	ctx.rotate(startAt); //set start angle

	for (var i = 0; i < count; i++) {
		ctx.stroke(petal); //draw a petal
		ctx.rotate(step); //rotate to the next
	}
	ctx.setTransform(1, 0, 0, 1, 0, 0); //restore default
}


function drawFlower (color, lineWidth, fitScale){
	var canvas = document.querySelector("#canvas");
	var ctx = canvas.getContext("2d");

	ctx.strokeStyle = color;
	ctx.lineWidth = lineWidth;
	var size = Math.min(ctx.canvas.width, ctx.canvas.height) * fitScale * 0.5


	ctx.beginPath();
	ctx.moveTo(100, 300);
	ctx.lineTo(100, 400);
	ctx.moveTo(600, 300);
	ctx.lineTo(600, 400);
	ctx.closePath();
	ctx.strokeStyle = color;
	ctx.lineWidth = 1;	
	

	ctx.stroke();
	ctx.arc(100, 300, size * 0.15, 0, Math.PI * 2);
	ctx.arc(600, 300, size * 0.15, 0, Math.PI * 2);
	ctx.fillStyle = color;
	ctx.fill();
	drawPetals(100, 300, 5, 0, createPetal(size, size * 0.2));
	drawPetals(600, 300, 5, 0, createPetal(size, size * 0.2));
}

class rectangle {
	constructor(width, length, dX, dY){
		this.width = width;
		this.length = length;
		this.dX = dX;
		this.dY = dY;
	}

	drawRec(){
		var canvas = document.querySelector("#canvas");
		var ctx = canvas.getContext("2d");
		
		ctx.beginPath();
		ctx.moveTo(this.width, this.length);
		ctx.lineTo(this.width + this.dX, this.length);
		ctx.lineTo(this.width + this.dX, this.length + this.dY);
		ctx.closePath();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 3;
		ctx.stroke();

	}

}

let rect = [];
rect.push(new rectangle(300, 300, 10,10));


