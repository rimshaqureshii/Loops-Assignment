//Objective: Practice working with objects in TypeScript and iterating over their properties using
//a for...in loop.
var myObject = {
    item1: "Mobile",
    item2: "Laptop",
    item3: "Computer"
};
for (var key in myObject) {
    console.log("key", myObject[key]);
}
;
