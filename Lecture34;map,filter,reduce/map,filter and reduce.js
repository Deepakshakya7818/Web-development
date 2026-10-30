// let originalPrices = [463, 654, 2346]

// let discountPrices = []

// for(value of originalPrices){
//     discountPrices.push(value * 0.9) //10%percent
// }

// console.log(originalPrices);
// console.log(discountPrices);

// const discountPrices2 = originalPrices.map((value) => {
//     return value * 0.9;
// })
// console.log(discountPrices2);



// let students = [
//     {
//         name: "Mansi",
//         marks: 56,
//     },
//     {
//         name: "Ankit",
//         marks: 33,
//     },
//     {
//         name: "Prakash",
//         marks: 98,
//     },
// ]

// // let studentNames = []

// // students.forEach((value) => {
// //     studentNames.push(value.name)
// // })

// const studentNames = students.map((student) => {
// return {...student , marks: student.marks+10};
// })

// console.log(studentNames)


//FILTER

let students = [
    {
        name: "Mansi",
        marks: 56,
    },
    {
        name: "Ankit",
        marks: 33,
    },
    {
        name: "Prakash",
        marks: 98,
    },
    {
        name: "Deepak",
        marks: 90,
    },
    {
        name: "Ram",
        marks: 27,
    },
]

// let failedstudents = []

// students.forEach((students) => {
//    if(students.marks<33){
//     failedstudents.push(students)
//    }
// })
// console.log(failedstudents);

//filter method

// const failedstudents = students.filter((student) => 
//   student.marks<33).map((students) => students.name)

// // const failedstudentName = failedstudents.map((students) => students.name)
// console.log(failedstudents);




         //REDUCE

let marks = [56, 65, 75, 34, 98] 

// let totalmarks = 0
// marks.forEach((marks) => totalmarks = totalmarks + marks)

const totalmarks = marks.reduce((accumulator , currentValue) => {
    accumulator = accumulator +currentValue;
    return accumulator;
} ,0)

console.log(totalmarks);