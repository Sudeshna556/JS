// for of loop

const arr = [2,4,6,8];
for(const num of arr){
    console.log(num)
}

const string = " welcome home";
for(const welcomeMeassage of string ){
    console.log( ` each char is ${welcomeMeassage}`)
}

// Maps

const map =new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('DE',"Germany")

//console.log(map);

/**?use for-of loop**/
// it returns values of an object

for(const namesOfPlaces of map){  
    // or,  for(const [namesOfPlaces,values] of map)
    //       console.log (keys,':-' values)
    console.log (`Names are :- ${namesOfPlaces}`)
}

/***Objects using for-in loop***/

/**
 *  for in syntax : for (variable in object)
                     statement

 */

const myObject = {
    js : 'javascript',
    py:'python',
    cpp:'c++',
    rb:'ruby'
}
// accessing the keys and there values of object
    for(const keys in myObject ){ 
        //console.log(myObject[keys])
        console.log(`${keys} shortcut is for ${myObject[keys]}`);
    }

/** 
   Note:1. for-in loop returns the keys of an object that key is used to access the values of keys i.e, objectname[keys]
        2. We can't use for-in loop for Map iteration (this map is non-iterable)
**/ 

   
        

