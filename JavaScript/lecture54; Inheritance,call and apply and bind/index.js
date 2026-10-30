// class User{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
//     login() { console.log("login");}
//     logout() { console.log("logout");}
// }

// class Customer extends User{
//     cart=[];
//     constructor(name , email){
//         super(name, email)
//     //   this.name = name;
//     //     this.email = email;
//     }
//     buyProduct() {console.log("buy product")}
//     addToCart(item) {console.log(this.cart.push(item))}
//     showCartItems() {console.log(this.cart);}
//     login(){}
//     logout(){}
// }

// class Seller extends User{
//     constructor(name , email){
//         super(name, email)
//     //   this.name = name;
//     //     this.email = email;
//     }
//   addProduct(){ console.log("addProduct");}
//     login(){}
//     logout(){}
// }

// class Admin extends User{
//     constructor(name , email){
//     //   this.name = name;
//     //     this.email = email;
//     }
//    hideProduct(){console.log("hideProduct");}
//     login(){}
//     logout(){}
// }

// const c1 = new Customer("Deepak", "deeepakkumar@gmail.com")
// const s1 = new Seller("Himanshu", "himanshukkumar@gmail.com")
// console.log(c1)
// console.log(s1)

// c1.logout(c1)
// c1.addToCart("Macbook")
// c1.showCartItems()


// class PremimumCustomer extends Customer{
//     constructor(name, email){
//         super(name, email)
//     }
//     getDiscount(){}
// }

// const pc1 = new PremimumCustomer("eiojf", "eiowhf")
// console.log(pc1)