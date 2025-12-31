// 1. Creating an Array
let fruits = ["Apple", "Banana", "Cherry"]; 

// 2. Accessing Elements (Zero-indexed)
console.log(fruits[0]); // Output: "Apple"
console.log(fruits[2]); // Output: "Cherry"
console.log(fruits[3]); // Output: undefined (doesn't exist)

// 3. Modifying Elements
fruits[1] = "Blueberry"; // Replaces "Banana" with "Blueberry"

let numbers = [10, 20, 30];

// Add to End (Push)
numbers.push(40);    
// Result: [10, 20, 30, 40]

// Remove from End (Pop)
let last = numbers.pop(); 
// Result: [10, 20, 30] (variable 'last' is 40)

// Add to Start (Unshift)
numbers.unshift(0);  
// Result: [0, 10, 20, 30]

// Remove from Start (Shift)
let first = numbers.shift(); 
// Result: [10, 20, 30] (variable 'first' is 0)

let colors = ["Red", "Green", "Blue"];

// Modern Way (forEach) - Best for running a function on every item
colors.forEach((color) => {
    console.log("Color is: " + color);
});

// Traditional Way (For Loop) - Best if you need the index number specifically
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]); 
}

let nums = [1, 2, 3, 4, 5];

// MAP: Transform every element
let doubled = nums.map(n => n * 2); 
// Result: [2, 4, 6, 8, 10]

// FILTER: Keep only elements that pass a test
let evens = nums.filter(n => n % 2 === 0); 
// Result: [2, 4]

// REDUCE: Combine all elements into a single value
let sum = nums.reduce((total, n) => total + n, 0); 
// Result: 15 (1+2+3+4+5)

let users = ["Alice", "Bob", "Charlie"];

// Check if item exists (returns true/false)
let hasBob = users.includes("Bob"); // true

// Find specific item (returns the value or undefined)
let found = users.find(user => user.startsWith("C")); // "Charlie"

// Find index of item (returns number or -1 if missing)
let index = users.indexOf("Alice"); // 0

let data = ["A", "B", "C", "D", "E"];

// SLICE: Copies a portion (Start index, End index NOT included)
// Does NOT modify original array
let partial = data.slice(1, 4); 
// Result: ["B", "C", "D"]

// SPLICE: Removes or adds items in place
// Modifies original array!
// (Start index, How many to remove, Items to add...)
data.splice(2, 1, "NewC"); 
// Result: ["A", "B", "NewC", "D", "E"] (Removed "C", added "NewC")

// Spread Operator (...) - Merging arrays
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = [...arr1, ...arr2]; // [1, 2, 3, 4]

// Destructuring - Extracting values into variables
let coords = [100, 200];
let [x, y] = coords;
// x is 100, y is 200

let a = [...coords]; // create hard copy(seperate copy)

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);
let mixedCities = [...europeanCities, ...asianCities];

console.log(worldCities);
console.log(mixedCities);

console.log(typeof worldCities);
console.log(typeof mixedCities);

