//Objective: Practice working with arrays in TypeScript and using for loops and for...of loops
//to iterate through array elements.
var myArray = [];
for (var b = 1; b <= 10; b++) {
    myArray.push(b);
}
console.log("My Array", myArray);
for (var r = 0; r < myArray.length; r++) {
    console.log("element ".concat(r, " : ").concat(myArray[r]));
}
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var value = myArray_1[_i];
    console.log("".concat(value));
}
