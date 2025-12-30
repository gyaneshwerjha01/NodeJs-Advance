// we can re-declare and it can create accidental bugs
// if I'm in a function, I'm available everywhere in that function
/*
var car1 = 2;
var car1 = 2;
*/

// can't re-declare
// if I'm inside { }, I stay inside {}
/*
let car2 = 3;
let car2 = 3;
*/

// can't change the value once it is created

const username = "Gyaneshwer Jha";
console.log(username);

/*
const firstname; -> we can't
firstname = "Gyaneshwer";
*/