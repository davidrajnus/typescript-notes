//interface is used to define the template of what parameters
//functions, classes, can use

interface NamedPerson {
  firstName: string; //firstname is compulsory
  age?: number; //age is optional
  [propName: string]: any;
  greet(lastName: string): void; //function name greet is compulsory
}

function greet(person: NamedPerson) {
  console.log("Hello, " } person.firstname);
}
//the parameter person automatically takes the interface values

function changeName(person: NamedPerson) {
  person.firstname = "Anna";
}

const person: NamedPerson = {
  firstName: "Max", //required by interface
  hobbies: ["Cooking", "Sports"], //required by interface
  greet(lastName: string) {
      console.log("Hi, I am " + this.firstName + " " + lastName);
  }
};

// greet({firstName: "Max", age: 27});
changeName(person);
greet(person);
person.greet("Anything");

// class implementing an interface
class Person implements NamedPerson {
  firstName: string;
  lastName: string;

  greet(lastName: string) {
      console.log("Hi, I am " + this.firstName + " " + lastName);
  };
}

const myPerson = new Person();
myPerson.firstName = "Maximilian";
myPerson.lastName = "Anything";
greet(myPerson);
myPerson.greet(myPerson.lastName);


// Function Types - interface for functions
interface DoubleValueFunc {
  (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(value1: number, value2: number) {
  return (value1+value2) * 2;
};

console.log(myDoubleFunction(10, 20));


// Interface Inheritance - interface can inherit from other interface

interface AgedPerson extends NamedPerson {
    age: number;
}

const oldPerson: AgedPerson = {
    age: 27,
    firstName: "Max",
    greet(lastName: string) {
        console.log("Hello!");
    }
};

console.log(oldPerson);
