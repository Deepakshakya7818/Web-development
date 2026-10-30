

// function fun1(callback){
//     console.log("Hii");
//     callback()
// }
// // fun1()

// function cb(){
//     console.log("this is callback function")
// }

// fun1(cb)


// let name = "Nishant"

// function hello(naam){
//     console.log(naam);
// }
// hello(name)


// let arr = ["a", "b", "c", "d"]

// function a(){
//     function b(){
      
//     }
//     return b

// }



function searchPizza(cb1) {
    console.log("pizza Searching...")
    setTimeout(function () {
        console.log("Here is the pizza's menu.");
        let price = 500;
        cb1(price)
    }, 2000)
}
function addtocart(cb2) {
    console.log("Pizza adding to cart...");
    setTimeout(function(){
        console.log("Pizza added to cart")
        cb2()
    },3000)
}
function payment(price , cb3){
    console.log("Payment initiative")
    setTimeout(function(){
        console.log(`payment completed, Amount: ${price}`)
       cb3()
    },5000)
}

searchPizza(function(price){
  addtocart(function(){
    payment(price,function(){
        console.log("Bas aa hi gya pizza")
    })
  })
})