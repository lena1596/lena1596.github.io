/* Name: Lena Chiu
   Class: CIS 111 */

"use strict";

window.addEventListener("load", startup);

function startup(){
	document.getElementById("length").addEventListener("click", length);
	document.getElementById("reverse").addEventListener("click", reverse);
	document.getElementById("vowel").addEventListener("click", vowel);
	document.getElementById("digit").addEventListener("click", digit);
	document.getElementById("isPunct").addEventListener("click", isPunct);
	document.getElementById("isPal").addEventListener("click", isPalin);
	document.getElementById("compress").addEventListener("click", Compress);
}


function strLength(s){
	var len = s.length;
	return len;
}

function length(){
	var s = document.querySelectorAll("input")[0].value;
	var len = strLength(s);

	document.querySelector("h3").innerHTML = "Length = " + len;
}




function reverseStr(s){
	var ar = s.split("");
	var revstr = ar.reverse(); 
	var str = revstr.toString();
	var x = str.replace(/\,/g,"");
	return x;
}

function reverse(){
	var s = document.querySelectorAll("input")[0].value;
	var x = reverseStr(s);

	document.querySelector("h3").innerHTML = "Reverse string = " + x;
}



function isVowelR(char){
	var regex = new RegExp("[aeiouAEIOU]");
	return regex.test(char);
}

function countVowels(str){
	var length = str.length;
	var count = 0;
	for (var i = 0 ; i < length; i++) {
		if(isVowelR(str.charAt(i)))
			count++;
	}
	return count;
}




function vowel(){

	var s = document.querySelectorAll("input")[0].value;
	var input = s.toString();
	var x = countVowels(s);

	document.querySelector("h3").innerHTML = "Number of vowels = " + x;
}




function digit(){

	var s = document.querySelectorAll("input")[0].value;
	var input = s.toString();
	var count = 0;
	for (var i = 0; i < s.length; i++) {
		
		if(input.charAt(i) == "") continue;
		else if(input.charAt(i) >= 0 && input.charAt(i)<= 9){
			count++;
		}
	}
	document.querySelector("h3").innerHTML = "Number of digits = " + count;
}

function isPunc(char){
	var punc = new RegExp("[.,;:!?\\-\s]");
	return punc.test(char);
}

function isPunct(){
	var s = document.querySelectorAll("input")[0].value;
	var x = isPunc(s);
	document.querySelector("h3").innerHTML = "The character you entered is a punctuation is " + x;

}

function isPal(sen){
	var x = sen.split("");
	var y = x.reverse();
	var reverse = y.join("");

	if( sen === reverse){
		return true;
	}
	else{return false;}
}

function isPalin(){
	var s = document.querySelectorAll("input")[0].value;
	var x = isPal(s);
	document.querySelector("h3").innerHTML = "The string you entered is a palindrome is " + x;
}


function compress(sen){
	var str = "";
	for (var i = 0; i < sen.length; i++) {
		var c = sen.charAt(i);
		if(isPunc(c)){
			str = str;
		}
		else{
			str += c;
		}
	}
	return str;
}

function Compress(){
	var s = document.querySelectorAll("input")[0].value;
	var x = compress(s);
	document.querySelector("h3").innerHTML = x;
}

