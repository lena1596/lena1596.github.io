/* Class: CIS 111
Name: Lena Chiu */

"use strict";

window.addEventListener("load", startup);

function startup(){
	document.getElementById("btn1").addEventListener("click", nato);
}


function nato(){
	var a = document.querySelector("input").value;
	var b = sentenceToNATO(a);
	document.querySelector("div").innerHTML = b;
}