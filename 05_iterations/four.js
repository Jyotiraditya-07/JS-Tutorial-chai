const myObj = {
    js: "javascript",
    cpp: "cplus",
    rb: "ruby",
    swift: "apple"
}

//for in loop

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
    
}