//singleton

//object literals

const mySym = Symbol("key1")

const JsUsers = {
    name: "Jyotiraditya",
    "full name": "Jyotiraditya Das",
    [mySym]: "mekey1",
    age: 22,
    location: "Silchar",
    email: "jyoti@231.com",
    isLoggedIn: false,
    lastLoginDays: ["Monaday", "Sunday"]
}

// console.log(JsUsers.email);
// console.log(JsUsers["email"]);
// console.log(JsUsers["full name"]);
// console.log(JsUsers.mySym);  //donot use this
// console.log(JsUsers["mySym"]); //use this 

// Object.freeze(JsUsers)

JsUsers.greeting = function(){
    console.log("Hello Js user");
    

}

console.log(JsUsers.greeting());

JsUsers.greetingtwo = function(){
    console.log(`Hello Js user, ${this.name}`);
    

}
console.log(JsUsers.greetingtwo());

