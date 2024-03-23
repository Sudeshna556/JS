for(let i=0;i<=10;i++){
    console.log(i)
    //console.log(`value of i is : ${i}`)
}

// table print 0 to 10

for(i=0;i<=10;i++){
    console.log (`outer loop value : ${i}`);
    for(j=0;j<=10;j++){
        console.log(i+ '*' +j + '=' + i*j);
    }
}


// array print using for loop
const myheros = ["Netaji" ,"Bhagatsingh" , "Vallabhbhai Patel" ]
for(index=0;index<=myheros.length;index++){
   const element = myheros[index];
   console.log(element);

}


// break and continue


// while loops


// while (condition){}

const myHeros = ["Netaji" ,"Bhagatsingh" , "Vallabhbhai Patel" ]
while (index<=myHeros.length){
   const element = myheros[index];
   console.log(element);

}

//do-while loop

let score =11;
do{
    console.log( `score is ${score}`) //first it will do the task so it  will first print 11
    score++;
}
while(score<=10) // at last check condition

