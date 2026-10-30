

// const p = new Promise( function(resolve , reject){
//     // resolve("Hii")
//     reject("Server down hai")
// })
    // console.log(typeof p);
    // console.log(p);

    // p.then(function onFulfiled(val){
    //     console.log(val)
    // } , function onrejected(val){
    //     console.log(val)
    // })

    

    // const res =p.then(function (val){
    //     console.log(val)
    //     } , function (val){
    //     console.log(val)
    // })

    // console.log("res", res)

    //  p.then(function onFulfiled(val){
    //     console.log(val)
    //  }).then(function onFulfiled(val){
    //     console.log(val)
    //  }).then(function onFulfiled(val){
    //     console.log(val)
    //  }).then(function onFulfiled(val){
    //     console.log(val)
    //  }).catch(function onFulfiled(val){
    //     console.log(val)
    //  }).finally(function onFulfiled(val){
    //     console.log("yeh hamesha print hoga")
    //  })


// console.log("a")  

// const p2 = new Promise( function(resolve , reject){
//     console.log("b")
//     resolve("Hii")
//     console.log("random")
//     // reject("Server down hai")
// })

// p2.then(function f2(val){
//     console.log("then");
//     console.log(val);
// }).catch(function f2(){
//     console.log("catch");
// }).finally(function f2(){
//     console.log("finally");
// })

// console.log("c")



// const p3 = new Promise(function (resolve, reject){
//     resolve()
// })



function searchPizza() {
    return new Promise(function (resolve, reject) {
        console.log("Pizza searching...");
        setTimeout(function fun1() {
            console.log("Here is the Pizza's Menu.");
            let price = 500;
            // a(price)
            resolve(price)
        }, 2000)
    })
}

function addToCart() {
    return new Promise(function (resolve, reject) {
        console.log("Pizza adding to cart...");
        setTimeout(function fun2() {
            console.log("Pizza Added to cart");
            resolve()
        }, 3000)
    })
}

function paymet(price) {
    return new Promise(function (resolve, reject) {
        console.log(`Payment Initiated , Amount : ${price}`);
        setTimeout(function fun3() {

            let isPaymentSuccessful = false

            if (isPaymentSuccessful) {
                console.log(`Payment Completed, Amount : ${price}`);
                resolve()
            } else {
                reject("Bhaiya payment failed")
            }


        }, 5000)
    })
}

let res = searchPizza()

res.then(function (price) {
    return addToCart(price)
}).then(function (price) {
    return paymet(price)
}).then(function () {
    console.log("Bss Aa hee gaya Pizza");
}).catch(function (err) {
    console.log(err);
})