class User{
    constructor(username)[
        this.username = username
    ]

    logMe(){
        console.log(`USERNAME IS ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email , pass){
        super(username)
        this.email = email;
        this.pass = pass;
    }

    addCourse(){
        console.log(`sjancjak ${this.username}`);
        
    }
}

const chai =new Teacher("chai", "chairbjda", "2323")
chai.addCourse()

const masala = new User("masala" )
masala.logMe()

console.log(chai instanceof User);
