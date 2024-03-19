let name = " Sid "
let score = 35

// console.log (name+score); // This the outdated 

// Instead we can use backticks (` `) 
 
console.log(`my name is ${name} and score ${score}`);  

/* This is known as string interpolation,String interpolation is a great programming language feature that allows injecting variables,
 function calls, and arithmetic expressions directly into a string */


 // string object 
   
 const myName = new String ("sudeshna") 

 console.log (myName[1]);
 
 // to get the length use built-in length property

 console.log (myName.length)

 // other methods
 console.log (myName.toUpperCase())
 console.log (myName.charAt(3)) // to check the character at a specified index 
 console.log (myName.indexOf('n')) // to check index of a specified character
// substring
 const newString = myName.substring (0 , 4) // 0 and 4 are start position, and end position 
 console.log (newString);
 //slice
 const anotherString = myName.slice(-8 , 4)
 console.log(anotherString);

 // trim

 const newStringOne = " sudeshna "
 
 console.log (newStringOne.trim());
 console.log(newStringOne)

 const url = "https://github.com@Sudeshna556/JS"
 // replace @ with / 
 console.log (url.replace ('@','/') )
 // output : https://github.com/Sudeshna556/JS


