// const coding = ["js", "ruby", "java", "cpp", "c"]

// const values = coding.forEach( (item) =>{
//     console.log(item);
//     return item
// })
// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums =  myNums.filter( (num) => num>4 ) //use return keyword if using {} here
// console.log(newNums);


const newNums = []
myNums.forEach( (num) => {
    if(num>4) newNums.push(num)
})
console.log(newNums);




