function multiplyNum (num1,num2){       // In js we dont need to define the data type of parameters
    console.log( num1*num2); 
}
 multiplyNum(5 , 6)  // passing arguements

// or

 function add (a,b){       
    return a+b;
}
// expression
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


//  In case of passing multiple arguements 
// we can use rest operator (...) when the number of arguments are unknown

    function calculateCartPrice (...num1){
//! rest operator will packup all the arguement values and returns it into a single array
        return num1
    }
    //console.log(calculateCartPrice(2))
     
    console.log(calculateCartPrice(200,560,4000,8945))
    // output : [200,560,4000,8945]


    function multiplePara (var1,var2,...vars){
        console.log(var1,var2,vars)
    }
            
             
            console.log(multiplePara(200,560,4000,8945))

            /*
                  Output:
                  var1 = 200
                  var2 = 560
                  vars = [4000, 8945]
            */

// Functions with Objects

const user = {       // object declaration
    username : "sudeshna",
    userId:  "123@sdas"
}

function userObject (anyObject) {   // function declaration
        console.log(`username is ${anyObject.username} and userId is ${anyObject.userId}`);
}

userObject(user) // calling function and passing the object 
 
/*OR*/

// There is another way to pass the objects

userObject(  // instead of passing the object name here we can pass the whole object
    {
        username : " ",
        userId: " "
    }
) 


// passing arrays into a function

const newArray = [23, 345,678] // array declaration

function arrayFunction (getArray){
        return getArray;
} 
console.log(arrayFunction(newArray))
 



 