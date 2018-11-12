/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.


*/



let result;
let temp;
let temp2;
let array = [];

function bravo(num1,num2){
 for (let i = 1; i<=num1; i++){
   for (let j = 1; j<=num2; j++){
     result = i*j;
     temp = result.toString().split("").join("");
     temp2 = result.toString().split("").reverse().join("")
     if (temp===temp2){
       array.push(temp);
     }
   }
 }
 let maximumNumber = 0;
 array.forEach((eachString)=>{
  let b =  Number(eachString);
  if( b > maximumNumber){
    maximumNumber = b;
 
  }
 })
 return maximumNumber;
}

bravo(999,999)
