//let & const
console.log("LET & CONST");
let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable); // will work as variable is allowed to be changed

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; // Won't work, const cant be changed

//block scope
function reset() {
  let variable = null;
  console.log(variable) //undefined
}
reset();
console.log(variable); //undefined

// Arrow functions
//this shows how functions can be written in typescript using arrow
const addNumbers = function(number1: number, number2: number): number {
  return number1 + number2;
};

const addNumbers2 = (number1: number, number2: number) => number1 + number2;

//additional example
const greet = () => {
    console.log("Hello!");
};
greet();

const greetFriend = friend => console.log(friend);
greetFriend("Manu");

//Default parameters
// how to set default paramters in typescript
const countdown = (start: number = 10): void => {
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown();

//Rest and Spread
// ... breaks an array into a list of items in ()
const numbers = [1,2,3,4];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max(...numbers));
// the Math functions only works for lst, not array

function makeArray (name: string, ...args: number[]){
  return args;
}
console.log(makeArray("Max", 1, 2, 6));
//any parameters after name parameter will be treated as a list and treated as an array
// the ... works differently in a function (the opposite) then in a variable

// Destructuring
const myHobbies = ["Cooking", "Sports"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2) // "Cooking", "Sports"

const userData = {username: "Max", age:27};
const {username: myName, age: myAge} = userData;
console.log(myName, myAge) // Max, 27

// Template Literals
const userName = "Max";
const greeting = `This is a heading!
I'm ${userName}.
This is cool!`;
console.log(greeting);
// how to input variable in a string