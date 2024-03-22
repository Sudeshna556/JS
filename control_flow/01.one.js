// === Triple equal checks Value as well as Type of data where == checks only values if they are equal or not.

const username = "sudeshna"
 if(username=="sudeshna"){ //  if(username=="sid")  
    console.log(username) // if the above condition is true then only it will execute
 }else {
   console.log("wrong username") // otherwise else part will execute
 }

 const score = 450

 if (score > 100){
   const power =" fly";
   console.log(`userpower : ${power}`) // the scope of const and let variable is only inside the block 
 }
 // suppose we print this line here out of the block 
  //  console.log(`userpower : ${power}`)
 // output: power is not defined 
 // Reason is scope , we declare it out of {} 

 // But if we use var keyword then it can be accessed outside of the block as well since its scope is completely global which can cause errors in case of complex problems
 

 /** short-hand notation */
   // if (bal =300) console.log(bal) 


// ******* Nesting *******/
// use in case of multiple condition check
const userLoggedIn =true
const debitCard = true
const LoggedInfromGooogle=false
const  LoggedInfromEmail = true

if(userLoggedIn && debitCard && 2==2) // && it will check both the condition  if true or not
{
   console.log("allow to buy course");
}
if(LoggedInfromGooogle || LoggedInfromEmail){
   // || it checks multiple condition
      console.log("user logged in")
}

// ************ Switch case ***********//

 const weekdays = 4;

 switch(weekdays){
   case 1 : 
               
               console.log("sunday")
               break;
   case 2 : 
               
               console.log("monday")
               break;


   case 3 : 
               
               console.log("tuesday")
               break;
   case 4 : 
              
               console.log("thurseday")
               break; 
   default :
               console.log("unknown day")
               break;           

 }
/**Falsy Values**/

// false, 0, -0, bigint : 0n, "" , null , undefined, NaN these are falsy values

/**Turthy Values**/
 
// "0", 'false', " ", [], {}, function(){}this is an empty function



/** logical operators */

//*&& and operator
//   || logical operator























