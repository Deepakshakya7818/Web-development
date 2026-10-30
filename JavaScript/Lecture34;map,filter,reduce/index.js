// let student = {
//     Name : "Deepak",
//     rollNO : 34,
//     Subject : ["math", "english", "hindi"],

// }
// //How to rename Key
// let {subject : vishy,totalMarks=500, ...hello} = student
// console.log(vishy);
// console.log(totalMarks);



// let obj1 = {
//     name : "Deepak",
//     Phone : 7818998196,
//     // name: "yash",
//     // phone : "923439021"
// }
// let obj2 = {
//     address : "india",
//     adharcard : 245892273854,
//     // djhd : "yash"
// }

// let obj3 = {...obj1, ...obj2}
// console.log(obj3);



//ARRAY and OBJECT Update

// const arr = [2, 4, 3, 5]

// arr[1] = "updated";
// console.log(arr);



// const obj = {
//     name : "kasturi",
//     rollNo : 23,
//     address : null
// }

// // obj ={
// //    name : "deepak",
// // }
// obj.name = "Deepak",
// delete obj.rollNo

// console.log(obj);
// console.log(obj.address?.street);


// let arr = [2, 4, 9, 5, 3, 8]
// // arr.splice(1,3); //delete
// // arr.splice(2,0,"hello") //add
// arr.splice(2,2,"Ram"); //replace
// console.log(arr)



//let arr = [2, 4, 9, 5, 3, 8]
// let trimArr =arr.slice(0,4)
// console.log(trimArr);


// let arr1 = [2, 4, 9, 5, 3, 8]
// let res = arr1.find((value) => {return value === 4;

// })

// console.log(res);


// let arr = [2, 4, 9, 5, 3, 8]
// let resIndex = arr.findIndex((value) => {return value === 4;

// })

// console.log(resIndex);



// let arr3 = [1, 3, 4, 5, 6, 7, [9, 8, 5, [8, 3, 5, 6]]]

// console.log(arr3.flat());
// console.log(arr3.flat(Infinity));


//mutability

let arr4 = [23, 45, 68, 123, 345, 9]
let arrCopy = arr4;
let arrCopy2 = [...arr4];

arrCopy2.pop()

console.log("arr4",arr4)
console.log("arrCopy", arrCopy2);