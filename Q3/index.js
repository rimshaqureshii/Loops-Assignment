//Objective: Create a program that increments a counter by a specified step value using a
//do...while loop and prints the counter value to the console until it reaches or exceeds 100.
var counter = 0;
var step = 5;
do {
    console.log("Counter Value ".concat(counter));
    counter += step;
} while (counter <= 100);
console.log("Counter has been Finished");
