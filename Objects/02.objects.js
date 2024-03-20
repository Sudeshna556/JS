// object constructor or singleton object

// singleton object declaration

const JSuser = new Object();

console.log(JSuser) // output : {}  --> this is called an empty object

const tinderuser = {} // this is also an empty object
 // now we can add values to it

  tinderuser.name = "Sid"
  tinderuser.id = "s@123"
  tinderuser.isLoggedIn = false;

  console.log(tinderuser)

  // chaining of objects whithin an object


  const regularUser = {
       email : "s@gmail.com",
        fullname: {
            userfullname : {
                firstname: "Sid",
                lastname : "Roy"
            }
            
        }
  }
  // console.log(regularUser.fullname)
  console.log(regularUser.fullname.userfullname)


// merge or combine objects

const obj1 = {   
    1 :"A",
    2 : "B"
}
 const obj2 = {   
    3: "C",
    4: "D"

 }
 // const obj3 = { obj1,obj2 }
 // console.log(obj3) // o/p : { obj1: { '1': 'A', '2': 'B' }, obj2: { '3': 'C', '4': 'D' } }

 // Better way to do it is assign method where it copies all the properties of an object to a targate object.

 // const obj3 = Object.assign({}, obj1,obj2) // {} this empty object works as target and others are sourse b/c in case of multiple objects it can be confusing
 // console.log (obj3)  // output : { '1': 'A', '2': 'B', '3': 'C', '4': 'D' }

 // OR 

   const  obj3 = { ...obj1, ...obj2}  // ... this is spread operator 
   console.log(obj3) // it'll give same output --> { '1': 'A', '2': 'B', '3': 'C', '4': 'D' }



// Get all the keys or values into a Array format (array of objects)
 const user = [
    {    
        id: 256,
        email:"s@gmail.com"
    },

    {    
        id: 256,
        email:"s@gmail.com"
    },
    {    
        id: 256,
        email:"s@gmail.com"
    },
    {    
        id: 256,
        email:"s@gmail.com"
    }
 ]

 console.log(user[1].email)


 console.log(Object.keys(tinderuser)) // for getting the keys
 console.log(Object.values(tinderuser)) // for getting the values of keys
 
 
 console.log(Object.entries(tinderuser)) // array inside array , getting all keys and values in array
 



 





