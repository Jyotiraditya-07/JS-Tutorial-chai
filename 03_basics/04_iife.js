// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
    
// }
// chai()

//or

(function chai(){  //named iife
    console.log(`DB CONNECTED`);
    
})();  //iife used to prevent global scope pollution


( (name) => {
    console.log(`DB CONNECTED TWO ${name} `);
    
}) ("Jyotiii")

