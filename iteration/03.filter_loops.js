// forEach() doesnot return any value

const myNum =[1,2,3,4,5,6,7,8,9,10]
const newNums = myNum.filter((num) => num >5) // num accesthe values of array and then check the condition
// The values that pass the condition will return in form of an array
// filter() method : It calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values
// filter (callback fn) 
console.log(newNums) 
// output: [ 6, 7, 8, 9, 10 ]

/*const newNums = myNum.filter((num) => {
    num >5     ---> output:[]
}) 
   Note: in this case (implicit return) we have to use return keyword i.e, return num > 5 , ({}) works as scope
*/


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter((book) => book.genre === 'Fiction')
console.log (userBooks);
 userBooks = books.filter((book) => book.publish >= 2000)
console.log (userBooks);