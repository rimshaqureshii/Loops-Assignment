//Objective: Practice working with arrays in TypeScript and using for loops and for...of loops
//to iterate through array elements.

let myArray : number[] = [];
  for (let b = 1; b <= 10; b++) {
    myArray.push(b);
    
  }
    console.log("My Array" , myArray);

     for (let r =0; r  < myArray.length; r++) {
        console.log(`element ${r} : ${myArray[r]}`);
        
     }
    
    for (const value of myArray){
        console.log(`${value}`);
        
    }


    