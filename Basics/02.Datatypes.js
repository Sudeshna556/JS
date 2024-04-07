"use strict" // treats all js code as newer version
 let name ="suddeshna"
 let age = 25
 let isloggedIn = false
 let state;

 //datatypes
  //number = 2 to power 53 an int or floating number
  //bigint = large number
 // string = " " used for characters
 // boolean =  returns true/false value
 // null = standalone value , it is typeof object. It is differnt from Null or NULL since js is case-sensitive
 // undefined = a property or variable whice does not have any value
 // symbol 
 // object
 
 console.log(typeof 3)
 console.log(typeof "sid")
 console.log(typeof age)
 console.log(typeof null)

/*
Based on how data store in Memory datatypes are two types in JS
1. Primitive Datatypes (Call By Value):
7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

2. References Type/Non-primitive Datatype:
Arrays, Objects, Functions

JavaScript is a Dynamically Typed Language
*/


//Symbol Example
const num = Symbol("123");
console.log(typeof num);

//BigInt
const bigNumber = 5465246257627626778789n;
console.log(typeof bigNumber);

//Arrays:
const heros = ["Sudeshna", "Sam"];
console.log(typeof heros);

//Objects:
let myObj = {
  name: "Sayan",
  age: 21,
};
console.log(typeof myObj);

//Functions:
const name1 = function () {
  console.log("Hello World");
};
console.log(typeof name1);

//Output of all Datatypes:
/*
null: object
Undefined: undefined
Symbol: symbol
BigInt: bigint
Arrays: object
Object: object
Functions: function
*/

//++++++++++++++++++++++++++++++++++++++
/*  
## All Primitive Datatypes are store into Stack
  # In Stack only copy of a value is pass, 
  Original one is remain same

## All Non-Primitive Datatypes are store into Heap
  # In Heap references of value is passed, 
  if it changed original one is also changed

*/
