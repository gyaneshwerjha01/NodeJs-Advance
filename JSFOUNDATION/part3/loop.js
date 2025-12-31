const prompt = require("prompt-sync")({ sigint: true });

// Syntax: for (start; condition; step)
for (let i = 0; i < 5; i++) {
  console.log("Count is: " + i);
}
// Output: 0, 1, 2, 3, 4

let count = 0;

// Runs ONLY if condition is true
while (count < 3) {
  console.log("Running...");
  count++;
}

let i = 10;

do {
  console.log("I run at least once!");
  i++;
} while (i < 5); // Condition is false, but it already ran once.

let cars = ["BMW", "Volvo", "Mini"];

for (let car of cars) {
  console.log(car);
}
// Output: "BMW", "Volvo", "Mini
// "

let user = { name: "Alice", age: 25, role: "Admin" };

for (let key in user) {
  // key = "name", then "age", then "role"
  // user[key] = "Alice", then 25, then "Admin"
  console.log(key + ": " + user[key]);
}

for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // Skip 2
  if (i === 4) break; // Stop completely at 4
  console.log(i);
}
// Output: 0, 1, 3 (2 is skipped, loop dies before 4 prints)

/*
Loop Type	Best Used For
for ->	Counting specific iterations (i=0 to i=10).
while ->	Looping until a condition changes (state unknown).
for...of -> 	Arrays (iterating over values).
for...in ->	Objects (iterating over keys).
forEach() -> Functional alternative for Arrays (cannot use break).
*/

let runners = ["Bolt", "Blake", "Gatlin"];

runners.forEach((runner, index) => {
  console.log(`Rank ${index + 1} : ${runner}`);
});

/* loops challenges */

let sum = 0;
let ii = 0;

while (ii <= 5) {
  sum += ii;
  ii++;
}
console.log(sum);

let teaCollection = [];
let tea;

do {
  tea = prompt(`Enter your favourite tea (type "stop" to finish) :`);

  if (tea !== "stop") {
    teaCollection.push(tea);
  }
} while (tea !== "stop");

teaCollection.forEach((val) => {
  console.log(val);
});
