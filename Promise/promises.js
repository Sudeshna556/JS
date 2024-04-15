// it is an object that  represents the completion or failure of an asynchronous operation and its resulting value. 

// A Promise is in one of these states or properties of promise object:
// pending: initial state, neither fulfilled nor rejected. // result : undefined
// fulfilled: meaning that the operation was completed successfully. // resulted value
// rejected: meaning that the operation failed. // error object


//creating a promise
  const promiseOne = new Promise (function(resolve,reject){
    // it has two parts resolve and reject
    // async tasks like db calls to insert,delete or any kind of data manipulations can be done,or cryptography related tasks, or network calls etc
     
    setTimeout(function(){
            console.log('async task');
            resolve() // connects resolve and .then fun
    },1000)
  
  })

// consuming a promise

 promiseOne.then(function(){ //.then : call back function which returns a value
  console.log("promise consumed");
 }) 

 // another way to this tasks

 new Promisetwo(function(resolve,reject){
  setTimeout(function(){
    console.log("async task 2");
    resolve()
  },1000)
 }).then(function(){
  console.log("async 2 resolved")
 })

 //----creating 3rd promise----//
  const promiseThree = new Promise(function (resolve,reject){
    // suppose a request comes that we have to recive
    setTimeout(function(){
        resolve( {username:"sid",email: "hello@gmail.com"});// we can pass values (arguements) on to this 
    },1000)
  })
  //data consumtion
  promiseThree.then(function(user){
    // parameter that we passed in to resolve can be accessed by promiseThree.then(we can set any name) 
    console.log(user);

  })


  //----creating 4th promise---//

  const promiseFourth = new promise(function(resolve,reject){
        // in case of errors
        let error = true;
      //let error = false; 
        if(!error){
          // if not error then resolve
          resolve({username:"sid",email: "hello@gmail.com"})
        }else {
          // else give an error
           reject('error: something went wrong')
        }

  },1000)

  // consume promise num 4
       
      //promiseFourth.then().catch() --> .then is used to accesse values of resolve() and .catch is used for error or reject

        promiseFourth.then((user)=>{
          console.log(user);
          return user.username // accessing username only
        }).then((username)=> {  // chaining of .then fun
            console.log(username);
        }).catch(function(error){
              console.log(error)
        }).finally(()=>console.log("promise is either resolved or rejected")) // default case

        // let error = false; incase of false it will print the username value
      
       