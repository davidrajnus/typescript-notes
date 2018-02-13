//string
let myName: string = 'Max';

//number
let myAge: number = 27;

//boolean
let hasHobbies: boolean = false;

// assign types
let myRealAge: number;
myRealAge = 27;

//array
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100];

//tuples
let address: [string, number] = ["Superstreet", 99];

//enum
enum Color {
  Gray,
  Green = 100,
  Blue = 2
}
let myColor: Color = Color.Blue;
console.log(myColor) //101..following from Green being assigned as 100

//any
let car: any = "BMW";
console.log(car); //BWM ... string
car = { brand: "BMW", series: 3};
console.log(car); //brand: "BMW", series: 3 ... object

//functions
function returnMyName(): string {
  return myName;
}
//if you want the function to return a string

//void
function sayHello(): void {
  console.log("Hello");
}
// void means that the function should not return anything

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value 2;
}
// arguments must be numbers, return value must be number

//function types
let myMultiply: (a: number, b: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
//a way of defining function in a simgle line
// arguments must be number, and return value must be number

// objects
let userData: { name: string, age: number} = {
  name: "Max",
  age: 27
};

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
  data: [100, 3.99, 10],
  output: function (all: boolean): number[]{
    return this.data
  }
}
// function called complex with arguments data(an array of number) 
//and output(a function with boolean for argument and returns 
//an array of numbers)

//type alias
//a way of creating templates. so the above can be simplified as below
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
  data: [100, 3.99, 10],
  output: function (all: boolean): number[]{
    return this.data
  }
}

// union types
//the "|" is an OR statement. can be either number OR string
let myRealRealAge: number | string = 27;
myRealRealAge = "27";
// myRealRealAge = true;

// check types
let finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}