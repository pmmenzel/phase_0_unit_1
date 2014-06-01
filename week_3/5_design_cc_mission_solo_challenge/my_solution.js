// This is a solo challenge

// Your mission description:
// There is an object called "Patrick" and I want this object to move its way to the top of the page which will be the top of the mountain.
// Objectives: Traverse the landscape, make it to your destination.
// 

// Pseudocode
// Create an object called patrick with a name property of "Patrick"

// Add a location property to patrick which will have a value of an object called "Vector" with property called coordinates both set to the bottom-right of the document.

// create a function that allows you to change the location value of vector to whatever new coordinate designation you give it.

// create an if statement that implements an alert box when patrick's location matches the coordinate at the top of the page.
// 
// 

// Initial Code
var patrick = {
	name: "Patrick",
	location: vector = {
		coordinates = ([x, y])// This would be the bottom right of the page where the object should start.
	},
};

function callBox(){
	var person = prompt("Which way to you want to move: right, left, up or down?");
}

var moveRight = function(){
	//code to move Patrick Right and update Patrick's position based on user input. 
};
var moveLeft = function(){
	//code to move Patrick Left and update Patrick's position based on user input.
};
var moveUp = function(){
	//code to move Patrick Up and update Patrick's position based on user input.
};
var moveDown = function(){
	//code to move Patrick Down and update Patrick's position based on user input.
};

if (callBox() === "patrick.moveLeft()") {
	console.log("moving LEFT!");
	patrick.moveLeft();
}
else if(callBox() === "patrick.moveRight()") {
	console.log("moving RIGHT!");
	patrick.moveRight();
}
else if(callBox() === "patrick.moveUp()") {
	console.log("moving UP!");
	patrick.moveUp();
}
else if(callBox() === "patrick.moveDown()") {
	console.log("moving DOWN!");
	patrick.moveDown();
}
else{
	console.log("That's not a direction you can go!")
}
};

var victoryCall = function (){
	console.log(user statement);
}

var gameOver = function(){
	var end = (0, 0) //these are the end coordinates

	if (end === patrick.location.vector.coordinates) {
		prompt("Input your victoryCall!!");
	}
	else {
		return callBox();
	};
	};

// these are the moves need to get to the top of the mountain
patrick.moveLeft();
patrick.moveUp();
Patrick.moveLeft();
patrick.moveUp();
patrick.moveRight();
patrick.moveUp();
patrick.moveLeft();
patrick.moveDown();
Patrick.moveleft();
Patrick.moveUp();
Patrick.moveUp();
patrick.victoryCall("[user statement]");



// Refactored Code

// Don't think patrick or callBox() are really refactored but more condensed
var patrick = {name: "Patrick",location: vector = {coordinates = ([x, y])// Starting point.
	},
};

function callBox(){var person = prompt("Which way to you want to move: right, left, up or down?");}


// I wasn't sure if the blow would make the code more efficient but this is the only thing I could think of related to refactoring the movement portion. 
var movement = function(direction){
	//code to move Patrick either Left, Right, Up or Down and update Patrick's position based on user input. 
};

if (callBox() === "Left") {
	console.log("moving LEFT!");
	patrick.move("Left");
}
else if(callBox() === "Right") {
	console.log("moving RIGHT!");
	patrick.move("Right");
}
else if(callBox() === "Up") {
	console.log("moving UP!");
	patrick.move("Up");
}
else if(callBox() === "Down") {
	console.log("moving DOWN!");
	patrick.move("Down");
}
else{
	console.log("That's not a direction you can go!")
}
};

var victoryCall = function (){
	console.log(user statement);
}

var gameOver = function(){
	var end = (0, 0) //these are the end coordinates

	if (end === patrick.location.vector.coordinates) {
		prompt("Input your victoryCall!!");
	}
	else {
		return callBox();
	};
	};

// Reflection

// I liked this exercise because it really made me think about how I would formulate the game.  Its helpful for me to have something to visualize.  However, I was having some difficulty developing the code itself as I wanted to get it to close as playable as possible but there were several instances where I wasn't sure how to do that.  I started to do some research for ideas on stackflow and w3schools but that was taking me a little to deep in the rabbit hole and I was running out of time.  I simplified the code with some obvious wholes/missing code but I generally feel that I understood the concepts of developing the mission game.  In a perfect world, I would have loved to delve into this project and really figure out how to create a little mini game as breaking down the various functions of a simple game like this is very interesting.   Something cool I made note of in my research but which I didn't use in this challenge, is how to accept input from user (http://www.homeandlearn.co.uk/java/user_input.html) which seems to use some type of Javascript library.  I'm sure we'll learn that later in DBC so I'm looking forward to it. 
// 
// 
// 
// ~ Additional Resources ~
// stackflow.com & w3school.com as well as http://www.homeandlearn.co.uk/java/user_input.html 
// 
// 