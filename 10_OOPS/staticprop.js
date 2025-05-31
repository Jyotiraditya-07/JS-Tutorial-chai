class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`username is ${this.username}`);
        

    }

    static createId(){
        return `234`
    }
}

const jyoti = new User("Jyoti")
jyoti.createId()
console.log(jyoti.createId());


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email;
    }
}


const Iphone = new Teacher("iphone", "ipabca")
console.log(Iphone);
Iphone.logMe();
console.log(Iphone.createId());




