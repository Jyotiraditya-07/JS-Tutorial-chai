const user = {
    username: "Jyoti",
    price: 4555,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     console.log(this);
    
// }

// chai()


// const chai = function(){
//     let username = "Jyotii"
//     console.log(this.username);  //undefined ayega this nahi lagana yaha
    
// }
// chai()

// const chai = () =>{
//     let username = "Jyotii"
//     console.log(this.username);
    
// }
// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

//or


const addTwo = (num1,num2) => (num1+num2)  //used in React alot
console.log(addTwo(3,4));
