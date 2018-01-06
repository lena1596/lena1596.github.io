/* Name: Lena Chiu
   Class: CIS 111 */

"use strict";

window.addEventListener("load", startup);

function startup(){
	document.getElementById("sumOfDigits").addEventListener("click", sumOfDigit);
	document.getElementById("isHarshad").addEventListener("click", IsHarshad);
	document.getElementById("hail").addEventListener("click", hailstone);
	document.getElementById("hailLength").addEventListener("click", hailLength);
}

function sumOfDigits(int){
	var num = parseInt(int);
	var sum = 0;
	while(num != 0){
		var lastDigit = num % 10;
		sum += lastDigit;
		num = Math.floor(num/10); //reduce one digit from the number 也沒有後面小數
	}
	return sum;
}

function sumOfDigit(){
	var s = document.querySelectorAll("input")[0].value;
	var x = sumOfDigits(s);
	document.querySelector("h3").innerHTML = "The sum of the digits is " + x;

}

function isHarshad(int){
	var input = parseInt(int);
	var result = sumOfDigits(input);
	if ( input%result == 0) {
		return true;
	}
	else{
		return false;
	}
}

function IsHarshad(){
	var s = document.querySelectorAll("input")[0].value;
	var x = isHarshad(s);
	document.querySelector("h3").innerHTML = "The number you entered is a harshad is " + x;


}

function hailStoneSeq(int){
	var sequence = int ;
	var num = parseInt(int);
	if(num == 1){
		return num;
	}
	while( num != 1 ){
		if (num % 2 == 0) {
			num /=2; 
		}
		
		else{
			num = (3 * num) + 1;
		}
		sequence = sequence+" , "+ num;
	}
	return sequence;
}

function hailstone(){
	var s = document.querySelectorAll("input")[0].value;
	var x = hailStoneSeq(s);
	document.querySelector("div").innerHTML = "The hailstone sequence starting from " + s + " is " + x;
}

function hailStonelen(int){
	var sequence = int ;
	var length = 1;
	var num = parseInt(int);
	if(num == 1){
		return num;
	}
	while( num != 1 ){
		if (num % 2 == 0) {
			num /=2; 
		}
		
		else{
			num = (3 * num) + 1;
		}
		sequence = sequence+" , "+ num;
		length++;
	}
	return length;
}

function hailLength(){
	var s = document.querySelectorAll("input")[0].value;
	var x = hailStonelen(s);
	document.querySelectorAll("div")[1].innerHTML = "The length of the Hailstone Sequece is " + x;
}