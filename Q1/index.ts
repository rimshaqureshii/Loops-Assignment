//Objective: Create a list of lesson objects in TypeScript with alternating statuses to indicate
//whether each lesson is running this year.

let myWork : {name : string, status: boolean}[] = [];
for (let i = 1; i <= 10; i++) {
    let lesson = {
        name: `lesson ${i}` , 
        status: 1 % 2 === 1
    };
    myWork.push(lesson);
}
  console.log(myWork);
  




