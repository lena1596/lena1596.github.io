/* Class: CIS 111
Name: Lena Chiu */

"use strict";

window.addEventListener("load", startup);

function startup(){
	document.getElementById("reset").addEventListener("click", reset);
	document.getElementById("card").addEventListener("click", dealCard);
	document.getElementById("rc").addEventListener("click", randomCard);
	document.getElementById("rh").addEventListener("click", randomHand);
}

function reset(){
	location.reload(true);
}
//the input: document.querySelector("input[name='groupRadio']:checked").value; 


function dealCard(){ 
	var rank = document.querySelector("input[name='rank']:checked").value;
	var suit = document.querySelector("input[name='suit']:checked").value;
	document.querySelector("div").innerHTML = rank + " of " + suit;
}


var suits = ["Clubs","Spades","Hearts","Diamonds"];
var ranks = ["Ace","Deuce","Tray","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"];

function generateRandomCard() {
	var randomRank = Math.floor(Math.random()*13);
	var randomSuit = Math.floor(Math.random()*4);
	var resultRank = ranks[randomRank];
	var resultSuit = suits[randomSuit];

	return resultRank + " of " + resultSuit;
}



function randomCard(){
	document.querySelector("div").innerHTML = generateRandomCard();
}


function randomHand(){
	// make array to store cards
	var x = [];

	while(x.length < 5) {
		var result = generateRandomCard();
        // if result not already in x
        if(x.includes(result)){
        	x=x;
        }
        //before add new result into the array, check if they're duplicate first.
        else{
    		x.push(result);
        }
	}
	
	var result = "";
	for (var i = 0; i < x.length; i++) {
		result += "<br />"+ x[i] ;
	}
	document.querySelector("div").innerHTML = result;
}
