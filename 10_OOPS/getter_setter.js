class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get password(){
        return this._password.toUppercase()
    }

    set password(value){
        this._password = value
    }
}

const jyoti = new User("cbhcbdsh", "123")
console.log(jyoti.password);
