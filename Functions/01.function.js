function multiplyNum (num1,num2){       // In js we dont need to define the data type of parameters
    console.log( num1*num2); 
}
 multiplyNum(5 , 6)  // passing arguements

// or

 function add (a,b){       
    return a+b;
}
const result = add (6,3) // we can also store it into a variable
console.log(result)


function userMessage (username){
    return  ` ${username} just logged in `
}
console.log (userMessage("Sudeshna"))

console.log (userMessage()) //  o/p : undefined just logged in


function userMessage (username){
   if (username == undefined) {    // or   if (!username)
        console.log("please enter a user name");
        return 
   }
   
   
    return  ` ${username} just logged in `
}


console.log (userMessage())
 