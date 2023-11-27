// Exercise #1: Strict and Same
// Start commenting here
Object.is(10, 20); // Answer
Object.is(0, -0); // Answer
Object.is(NaN, 100); // Answer
Object.is("one", "two"); // Answer
Object.is({ name: "John", age: 30 }, { name: "John", age: 30 }); // Answer
Object.is(null, undefined); // Answer

10 === 20; // Answer
10 === "10" // Answer
3.14 !== 3.14; // Answer
"TechUp" !== "TechUp"; // Answer
NaN === NaN; // Answer
0 !== -0; // Answer

let objectA = { course: "Web Developer", price: 300000 };
let objectB = { course: "Web Developer", price: 300000 };
objectA === objectB; // Answer
