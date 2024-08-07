//To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this - experiment with what you think is the most efficient. Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
//Accomplish the following:
// //Loop through all numbers from 1 to 100.
// //If a number is divisible by 3, log “Fizz.”
// //If a number is divisible by 5, log “Buzz.”
// //If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// //If a number is not divisible by either 3 or 5, log the number.
// //Remember to commit your solution once it is working.

 for (let i = 1; i <= 100; i++) {
 if (i % 3 === 0 && i % 5 === 0)
{  
   console.log('Fizz Buzz');
 } else if ( i % 3 === 0) {
    console.log('Fizz');
   } else if ( i % 5 === 0) {
    console.log('Buzz');
   } else {
     console.log(i)
    }
   }

// //Context: A prime number is any whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1. For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself (5) and 1. Similarly, the numbers 7 and 11 are prime. As numbers become larger, determining whether or not they are prime is increasingly difficult, but loops make this process relatively easy!
// // a script that accomplishes the following:
// //Declare an arbitrary number, n.
// //Create a loop that searches for the next prime number, starting at n and incrementing from there.
// //As soon as you find the prime number, log that number and exit the loop.
// //Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.

 function isPrime(num) {
   if (num <= 1) {
       return false;
  } else if (num <= 3) {
      return true;
   } else if (num % 2 === 0 || num % 3 === 0) {
      return false;
   } else {
       for (let i = 5; i * i <= num; i += 6) {
           if (num % i === 0 || num % (i + 2) === 0) {
               return false;
           }
       }
       return true;
   }
 }
 function findNextPrime(n) {
  let nextNumber = n + 1;
  while (true) {
      if (isPrime(nextNumber)) {
          console.log(nextNumber);
           break;
                 } else {
         nextNumber++;
      }
   }
 }

 findNextPrime(20)


 
//CV

let csvFile =
"ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let element = "";
let rowElement = [];
let rows = [];
for (let i = 0; i < csvFile.length; i++) {
console.log(i + "this is i value");
 console.log(csvFile.length + "this is i length");
 if (csvFile[i] === ",") {
  console.log(csvFile[i] + "this is csvFile[i] value");
  rowElement.push(element);
  element = "";
 } else if (csvFile[i] === "\n") {
   rowElement.push(element);
   rows.push(rowElement);
   console.log(element + " this is element  added value");
   console.log(rowElement + " this is rowElement  added value");
   element = "";
   rowElement = [];
} else {
   element += csvFile[i];
   console.log(element + " this is element value");
 }
}
console.log(
 element + " this is element ddddddv beforrree..... last value"
);
if (element != "") {
 console.log(element + " this is element ddddddv............. last value");
 rowElement.push(element);
}
if (rowElement.length > 0) {
 rows.push(rowElement);
 console.log(rowElement + " this is element  last value");
 console.log(rows + " this is row  last added value");
}
rows.forEach((row) => {
 console.log(row.join(","));
});



