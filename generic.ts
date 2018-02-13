// Simple Generic
function echo(data: any) {
  return data;
}

console.log(echo("Max"));
console.log(echo(27));
console.log(echo({name: "Max", age: 27}));

// Better Generic
//it allows us to make sure the type that was input will be the
//same type as the output
function betterEcho<T>(data: T) { //T denotes type being used when funciotn is called
  return data;
}

console.log(betterEcho("Max").length); //input is a string (inferred by the compiler from the input), hence output should be string
console.log(betterEcho<number>(27)); // you can specify the type as well
console.log(betterEcho({name: "Max", age: 27}));

// Built-in Generics
const testResults: Array<number> = [1.94, 2.33]; //specify array must contains number
testResults.push(-2.99);
console.log(testResults);

// Arrays
function printAll<T>(args: T[]) {
  args.forEach((element) => console.log(element));
}
printAll<string>(["Apple", "Banana"]); //<T> is defined by <string>

// Generic Types
const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2<string>("Something"));
//argument and return value must be string

// Generic Class
class SimpleMath<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
//We can have multiple generics, ie T and U, and they can be defined separately