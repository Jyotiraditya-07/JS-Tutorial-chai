const myArr = [1, 4,2 ," jyoti"]
console.log(myArr);
console.log(myArr[3]);

myArr.push(455)
console.log(myArr);

myArr.unshift(222)
console.log(myArr);

// slice and splice

console.log("A" , myArr);
const myn1 = myArr.slice(1,3)


console.log(myn1);
const myn2 = myArr.splice(1,3)
console.log(myn2);
