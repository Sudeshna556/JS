 


if (true){
    // this is block scope
 let a =10
 const b =30
// let and const wont print
console.log(a) // 10
console.log(b)
 var c = 50
}

//console.log (a)  // it gives error since block scope variables cant be accessed from outside of block
//console.log (b) // same for const
// console.log (c)
// var will execute even outside of block, it can be accessed from everywhere

/*
var d = 500; // global scope
 if(true){
    var d =45;
    console.log(d) // 45
 }

 console.log(d) // output : 45 , it can be accessed from everywhere
 */



 let e= 500; // global scope
 if(true){
    let e =200
    console.log(e) // 200
 }

 console.log(e) // 500 