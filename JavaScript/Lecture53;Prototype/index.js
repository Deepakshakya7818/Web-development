// let user = {
//     name : "Nishant",
//     age: 12
// }

// console.log(user);


Object.prototype.allInOne = function() {
    console.log("All in one hu main");
}

// Array.prototype.printItems = function(){
//     for(let i = 0; i<this.length; i++){
//         console.log(this[i])
//     }
// }

// let arr = [1,2,3,4];

// arr.printItems();

// console.log(arr.__proto__)



// String.prototype.firstTwoCharacters = function(){
//     console.log(this[0]+this[1]);
//     return this[0]+this[1];
// }
// "nishant".firstTwoCharacters()



// Array.allInOne()
// user.allInOne()

// function random(){

// }
// random.allInOne()
// Number(1).allInOne()



let common = {
    eat(){
        console.log("eat")
    },
      name: "Deepak"
}

let person = Object.create(common)
    person.walk = function(){
        console.log("walk")
    }
   

let student =  Object.create(person)
    student.study = function(){
        console.log("study")
    }

// console.log(person)
// console.log(student)

// console.log(student.hasOwnProperty("study"))
// console.log(student.hasOwnProperty("walk"))

// console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(student))))

// Object.setPrototypeOf(person, {
//     hello(){}
// })

// console.log(Object.getPrototypeOf(student))
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(student)))

// console.log(student.__proto__)
// console.log(student.__proto__.__proto__)





class BankAccount {
    #balance;
    static totalBankAccount = 0
    constructor(initialBalance){
        this.#balance = initialBalance;
        BankAccount.totalBankAccount++;
    }

    get(){
        console.log(this.balance);
    }

    withdraw(amount){
        if(amount>this.#balance){
            console.log("itne paise naa hai account main");
            return;
        }
        this.#balance = this.#balance-amount;  
    }

    deposite(amount){
        if(amount<=0){
            console.log("Not money in account");
            return;
        }
        this.#balance = this.#balance+amount;
    }

    static calculateTax(){
        console.log("calculate tax...")
    }
}

let acc1  = new BankAccount(500)
let acc2  = new BankAccount(200)
let acc3  = new BankAccount(300)
let acc4  = new BankAccount(500)


console.log(Number(1) instanceof BankAccount)

console.log(new Number(1) instanceof Object)