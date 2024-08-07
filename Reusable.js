
//Expanding Functionality
 const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26\n";


 const test = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

 const twoDArray = test.split("\n").map((el) => el.split(","));
 console.log(twoDArray);


//Transforming Data
const test_input = 
[["ID", "Name", "Occupation", "Age"],
 ["42", "Bruce", "Knight", "41"],
 ["57", "Bob", "Fry Cook", "19"],
 ["63", "Blaine", "Quiz Master", "58"],
 ["98", "Bill", "Doctor’s Assistant", "26"]]
const test_output = 
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]

// const attr = test_input.shift()
// const result = test_input.map((el) => {
//   const obj = {}
//   attr.forEach((attr, i) => {
//     obj[attr.toLowerCase()] = el[i]
//   })
//   return obj
// })

// console.log(result);

//Sorting and Manipulating Data

const people = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" },
    ]
    
 people.splice(1,0, {id: "48", name: "Barry", occupation: "Runner", age: "25"}); //I inserted object at index 0
 console.log(people);

 people.pop(); // I removed the last element
 console.log(people);

 people.push({id: "7", name: "Bilbo", occupation: "None", age: "111"});
 console.log(people);


 let totalAge = 0;
 for(let i = 0; i <people.length; i++){
totalAge += parseInt (people[i].age);
 }
 const averageAge= totalAge/people.length;
 console.log(averageAge);

//Full Circle
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" },
  {id: "48", name: "Barry", occupation: "Runner", age: "25"}
  ]
 
  function arrayToRegular(data){
    let csv = ' ';
  }