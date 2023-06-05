/////////////////////////////  A. Q + A  /////////////////////////////////////////////////////////////////////////////////////////////////////
////// 1. How do we assign a value to a variable?//////////
// We can assign a value to a variable using the assignment operator "=", as follows:
// let variableName = value;


//////  2. How do we change the value of a variable?///////
// We can change the value of a variable by assigning a new value to it using the assignment operator "=".
//let variableName = value; // Initial assignment
//variableName = newValue;  // Changing the value


//////// 3. How do we assign an existing variable to a new variable?////////
// We can assign the value of an existing variable to a new variable by using the assignment operator "=" followed by the existing variable's name.
//let existingVariable = 42;
//let newVariable = existingVariable;


////////  4. Remind me, what are declare, assign, and define?/////////
// "declare" is the act of creating a variable,  let age;
// "assign" is the act of assigning a value to the variable,  age = 25;
// "define" refers to both declaring and assigning a value to the variable in a single step.  let age = 25;


////////   5. What is pseudocoding and why should you do it?/////////
// Pseudocoding is the process of writing out the logic or steps of an algorithm or program using natural language or simple code-like syntax, 
// without focusing on the specific syntax of a particular programming language. 
// It involves breaking down a problem into smaller, manageable steps and describing the solution in plain language.


////////  6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// A commonly cited guideline, known as the "80/20 rule" or the "Pareto principle," suggests that roughly 80% of the time should be devoted 
//to problem-solving, design, and planning, while the remaining 20% is spent on actual coding. 
//This rule emphasizes the importance of upfront thinking and analysis to create a solid foundation for the implementation.


//////////////////////////////// B. Strings ////////////////////////////////////////////////////////////////////////////////////////////////
let firstVariable = "Hello World";
firstVariable = 10;
let secondVariable = firstVariable;
secondVariable = "Bye!";
console.log(firstVariable);
console.log(secondVariable);
let yourName = "Olga";
console.log("Hello, my name is " + yourName);


////////////////////////////////  C. Booleans //////////////////////////////////////////////////////////////////////////////////////////////
//Using the provided variable definitions, replace the blanks so that all log statements print true in the console. 
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false || false || false || false || false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a + b === c); 
  console.log(a * a === d); 
  console.log(48 == '48');


  ////////////////// 4. D. The Farm////////////////////////////////////////////////////////////////////////////////////////////////////////
  let animal = "horse";
 if (animal === "cow"){
    console.log("mooooo");
 }
 else{
    console.log("Hey! You're not a cow.");
 }


//////////////////////  5. E. Driver's Ed /////////////////////////////////////////////////////////////////////////////////////////////////
let age = 16;
if (age >= 16){
    console.log("Here are the keys!");
}
else{
    console.log("Sorry, you're too young.");
}


////////////////////  6. II. Loops ////////////////////////////////////////////////////////////////////////////////////////////////////////
//Write a loop that will print out all the numbers from 0 to 10, inclusive.
for (let i = 0; i <=10; i++){
    console.log(i);
}
//Write a loop that will print out all the numbers from 10 up to and including 400.
for (let i = 10; i <=400; i++){
   console.log(i);
}
//Write a loop that will print out every third number starting with 12 and going no higher than 4000.
for (let i = 12; i < 4000; i+=3){
    console.log(i);
}

//Print out the numbers that are within the range of 1 - 100.
for (let i = 1; i <= 100; i++ ){
    console.log(i);
}

//Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let i = 1; i <= 100; i++ ){
    if (i % 2 === 0){
        console.log(i +' <-- is an even number');
    }
    else{
        console.log(i);
    }
}

//For the numbers 0 - 100, print out "I found a <number>. High five!" if the number is a multiple of five.
for (let number = 1; number <= 100; number++) {
    if (number % 5 === 0 ){
        console.log('I found a ' + number + '. High five!');
    }
  }

//Add to the code from above to print out "I found a number. Three is a crowd." if the number is a multiple of three.  
for (let number = 1; number <= 100; number++) {
  if (number % 3 === 0){
        console.log('I found a ' + number + '. Three is a crowd');
    }
    else if (number % 5 === 0 ){
        console.log('I found a ' + number + '. High five!');
    }
  }

//For numbers divisible by both three and five, be sure your code prints both messages.
for (let number = 1; number <= 100; number++) {
    if (number % 5 === 0 && number % 3 === 0) {
        console.log('I found a ' + number + '. High five! . Three is a crowd');
    }
    else if (number % 3 === 0){
        console.log('I found a ' + number + '. Three is a crowd');
    }
    else if (number % 5 === 0 ){
        console.log('I found a ' + number + '. High five!');
    }
  }

//Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
//Check your work! Your bank_account should have $55 in it.
let bank_account = 0;

for (let number = 1; number <= 10; number++) {
  bank_account += number;
}

console.log('bank_account:', bank_account);

//You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
//Check your work! Your bank_account should have $10,100 in it.
let bankAccountWithBonus = 0;

for (let number = 1; number <= 100; number++) {
    bankAccountWithBonus += number * 2;
}

console.log('bank_account:', bankAccountWithBonus);

////////////////////  6. III. Arrays & Control flow ////////////////////////////////////////////////////////////////////////////////////////////////////////
//What are the things in an array called?
// In JavaScript, the individual items in an array are typically referred to as "array elements" 
// or simply "elements". Each element within the array is assigned a numerical index starting from 0,
//  which represents its position within the array. By using these indices, you can access, modify, 
//  or manipulate the elements in an array.

//Do Arrays guarantee those things will be in order?
// Yes, arrays in JavaScript preserve the order of their elements. The order in which elements are added 
// to an array is maintained, and you can rely on the fact that the elements will be stored and 
// retrieved in the same order.

//What real-life thing could you model with an array?
//Arrays can be used to model various real-life scenarios where there is
//a collection of items that need to be organized and accessed in a specific order.

//Create an array that contains three quotes and store it in a variable called quotes.
//let quotes = 
//['The future belongs to those who believe in the beauty of their dreams.', 
//'The greatest glory in living lies not in never falling, but in rising every time we fall.', 
//'Life is 10% what happens to us and 90% how we react to it.'];

//Given the following array, const randomThings = [1, 10, "Hello", true]:
const randomThings = [1, 10, "Hello", true];
//How do you access the 1st element in the array?
const firstElement = randomThings[0];
console.log(firstElement);

//What would you write to access the 3rd element of the array?
const thirdElement = randomThings[2];
console.log(thirdElement);

//Given the following array, const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]:
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
//Change the value of "Github" to "Octocat".
ourClass[4] = "Octocat";
//Add a new element, "Cloud City" to the array.
ourClass.push("Cloud City");
//Check the value of the array to make sure it updated the array.
console.log(ourClass);

//Given the following array, const myArray = [5, 10, 500, 20]:
const myArray = [5, 10, 500, 20];
//Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon");
myArray.push("aaa");
//Remove the 5 from the beginning of the array.
myArray.shift();
// Add "Bob Marley" to the beginning of the array
myArray.unshift("Bob Marley");
// Remove a string of your choice from the end of the array
myArray.pop();
// Reverse the array
myArray.reverse();
//Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?
console.log(myArray);
//Mutate means to change or modify the original array directly
//The .reverse() method mutates the array by reversing the order of its elements

//Create a variable that contains an integer.
//Write an if ... else statement that:
//console.log()s "little number" if the number is entered is less than 100.
//console.log()s "big number" if the number is greater than or equal to 100.
let number = 15; // Replace with your desired integer value
if (number < 100) {
  console.log('little number');
} else {
  console.log('big number');
}

//Write an if ... else statement:
//console.log() little number if the number entered is less than 5.
//If the number entered is more than 10, log "big number".
//Otherwise, log "monkey".
let number2 = 8; // Replace with your desired number

if (number2 < 5) {
  console.log('little number');
} else if (number2 > 10) {
  console.log('big number');
} else {
  console.log('monkey');
}

//Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
  //What's Kristyn wearing today? Using bracket notation to access items in
  console.log('Kristyn is rocking that ' + kristynsCloset[2] + ' today!');
  //Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
  kristynsCloset.push('raybans');
  //Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
  kristynsCloset[5] = 'stained knit hat';
  //Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
  const thomsShirt = thomsCloset[0][0];
  //In the same way, access one item from Thom's pants array.
  const thomsPants = thomsCloset[1][2];
  //Access one item from Thom's accessories array.
  const thomsAccessory = thomsCloset[2][1];
  //Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
  console.log('Thom is looking fierce in a ' + thomsShirt + ', ' + thomsPants + ' and ' + thomsAccessory + '!');
  //Get more specific about what kind of PJs Thom is wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
  thomsCloset[1][2] = 'Footie Pajamas';
  const updatedThomsPants = thomsCloset[1][2];
 console.log("Thom is looking fierce in a " + thomsShirt + ", " + updatedThomsPants + " and " + thomsAccessory + "!");

 ///////////////////  6. IV. Functions ////////////////////////////////////////////////////////////////////////////////////////////////////////
 //Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting
 function printGreeting(name){
    return 'Hello there, ' + name;
 }
 console.log(printGreeting('Olga')); 

 //Write a function printCool that accepts one parameter, name as an argument. 
 //The function should print the name and a message saying that that person is cool.
 function printCool(name){
    console.log(name + ' is cool');
 }
 printCool('Captain Reynolds');

 //Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
 function calculateCube(number){
    return number * number * number;
 }
 console.log(calculateCube(5));

 //Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, 
 //false otherwise. The vowel could be upper or lower case.
 function isVowel(char){
    if(char === 'e' || char === 'a' || char === 'u' || char === 'i' || char === 'o'){
        return true;
    }
    else{
        return false;
    }
 }
 console.log(isVowel('a'));
 console.log(isVowel('n'));

 //Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers
 // where each number is the length of the corresponding string.
 function getTwoLengths(str1, str2) {
    let lengths = [str1.length, str2.length];
    return lengths;
  }
 console.log(getTwoLengths("Hank", "Hippopopalous"));

 //Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. 
 //The function should return an array of numbers where each number is the length of the corresponding string.
 function getMultipleLengths(arr) {
    let lengths = [];
    for (let i = 0; i < arr.length; i++) {
      lengths.push(arr[i].length);
    }
    return lengths;
  }
  console.log(getMultipleLengths(['hello', 'what', 'is', 'up', 'dude']));

  //Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. 
  //If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, 
  //one of them should be returned. 
  function maxOfThree(num1, num2, num3) {
    return Math.max(num1, num2, num3);
  }
  console.log(maxOfThree(6, 9, 1));

  //Write a function printLongestWord that accepts a single argument, an array of strings.
  // The method should return the longest word in the array. In case of a tie, the method should 
  //return the word that appears first in the array
  function printLongestWord(arr) {
    let longestWord = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longestWord.length || longestWord === "") {
        longestWord = arr[i];
      }
    }
    return longestWord;
  }
  console.log(printLongestWord(['BoJack', 'Princess', 'Diane', 'a', 'Max', 'Peanutbutter', 'big', 'Todd']));

  //Create an object called user.
  const user = {};

  //Write into the object the key-value pairs for name, email, age, and purchased. 
  //Set the value of purchased to an empty array []. Set the other values to whatever you would like.
  user.name = 'Olga';
  user.email = 'olga@olga.com';
  user.age = 30;
  user.purchased = [];
  console.log(user.name);
  console.log(user.email);

  //Our user has changed his or her email address. Without changing the original user object, 
  //update the email value to a new email address.
  let updatedUser = {
    ...user,
    email: "new@olga.com"
  };
  console.log(updatedUser.name);
  console.log(updatedUser.email);

 //Our user has had a birthday! Without changing the original user object, 
 //increment the age value using the postfix operator. 
  let updatedUsersAge = {
    ...user,
    age: user.age+1
  };
  console.log(updatedUsersAge.age);

  //Without changing the original user object, add a new key location to the object, and give it a value of some location (a string).
  let updatedUserWithLocation = {
    ...user,
    location: 'Odessa'
  };
  console.log(updatedUserWithLocation.location);

  //Our user has purchased some items! They have purchased some "carbohydrates". 
  //Using .push(), add the string "carbohydrates" to the purchased array.
  user.purchased.push('carbohydrates');
  console.log(user.purchased);
  //They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
  user.purchased.push('peace of mind');
  console.log(user.purchased);
  //They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
  user.purchased.push('Merino jodhpurs');
  console.log(user.purchased);
  //Console.log just the "Merino jodhpurs" from the purchased array.
  console.log(user.purchased[2]);

  //Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now).
  user.friend = {
    name: 'Julia',
    age: 30,
    location: "New York",
    purchased: []
  };
  //Console.log just the friend's name.
  console.log(user.friend.name);
  //Console.log just the friend's location.
  console.log(user.friend.location);
  //Change the friend's age to 55.
  user.friend.age = 55;
  console.log(user.friend.age);
  //The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchased array.
  user.friend.purchased.push('The One Ring');
  //The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
  user.friend.purchased.push('A latte');
  console.log(user.friend.purchased);
  //Console.log just "A latte" from the friend's purchased array.
  console.log(user.friend.purchased[1]);

  //Write a for loop that iterates over the User's purchased array 
  //(NOT the friend's purchased array), and prints each element to the console.
  for(let i = 0; i < user.purchased.length; i++){
    console.log(user.purchased[i]);
  }

  //Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
  for(let i = 0; i < user.friend.purchased.length; i++){
    console.log(user.friend.purchased[i]);
  }
  
  //Write a single function updateUser that takes no parameters. When the function is run, it should:
  //Increment the user's age by 1.
  //Make the user's name uppercase.
  function updateUser() {
    user.age++;
    user.name = user.name.toUpperCase();
  }

  //Write a function oldAndLoud that performs the exact same tasks as updateUser, 
  //but instead of hard-coding it to only work on our user object, make it take a parameter person,
  // and have it modify the object that is passed in as an argument when the function is called. 
  //Call your oldAndLoud function with user as the argument.
  function oldAndLoud(person) {
    person.age++;
    person.name = person.name.toUpperCase();
  } 
  oldAndLoud(user);
  console.log(user);