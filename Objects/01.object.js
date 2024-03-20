// An object is a collection of related data  consist of variables and functions which are called properties and methods when they are inside objects.
// object literals : It a way to declare objects in js, no singleton is formed
 


// declaring object literals
let jsUser = {
    name: "sudeshna",
    location: " bankura",
    email :"s@gmail.com",
    isLoggedIn : false ,
    lastLoggedIn : ["monday", "sunday"]/// we can also declare array
    
}

// how to access an object

console.log(jsUser.email) 
console.log (jsUser["email"]) // better way to do it

// Create a Symbol and take it as a key and print the value of the object

let sym = Symbol("hello")
  jsUser = {
    name: "sudeshna",
    location: " bankura",
    email :"s@gmail.com",
    isLoggedIn : false ,
    lastLoggedIn : ["monday", "sunday"],/// we can also declare array
    [sym] : "hello"
}
console.log (jsUser[sym]) 



// include function into an object

  jsUser.greeting = function(){
    console.log("Hello JS user")
  }
  console.log(jsUser.greeting())
  
  jsUser.greeting2 = function(){
    console.log(`Hello JS user , ${this.name}`)
  }
  console.log(jsUser.greeting2())