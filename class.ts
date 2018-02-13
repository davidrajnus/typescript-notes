class Person {
  name: string;
  // private means variable cannot be called from outside the class
  private type: string;
  protected age: number =27;

  //building a constructor in typescript
  constructor(name: string, public username: string) {
    this.name = name;
  }

  printAge() {
    console.log(this.age);
    this.setType("Old Guy");
  }

  private setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const Person = new Person("Max", "max");
console.log(person.name, person.username);
person.printAge();
// person.setType("Cool guy"); // Won't work with private method

//Inheritance
class Max extends Person {
  // name = "Max" setting defaut cant work like this
  //need to use super to override the parent requirements

  constructor(username: string) {
    super("Max", username);
    this.age = 31;
  }
}
const max = new Max("max");
console.log(max);

//Getters and Setters
class Plant {
  private _species: string = "Default";

  get species() {
    return this._species;
  }

  set species(value: string) {
    if (value.length > 3) {
        this._species = value;
    } else {
        this._species = "Default";
    }
  }
}
let plant = new Plant();
console.log(plant.species); //Default
plant.species = "AB";
console.log(plant.species); //Default
plant.species = "Green Plant";
console.log(plant.species); //Green Plant

//Abstract Classes
//abstract classes are classes where you cannot create an instance from
//mainly used as a blueprint to inherit form
abstract class Project {
  projectName: string = 'Default';
  budget: number = 1000;

  abstract changeName: (name: string): void;

  calcBudget() {
      return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string): void {
      this.projectName = name;
  }
}

let newProject = new ITProject();
console.log(newProject); //"Default", 1000
newProject.changeName("Super IT Project");
console.log(newProject); // SuperITProject, 1000
