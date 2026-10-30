//object

// let product = {
//     price: 39288,
//     avgRating: 4.5,
//     totalRevies: 75,
//     discount: 10,
//     productname: "iphone",
//     'first-name': "Deepak",
//     printproductname: function(){
//         console.log(this.productname);
//     },
//     printDiscount(){
//         console.log("10%");
//     }
// }

// console.log(product["first-name"])
// console.log(product.price)

// product.printproductname();
// product.printDiscount();

// console.log(Object.keys(product));
// console.log(Object.values(product));
// console.log(Object.entries(product));



//FOR OF LOOP - ARRAY

// let product1 = [9344,4.5,75,10,"iphone"]
// for(value of product1){
//     console.log(value);
// }

// //FOR IN LOOP - OBJECT

// for(let i = 0; i<product1.length; i++){
//     console.log(product1[i]);
// }

// //FOR EACH LOOP - ARRAY

// product1.forEach(function(value , index){
//     console.log(value , index);
// })



// function b(num){
//     console.log(num);
//     num()
//     console.log("b");
// }

// b(function a (){
//     console.log("a");
// })


// function b(fun){
//     console.log("b");
//     console.log(fun)
//     fun()
// }
// b(function a (){
//     console.log("a")
// })


// let product1 = [9344,4.5,75,10,"iphone"]
// for(value in product1){
//     console.log(product1[value]);
// }



//DESTRUCTURING

// let product1 = [9344, 4.5, 75, 10, "iphone"]
// const [a, b, c, e, f, g] = [9344, 4.5, 75, 10, "iphone"]
// console.log(a);


// let product = {
//     price: 39288,
//     avgRating: 4.5,
//     totalRevies: 75,
//     discount: 10,
//     productname: "iphone",
//     'first-name': "Deepak",
//     printproductname: function(){
//         console.log(this.productname);
//     },
//     printDiscount(){
//         console.log(this.discount);
//     }
// }

// let{price, printDiscount, avgRating} = product
// // console.log(price ,printDiscount(), avgRating);


// for([key , value] of Object.entries(product)){
//     console.log(key,value);
// }



// let product1 = [9344, 4.5, 75, 10, "iphone"]
// const [name, price] = ["iphone",9344, 4.5, 75, 10, ]

// let arr = [34,54,64,63,82,3,4,67,62]

// // console.log(Math.min([34,54,64,63,82,3,4,67,62]));
// console.log(arr);
// console.log(...arr)


// let a = [2,4]
// let b = [9,3]

// let c = [...a , ...b] // SPREAD OPERATOR
// console.log(...c);



// let product1 = [9344, 4.5, 75, 10, "iphone"]
// const [name, price ,...hello] = ["iphone",9344, 4.5, 75, 10, ] //rest operator
// console.log(...hello);//speard operator



// function add(...numbers){
//     let total = 0;
//     for (value of numbers){
//         total+=value
//     }
//     return total;
// }

// console.log(add(4,5,2444,234,5));