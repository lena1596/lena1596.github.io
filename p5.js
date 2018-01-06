/*

Name: 		Lena Chiu
Course: 	CIS 115
Term: 		Fall 2017
Assignment: Project 5

*/

let shapeInfo = {
	canvas: null,
	context: null,
	
	x: null, //for the circle
	y: null,
	radius: 15,
	dX: 2, //amount to change
	dY: 0.5,//these two numbers are different that goes to an angle

	paddleX: null,
	paddleY: null,
	paddleWidth: 15, //image width
	paddleHeight: 40, //image height
	paddleDy:3,

	score: 0
};
var upPressed = false;
var	downPressed = false;
var colorIndex = 0;

let colors = [  "PeachPuff",
				"Plum",
				"PowderBlue",
				"PaleGreen",
				"NavajoWhite"]


window.onload = function() {
	shapeInfo.canvas = document.querySelector("#canvas"); //get canvas and canvas context objects
	shapeInfo.context = shapeInfo.canvas.getContext("2d"); 
	restart = document.querySelector("#button");


	window.addEventListener("keydown", handleKeyDown, false);
	window.addEventListener("keyup", handleKeyUp, false);
	restart.addEventListener("click", restartBtn);
	

	//setInterval(ball, 25); //set timer to animate image in canvas
	//how fast you update dX, dY affect the speed of the image moving
	
	shapeInfo.x = shapeInfo.canvas.width / 2;
	shapeInfo.y = shapeInfo.canvas.height / 2;
	shapeInfo.paddleX = 0;
	shapeInfo.paddleY = shapeInfo.canvas.height / 2;
	
	draw();
	
}


function draw() {
	shapeInfo.context.clearRect(0, 0, shapeInfo.canvas.width, shapeInfo.canvas.height);
	//clear entire canvas
	// changeColors();
	ball();
	paddle();
	drawScore();
	//collisionDetection();

	shapeInfo.x += shapeInfo.dX;
	shapeInfo.y += shapeInfo.dY; //shift image location


	//up and down boundaries check
	if (shapeInfo.y + shapeInfo.dY < shapeInfo.radius || shapeInfo.y + shapeInfo.dY > shapeInfo.canvas.height - shapeInfo.radius) {
		shapeInfo.dY = -shapeInfo.dY;
	}

	//left side check
	if ( shapeInfo.x + shapeInfo.dX > shapeInfo.canvas.width - shapeInfo.radius) {
		shapeInfo.dX = -shapeInfo.dX;
	}
	else if(shapeInfo.x + shapeInfo.dX < shapeInfo.radius + shapeInfo.paddleWidth){ // at the left most

		if (shapeInfo.y > shapeInfo.paddleY && shapeInfo.y < shapeInfo.paddleY + shapeInfo.paddleHeight){
			shapeInfo.dX = -shapeInfo.dX; //in between the paddle on the left
		}
		else if (shapeInfo.y < shapeInfo.paddleY - shapeInfo.radius || shapeInfo.y > shapeInfo.paddleY + shapeInfo.paddleHeight +shapeInfo.radius) {
			if (shapeInfo.x + shapeInfo.dX < shapeInfo.radius ) {
				console.log("over");
			shapeInfo.score++;
			console.log(shapeInfo.score);
			shapeInfo.x = shapeInfo.canvas.width / 2;
			shapeInfo.y = shapeInfo.canvas.height / 2;
			if (shapeInfo.score % 2 !== 0) {
				shapeInfo.dX = 1.5, //amount to change
				shapeInfo.dY = -1//these two numbers are different that goes to an angle
				}
			}
			
		}
	}
	
	//paddle control	
	if (shapeInfo.paddleY > 0 && upPressed) {
		shapeInfo.paddleY -= shapeInfo.paddleDy;
	}
	if (downPressed && shapeInfo.paddleY < shapeInfo.canvas.height - shapeInfo.paddleHeight) {
		shapeInfo.paddleY += shapeInfo.paddleDy;
	}
	window.requestAnimationFrame(draw);
}

function ball() {
	
	shapeInfo.context.beginPath();
	shapeInfo.context.arc(shapeInfo.x, shapeInfo.y, shapeInfo.radius, 0, 2*Math.PI);
	shapeInfo.context.stroke(); //draw the circle
	shapeInfo.context.closePath();

	shapeInfo.context.fillStyle = `${colors[colorIndex]}`;
	shapeInfo.context.fill();
	if (++colorIndex > colors.length -1) colorIndex = 0;
	
}

function paddle() {
	shapeInfo.context.beginPath();
	shapeInfo.context.rect(shapeInfo.paddleX, shapeInfo.paddleY, shapeInfo.paddleWidth, shapeInfo.paddleHeight);
	shapeInfo.context.fillStyle = "yellow";
	shapeInfo.context.fill();
	shapeInfo.context.closePath();

}

function drawScore() {
	shapeInfo.context.font = "18px Cambria";
	shapeInfo.context.fillStyle = "black";
	shapeInfo.context.fillText("Missed balls: "+ shapeInfo.score, shapeInfo.paddleWidth+5, 20);
}


function handleKeyDown(event){
	
	switch(event.keyCode){
		
		case 38: //up
			upPressed = true;
			console.log("key up");
			break;
		
		case 40: //down
			downPressed = true;
			break;
	}
}

function handleKeyUp(event){
	
	switch(event.keyCode){
		
		case 38: //up
			upPressed = false;
			break;
		
		case 40: //down
			downPressed = false;
			break;
	}
};

function restartBtn() {
	shapeInfo.score = 0;
	shapeInfo.x = shapeInfo.canvas.width / 2;
	shapeInfo.y = shapeInfo.canvas.height / 2;
	shapeInfo.dX = 2;
	shapeInfo.dY = -0.5;
}

/*function changeColors() {
	shapeInfo.context.beginPath();
	shapeInfo.context.arc(shapeInfo.x, shapeInfo.y, shapeInfo.radius, 0, 2*Math.PI);
	shapeInfo.context.closePath();
	shapeInfo.context.fillStyle = `${colors[colorIndex]}`;
	shapeInfo.context.fill();
	//shapeInfo.context.stroke(); //draw the circle
	
	if (++colorIndex > colors.length -1) colorIndex = 0;
}*/