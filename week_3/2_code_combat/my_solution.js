// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 #Rescue Mission
// move down x2, 
// move right,
// move up x2,
// move right x2,
// move down,
// ATTACK!

this.moveDown();
this.moveDown();
this.moveRight(); 
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

#Grab the Mushroom
// move up,
// move right,
// move left, 
// move up.
// attack.

this.moveUp();

this.moveRight();
this.moveLeft();
this.moveUp();

this.attackNearbyEnemy();

#Drink Me
// attack,
// move right,
// move down, 
// move up,
// move right,
// attack

this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

#Taunt the Guards
// move right,
// bust door down,
// move right,
// say "Hey there!",
// move left x2,
// say "Attack!"
// move right,
// say "follow me",
// move right x2,
// move up,
// move right,
// say "hey boo head",
// move down,
// move right,
// move up, 
// move right.

this.moveRight();
this.bustDownDoor();
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("hey boo head");
this.moveDown(); 
this.moveRight();
this.moveUp();
this.moveRight();

##Its a Trap
// move down x2,
// say "something",
// move up x2.

this.moveDown();
this.moveDown();
this.say("something");
this.moveUp();
this.moveUp();

#Break the Prison

// if their name is "William", break down door.
// if their name is "Krogg", move right. 
// if their name is "Lucas", break down door.
// if their name is "Gort", move right. 
// if their name is "Brack", move right. 
// if their name is "Marcus", break down door.
// if their name is "Grul'Thock", move right. 
// if their name is "Gordon", break down door.

if(name === "William")
    return true;
if(name === "Krogg")
    return false;
 // <-- Start here; Krogg is not a friend!
if(name === "Lucas")
    return true;
if(name === "Gort")
    return false;
if(name === "Brack")
    return false;
if(name === "Marcus")
    return true;
if(name === "Grul'Thock")
    return true;
if(name === "Gordon")
    return true;

#Taunt

// say "Yiggidy Yo!",
// say "stupid",
// say "big head",
// say "fatty"

 this.say("Yiggidy Yo!");
 this.say("stupid");
 this.say("big head");
 this.say("fatty");

#Cowardly Taunt
// move to coordinates (55,35);
// say "yo",
// move to coordinates (70, 10);

this.moveXY(55,35);
this.say("yo");
this.moveXY(70, 10);

#Commanding Followers
// say "follow",

// move to coordinates (73, 53);
// move to coordinates (64, 43);
// say "attack",
// move to coordinates (75, 63);

this.say("follow");

this.moveXY(73, 53);
this.moveXY(64, 43);
this.say("attack");
this.moveXY(75, 63);

#Mobile Artillery
// move to coordinates (70, 28); 
// attack coordinates at (70, 55);
// attack coordinates at (70, 50);

// move to coordinates (45, 40); 
// attack coordinates at (48, 65);
// attack coordinates at (48, 50);

this.moveXY(70, 28); 
this.attackXY(70, 55);
this.attackXY(70, 50);

this.moveXY(45, 40); 
this.attackXY(48, 65);
this.attackXY(48, 50);
 
 
//  ##Java Questions to Answer

// #What is this referring to? Think programming-wise rather than in the terms of the game.

// "this" refers to the element or object that has methods passed on to it.  

// #What does the () do in JavaScript?

// The parentheses are used for arguments/parameters associated with the method function.  They can have any number of parameters but it can also be empty.

// #What is the point of the semicolons?

// The semicolon indicates the end of the line of code.  It basically acts like a period in a sentence.  
 
 
 
// Reflection:
// I really enjoyed this this lesson.  I think incorporating games in the learning process is one of the biggest missing pieces in education in general.  The beginner campaign wasn't extremely challenging but its still definitely gave you the solid surface level feel for javascript.  There were, however, a couple instances where I needed to looking up some syntax because I wasn't understanding how and why things were working in a certain way.  For example, understand what exactly 'this' meant and how different methods were passed onto it.  I thought that w3school.com and gitref.org/basic/ we're really helpful in providing me a explanation of some of the syntax I wasn't understanding.  Feeling fairly confident about the learning compentencies.  I hope there are more games in the future, cause I love it!