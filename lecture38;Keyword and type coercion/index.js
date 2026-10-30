// let student = {
//     name : "Deepak",
//     printName : function(){
//         console.log(this.name);
//     }
// }

// student.printName();


// function fun1() {
//     let name = "fariha"

//     function fun2() { 
//         console.log(name);
//     }
//     return fun2;
// }

// let result2 = fun1()
// result2()



// let student = {
//     name: "Aman",
//     printname: function(){
//         console.log("Hii" ,this.name)
//     }
// }

// let student2 ={
//     name: "Ankur",
//     printname: student.printname
// }

// student2.printname()



// let name = "something"
// let product = {
//     name : "Iphone",
//    printname : function(){
//     const print = () => {
//         console.log(this.name)
//     }
//     print()
//    }
// }
// product.printname();



let nestedfunction = {
    name :" something",
    fun: function(){
        let product = {
          
            printName: function(){
                const print = () =>{
                    console.log(this.name)
                }
                print();
            }
        }
        product.printName()
    }
}

nestedfunction.fun()