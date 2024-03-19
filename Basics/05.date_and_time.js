let myDate = new Date 
console.log(typeof myDate); // it says an object
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

/*
output: object
Tue Mar 19 2024 16:13:10 GMT+0000 (Coordinated Universal Time)
Tue Mar 19 2024
2024-03-19T16:13:10.200Z
2024-03-19T16:13:10.200Z
Tue Mar 19 2024 16:13:10 GMT+0000 (Coordinated Universal Time)
3/19/2024
3/19/2024, 4:13:10 PM
*/

 myDate = new Date (2024,0,19) // * In JS months starts from 0  
 console.log(myDate.toDateString());
 // output : Fri Jan 19 2024 

 myDate = new Date (2024,0,19,5,9) 
 console.log(myDate.toLocaleString());

 myDate = new Date ("02-19-2024") 
 console.log(myDate.toLocaleString());

 // Time stamp

 myDate = Date.now()
 console.log(myDate) // o/p : 1710865658310 (in millisecond)
 console.log(Math.floor(Date.now() / 1000));