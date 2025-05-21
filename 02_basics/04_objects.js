//const tinderUser = new Object()
const tinderUser= {}

tinderUser.id = "2212abs"
tinderUser.name = "Sabrina"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser= {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Jyotiraditya",
            lastname: "Das"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1:"a", 2:"b"}
// const obj2 = {3: "c", 4: "b"}

// // const obj3 = { obj1, obj2}
// // const obj3 = Object.assign( {} ,obj1 , obj2)

// const obj3 = {...obj1, ...obj2} //use this always
// console.log(obj3);

const course = {
    coursename: "chai and sutta",
    price: "999",
    courseInstructor: "Jyoti"
}

// course.courseInstructor

const {courseInstructor: Instructor} = course
console.log(Instructor);


 