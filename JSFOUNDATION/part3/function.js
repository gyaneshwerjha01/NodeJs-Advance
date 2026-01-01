/*
function processTeaOrder(makeTea) {
  return makeTea("Earl Grey"); // returning a function
}

function makeTea(val) {
  console.log(val);
}

processTeaOrder(makeTea); // passing a function
*/

function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType} tea`;
  };
}

const teaMaker = createTeaMaker();
let result = teaMaker("green");
console.log(result);
