function sayMyName(){
    console.log("J");
    console.log("y");
    console.log("o");
    console.log("t");
    console.log("i");

    
    
}

// sayMyName()

// function addTwoNumbers(number1,number2){
//      console.log(number1+number2);
     
// }


// function addTwoNumbers(number1, number2){
//     // let result = number1+number2
//     // return result

//     return number1+number2
// }
// const result = addTwoNumbers(2,3)
// console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined){
         console.log("please enter a username");
         return
         
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())
