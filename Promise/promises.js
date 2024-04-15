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
            resolve() // connect resolve and .then fun
    },1000)
  
  })

// consuming a promise

 promiseOne.then(function(){ //.then : call back function which returns a value
  console.log("promise consumed");
 }) 
