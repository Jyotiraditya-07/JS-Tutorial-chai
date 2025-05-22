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

// function loginUserMessage(username){
//     if(username === undefined){
//          console.log("please enter a username");
//          return
         
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage())

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 500, 5999));

const user = {
    username: "Jyoti",
    price: 200
}

function handObject(anyobject){
    console.log(` username is ${anyobject.username} and price i ${anyobject.price}`);
    


}

// handObject(user)

handObject({
    username: "Jyooti",
    price: 29999
})


const myNewArray = [200, 400, 100 , 4000]
function returnSecondValue(getArray){
    return getArray[1]

}

console.log(returnSecondValue(myNewArray));
