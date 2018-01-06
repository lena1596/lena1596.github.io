/*

Name: 		Lena Chiu
Course: 	CIS 115
Term: 		Fall 2017
Assignment: Project 2

*/

window.onload = function(){

	setInterval(updateDateTime,500);  // call this function again in 500ms
	getMyLocation();
	locationDropdown();
	currentClick();
	center();
}


function updateDateTime() {
	var d = new Date();
	document.querySelector('#datetime').innerHTML = d;
}


function getMyLocation () {
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(displayLocation);
	}else{
		alert("Sorry, no geolocation support");
	}
}



function displayLocation (position) {

	let latitude = position.coords.latitude;
	let longitude = position.coords.longitude;
	let altitude = position.coords.altitude;
	let locationSpan = document.getElementById("location");
	locationSpan.innerHTML = `You are at Latitude: ${latitude},
	Longitude: ${longitude}`;

	showMap(position.coords);
}


let map;
let marker;


function showMap (coords) {
	let googleLatAndLong = new google.maps.LatLng(coords.latitude, coords.longitude);
	//create a Google latitude/ longitude object

	let mapOption = {
		zoom : 10,
		mapTypeId: 'roadmap',
		center: googleLatAndLong
	};

	let mapDiv = document.getElementById("map");
	//get reference to display div

	map = new google.maps.Map(mapDiv,mapOption);
	//create map and passing output div reference and map options object
	addMarker(googleLatAndLong);
	//add marker
}

function addMarker(latlong){
	var markerOptions = {
		position: latlong,
		map: map
	}
	marker = new google.maps.Marker(markerOptions);
    // Note usng Google Marker event listener method for callback
    marker.addListener('click', function() {
        let infoWindow = new google.maps.InfoWindow();
        alert(selectedLat + selectedlong);
    });

}


//Global locations array
var locations = [
	{
		location: "Taipei 101, Taipei, Taiwan",
		latitude: 25.034243,
		longitude: 121.564478 
	 },
	 {
	 	location: "Mount Fuji, Tokyo, Japan",
		latitude: 35.362164,
		longitude: 138.727863
	 },
	 {
	 	location: "Crater Lake National Park, Oregon, USA",
		latitude: 42.865087,
		longitude: -122.167196
	 },
	 {
	 	location: "Mount Rainier National Park, Washington, USA",
		latitude: 46.935091,
		longitude: -121.653178
	 }

]


function locationDropdown () {

	let locaRef = document.querySelector("#locationDropdown");

	let option1 = document.createElement("option");
	option1.value = 0;
	option1.text = locations[0].location;

	let option2 = document.createElement("option");
	option2.value = 1;
	option2.text = locations[1].location;

	let option3 = document.createElement("option");
	option3.value = 2;
	option3.text = locations[2].location;

	let option4 = document.createElement("option");
	option4.value = 3;
	option4.text = locations[3].location;

	locaRef.appendChild(option1);
	locaRef.appendChild(option2);
	locaRef.appendChild(option3);
	locaRef.appendChild(option4);
}


let selectedlong;
let selectedLat;

function optionsChange() {
	let index = document.getElementById("locationDropdown").value;
	//get the index number
	let selectedLat = locations[index].latitude;
	let selectedlong = locations[index].longitude;

	let googleLatAndLong = new google.maps.LatLng(selectedLat, selectedlong);
	let mapOption = {
		zoom : 10,
		mapTypeId: 'roadmap',
		center: googleLatAndLong
	};

	let mapDiv = document.getElementById("map");

	map = new google.maps.Map(mapDiv,mapOption);
	
	addMarker(googleLatAndLong);
	
	let locationDescript = document.getElementById("location2");
	locationDescript.innerHTML = locations[index].location;
	//show location description
	let locationSpan = document.getElementById("location");
	locationSpan.innerHTML = `You are at Latitude: ${selectedLat},
	Longitude: ${selectedlong}`;
	//show location latitude/longtitude as option changes

}


function currentClick() {

	let currentBtn = document.querySelector("#currentBtn");
	currentBtn.addEventListener("click",function(){
		getMyLocation();
	});
}


function center() {
	let centerBtn = document.querySelector("#center");
	centerBtn.addEventListener("click",function(){
		optionsChange();
	})
}
