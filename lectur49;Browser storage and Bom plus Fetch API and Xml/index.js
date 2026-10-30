// let storage =localStorage.setItem("num", 1)
localStorage.setItem("num1", 1)
localStorage.setItem("num2", 1)
localStorage.setItem("num3", 1)



let result = localStorage.getItem("num");
console.log(result);


let result2 = localStorage.key("0");
console.log(result2)

let result3 = localStorage.removeItem("num")
// console.log(result3)


// let result4 = localStorage.clear()

document.querySelector("#clear-local-storage").addEventListener("click", () =>{
    localStorage.clear()
})

document.querySelector("#add-session-item").addEventListener("click", () =>{
    sessionStorage.setItem("session", "item")
})