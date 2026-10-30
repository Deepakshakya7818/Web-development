// console.log("Task1");


// setTimeout(()=>{
//     console.log("Task2");
// },5000)

// let startTime = Date.now()
// while(Date.now()-startTime<1000){

// }

// setTimeout(()=>{
//     console.log("Task5");
// },7000)

// setTimeout(()=>{
//     console.log("Task4");
// },1000)

// console.log("Task3");


// let count = 1;

// let id =  setInterval(function(){
//     count++
//     if(count>5){
//         clearInterval(id)

//     }
//      console.log("hii")


// },0)



const body = document.querySelector("body")

let colorStr = "0123456789abcdef";

setInterval(() => {
    let color = ""
    for (let i = 0; i < 6; i++) {
        let randomvalue = Math.floor(Math.random() * colorStr.length)
        color = color + colorStr[randomvalue]
    }
    body.style.backgroundColor = `#${color}`

}, 10000);