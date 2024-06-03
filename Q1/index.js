//Objective: Create a list of lesson objects in TypeScript with alternating statuses to indicate
//whether each lesson is running this year.
var myWork = [];
for (var i = 1; i <= 10; i++) {
    var lesson = {
        name: "lesson ".concat(i),
        status: 1 % 2 === 1
    };
    myWork.push(lesson);
}
console.log(myWork);
