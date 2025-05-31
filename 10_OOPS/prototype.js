// let myName = " hitesh"
// console.log(myName.truelength);


let myHeros = [ "thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling"

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.jyoti = function(){ 
       console.log(`jyoti is present in all objects`);
    
}

Array.prototype.heyJyoti = function(){
    console.log(`Jyoti says hello`);
    
}



myHeros.heyJyoti()
heroPower.jyoti()
myHeros.jyoti()