/* 1. array is collection of multiple elements under a single variable,
   2. JavaScript arrays are resizable and can contain a mix of different data types.
   3.JavaScript arrays are not associative arrays i.e, it must be accessed using non-negative integers
   4.The first element of an array is at index 0 
*/

// array declaration
let myArray = [1,5,7]
console.log(myArray)
console.log(myArray[2])

// array methods

// 1. push method : adds values to the array
 
myArray.push(2,3)
console.log(myArray) // o/p : [ 1, 5, 7, 2, 3 ]

// pop method : it will remove the last value of an array
 myArray.pop()
 console.log(myArray) 

 myArray.unshift(4) 
 myArray.shift()
 console.log(myArray) 

 // include method : it will return true or false 
 console.log(myArray.includes(2)); // Check the element is present or not
 console.log(myArray.indexOf(2)); 

 let newArray = myArray.join()
console.log(Array);
console.log(typeof newArray) // string

let array1 = myArray.slice (1,2)
console.log (array1)
console.log("B", myArray)

let array2 = myArray.splice(1,3)
console.log(array2)









