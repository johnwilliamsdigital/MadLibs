
//square bracket for an array



function DisplayQuestion1 (){
	var button1 = document.getElementById ("button-1");
button1.innerHTML = "I like to fly"; 
	var button2 = document.getElementById ("button-2");
button1.innerHTML = "I like to walk";
	var button3 = document.getElementById ("button-3");
button1.innerHTML = "I like to swim";

	
	button1.onclick=function () {
		DisplayQuestion2();
		x=x+1;};
	
		
	button2.onclick=function () {
		DisplayQuestion2();
		y=y+1;};


	button3.onclick=function () {
		DisplayQuestion2();
		z=z+1;};
		
		
	}



	
function DisplayQuestion2 (){
	var button1 = document.getElementById ("button-1");
button1.innerHTML = "I like to talk"; 
	var button2 = document.getElementById ("button-2");
button1.innerHTML = "I like facts";
	var button3 = document.getElementById ("button-3");
button1.innerHTML = "I like feelings";

	
	button1.onclick=function () {
		DisplayQuestion3();
		x=x+1;};
		
		
	button2.onclick=function () {
		DisplayQuestion3();
		y=y+1;};


	button3.onclick=function () {
		DisplayQuestion3();
		z=z+1;};
		
		
	}
}

	
	

		
	
	
function DisplayQuestion3 (){
	var button1 = document.getElementById ("button-1");
button1.innerHTML = "I like talk radio"; 
	var button2 = document.getElementById ("button-2");
button1.innerHTML = "I like drum circles";
	var button3 = document.getElementById ("button-3");
button1.innerHTML = "I like background music";

	
	button1.onclick=function () {
		DisplayQuestion3();
		x=x+1;};
		
		
	button2.onclick=function () {
		DisplayQuestion3();
		y=y+1;};


	button3.onclick=function () {
		DisplayQuestion3();
		z=z+1;};
		
		
	};




function results (){
	x =>2 ("output").innerHTML = "you are air"; 
	y =>2 ("output").innerHTML = "you are earth"; 
	z =>2 ("output").innerHTML = "you are water"; 
	x+y+z=>3 ("output").innerHTML = "you are the avatar"; 
	};


DisplayQuestion1();


