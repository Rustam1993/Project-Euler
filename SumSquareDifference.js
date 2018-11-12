/*
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


*/

let number = 100;
let arrayFor100 = [];
for(let i = 1; i<=number; i++){
  arrayFor100.push(i)
}
// console.log(arrayFor100);




const squareArrayByEachNumber = arrayFor100.
map((number)=>number*number).
reduce((total,number)=>total+number,0);
console.log(squareArrayByEachNumber)


let squareArray = arrayFor100.reduce((total,sum)=> total+sum,0);
squareArray*=squareArray;
console.log(squareArray)
console.log(squareArray-squareArrayByEachNumber)