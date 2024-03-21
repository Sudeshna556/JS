// this keyword
const user ={
    username : "sudeshna",
    userId : "123@sdas",

 welcomeMessage : function (){
    console.log(`${this.username} , welcome to the website`);
  }
}
user.welcomeMessage()


user.username = " sid"
user.welcomeMessage()

/*
    In Node Environment --> Print Globally:
      console.log(this)
      Output: {}
    In Browser --> Print Globally:
       console.log(this)
       Output: Window Object (It's a global Object of Browser)


*/ 

/* arrow function */

    const animal = () => {  // '=>' this is arrow function
        let animalname = " lion "
        console.log(this.animalname);
    }
    animal () // undefined

    // basic syntax of arrow function () => {}

    const addTwo = (num1,num2) => {
            return num1 + num2
    }
    console.log(addTwo(3,5))


    // implicit return where we dont need to write the return keyword
     
    let multiply = (num1 , num2) => num1 * num2 // implicit return

    /* note: if we use {} then we have to use the return keyword but if we use
     only () then we dont need to use return since it will automatically return output*/
    console.log(multiply(5,6))

    // how can we return an object by arrow function
        // const objectUser = ()=>{ username: " sid"}
        // console.log(objectUser()) // undefined
        
        const objectUser = ()=>( {username: "sid"}); // we need to declare the object inside ({})
        console.log(objectUser());

        

















