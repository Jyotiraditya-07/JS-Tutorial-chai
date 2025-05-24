const userEmail = "jyoti@123"

if (userEmail){
    console.log("got user email");
    
} else {
    console.log("dont use");
    
}


// falsy values
// false , 0 , -0, BigInt 0n, "" , null, undefined , NaN

//truthy values
// "0", 'false' , " ",[] , {}, function(){}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10

console.log(val1);


//Terniary Operator

//condition ? true: false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80");

