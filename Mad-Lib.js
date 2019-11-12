
var outputfield = document.getElementById("output");
var noun = document.getElementById("enter-noun");
var adjective = document.getElementById("enter-adjective");
var verb = document.getElementById("enter-verb");

function displayStory () {
	//STORY = "Once upon a time a " + noun.value + " was ADJECTIVE and brave. The NOUN VERB for 100 miles, before needing a long slumber."
	var story="Once upon a time a " + noun.value + " was " + adjective.value + " and brave. The " + noun.value + " "+ verb.value +" for 100 miles, before needing a long slumber.";
	outputfield.innerHTML=story;
	}


document.getElementById("button-1").onclick=function () {
	displayStory ();	
	};
