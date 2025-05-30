const promiseOne = new Promise(function(resolve , reject){
    //do async task
    // DB calls, cryptography , network
    setTimeout(function(){
       console.log('Aysinc task is complete');
       resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
    
})


new Promise(function(resolve, reject){
   setTimeout(function(){
      console.log("aysnc task 2");
      resolve()
      
   }, 1000)
}).then(function(){
    console.log("async 2 resolved");
    
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username: "chai", email: "cahi@code.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
    
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "jyoti", pass: "1233"})
        }else{
            reject('ERROR WENT WRONG')
        }
    }, 1000);
})

promiseFour.then((user)=> {
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=> console.log("the promise is either resolved or rejected");
)


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "jyoti", pass: "1233"})
        }else{
            reject('ERROR JS WENT ROGUE')
        }
    }, 1000);
})

async function consumePromiseFive(){
   try {
    const responce = await promiseFive()
    console.log(responce);
   } catch (error) {
    console.log(error);
    
   }
    
}

consumePromiseFive()


async function getAllUsers(){
    try {
        const responce = await fetch('https://api.github.com/users')
        const data = await responce.json();
        console.log(data);
    } catch (error) {
        console.log(error);
        
    }
}

getAllUsers()


fetch('https://api.github.com/users')
.then((responce)=>{
    return responce.json
})
.then((data)=>{
    console.log(data);
    
})
.catch((error) => console.log(error);
)
