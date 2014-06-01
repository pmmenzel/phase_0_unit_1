// I paired [by myself, with:] on this challenge.
I paired by myself. 
// __________________________________________
// Write your code below.
var secretNumber = 7; 
var password = "just open the door";
allowedIn = (3>4);
members = ["John", "Patrick", "Scott","Mary"]



// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
//
// I enjoyed this lesson but there was A LOT of material provided to go over even though it wasn't all required.  This added to most of the difficulty I had with the lesson as there was so many resources on so many subjects, I had a hard time remembering certain methods, syntaxes, etc. I had to go over some of the materials that were provided as well as looking up some addition resources (such as the goto, w3school.com), to make sure I was understanding how particular methods worked.  For example, I spent some time trying to understand why I couldn't get the "allowedIn" variable to pass.  But it came down to really understanding what it was asking which was "allowedIn" would ultimately be equal to 'false' BUT NOT that allowedIn was assigned the value of 'false.'  Once I put together that 'allowedIn' also had to be a 'typeof' boolean (i.e. a parameter that equals a real value, such as 'false') it was pretty straightforward. I liked learning about how to use the javascript console.  Both in my terminal as well as in the in-browser console.  Playing around with both of those really started to give me a more comfortable feeling (instead of the a panicked one, haha!).  I feel like generally, I have a pretty good grasp on the competencies from this lesson, which is a relieve.  


// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

