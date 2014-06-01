// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.Patrick menzel
//  2.Alex Le


// 0. "YOU SIGNED... WHO?!"

var angelina = new Client("Angelina Jolie", 39, "You're not going to take my baby!");

var olivia = new Client("Olivia Wild", 30, "I'm the miracle.");


// 1. "Here they Come!"

var adam = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!");

var kristen = new Client("Kristen Bell", 33, "Do you wanna build a snowman?");

var jim = new Client("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!");

stars = [angelina, olivia, adam, kristen, jim];

// 2. "TIME IS MONEY!"

function Client (name, age, quote){
    this.name = name;
    this.age = age;
    this.quote = quote;
    this.showQuote = function(){return this.quote;}
};

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";


// 3. "SHOW 'EM OFF!"

for (var i = 0; i < stars.length; i++) {
  console.log("Our client's name is " + stars[i].name + " and they are " + stars[i].age +" and their most famous quote is " + "'" + stars[i].quote + "'" + ".");
};

// 4. "But wait, there's more!"

// we added this property function to our client function:  
"this.showQuote = function(){return this.quote;}"

// 5.  ** BONUS **


//  6.  Your Reflection:

// What parts of your strategy worked? What problems did you face?

	//We were able to formulate our client variables and the client function fairly easily as we worked together.  We had some difficulty later trying to figure out how to add in a property to the client function which was also a function and getting it to return the value we wanted, which was to show the quote.  We realized, utlimately, that the issue wasn't how we were formulating the property function, it was how we were trying to call it.  We were simply trying to call, for example, "adam.showQuote" but needed to be calling "console.log(adam.showQuote())" or adam.showQuote()  We asked for some guidance from our guide and were able to get all it work. 

// What questions did you have while coding? What resources did you find to help you answer them?

// What concepts are you having trouble with, or did you just figure something out? If so, what?

// It took us a little while to figure out some of the syntax related to our for loop we put in but working together we figured it out.  We used the for loop to print out a nice sentence using some of the client properties. 

// Did you learn any new skills or tricks?

// Like I stated before, learning to call your property function using console.log or [client].[property]() was definitely a good thing to learn.  

// How confident are you with each of the Learning Competencies?

// I'm feeling fairly confident about these learning compentencies. 

// Which parts of the challenge did you enjoy?

// I like how we were able to create variables and use the function to call various information from each of our client variables. 

// Which parts of the challenge did you find tedious?

// it was a little tedious having to create variables for each of the clients that were provided in the lesson.  But I feel that you might have had previous cohorts add 5 of their own and that probably wasn't efficient.  Besides, it was ultimately good to formulate them into variables and then refactor them.  Its good practice. 





