// object literals : collection of properties and methods

// object literal
   const user = {
    username : "sd", //properties
    pw: 578,
    signedin: true, 
   

   getUserDetails : function(){
   // console.log("get user details from database")
    console.log(`username : ${this.username}`);
// this keyword is used to get the current context
         console.log(this)

   }
}
//    console.log(user.username);
//    console.log(user.getUserDetails());
//    console.log(this);



// object constructor 
const promiseOne = new Promise()
// new keyword is used as constructor function 
//constructor function allows us to create multiple instances from a single object
//


