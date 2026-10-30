
// function outter() {
//     const random = () => {
//         console.log(this);
//     }
//     random();
// }

// outter();

// console.log(this)


// function product(name, price){
//     this.name = name;
//     this.price = price;
    
// }
// const p1 = new product("Iphone 18 pro max", 17800);
// const p2 = new product("Iphone 19 pro max", 17800);
// console.log(p2)
// console.log(p2.name)


// class User{
// //   country = India
//     constructor(name, country){
//         this.name = name;
//         this.country = country;
//     }
// }

// const u1 = new User("Deepak","india")
// const u2 = new User("Himanshu" , "Aus")

// // u1.name = "Name update"
// console.log(u1)


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


// acc3.get();
// acc3.withdraw(200);
// acc3.get()
// acc3.deposite(1000)
// acc3.get();

// acc1.calculateTax()
BankAccount.calculateTax


console.log(BankAccount.totalBankAccount);