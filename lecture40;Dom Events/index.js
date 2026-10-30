

let div = document.querySelector("#reveal-gift")
let h1 = document.querySelector("#gift")

let btn = document.querySelector("#btn")

function revealGift(event) {
    console.log(event);
    console.log(event.type);
    console.log("target" ,event.target);
    console.log("current target",event.currentTarget)
    h1.classList.toggle("hidden")
    h1.classList.add("visible")
}
// btn.addEventListener('click' , function(){
//     console.log("hello bacchhaaa")
// })

// btn.addEventListener('click' , () => {
//     console.log("Hello bachho")
// })

// div.addEventListener('click', revealGift)

// function fun1(e){
//     console.log(e)
// }


// btn.addEventListener('click' ,fun1 ,{ once:true})

// btn.removeEventListener('click' , fun1)



let outer = document.querySelector("#outer")
let inner = document.querySelector("#inner")

let btn2 = document.querySelector("#btn2")

outer.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log("outer")
})

inner.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log("inner")
})

btn2.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log("btn2")
})

