// console.log("JavaScript Connected");

// let h1 = document.getElementById("h1");
// console.log(h1);

// let p = document.querySelector("#desc")

// p.textContent = "<h2>hello baccho kaise ho</h2>"
// p.innerHTML = "<h2>Hello Baccho</h2>"

// console.log(p.textContent)
// console.log(p.innerHTML)

// p.setAttribute("style" ,"background-color: pink; font-size: 50px")

// let btn = document.querySelector("#btn")
// btn.setAttribute("disabled" , "true")
// btn.textContent = "Remove"


// let res = p.getAttribute("style")

// console.log(res)

// p.removeAttribute("style")



// p.classList.add("random")
// p.classList.remove("random")
// p.classList.toggle("random")
// console.log(p.classList.contains("random"));


// p.style.backgroundColor = "red" //camel case
// p.dataset.helloDostoHii = "hii"
// console.log(p.dataset.helloDostoHii);


// let products = [
//     {
//         name: "iphone 20",
//         price: 98294
//     },
//       {
//         name: "Samsung15",
//         price: 28383
//     },
//       {
//         name: "oneplus",
//         price: 67839
//     },
//       {
//         name: "oppo",
//         price: 33894
//     },
//       {
//         name: "Vivo",
//         price: 87743
//     }
// ]

// let div = document.createElement("div")
// let div2 = document.createElement("div")

// div.textContent = "Hello"
// div2.textContent = "Div2"

// let body = document.querySelector("body")

// body.appendChild(div)
// body.appendChild(div2)

// body.append(div,div2)


let products = [
    {
        name: "iphone 20",
        price: 98294
    },
      {
        name: "Samsung15",
        price: 28383
    },
      {
        name: "oneplus",
        price: 67839
    },
      {
        name: "oppo",
        price: 33894
    },
      {
        name: "Vivo",
        price: 87743
    }
]


let productlist = document.querySelector("#product-list")

products.forEach((product) => {
    const card = document.createElement("p")
    card.textContent = `${product.name} -${product.price}`
    productlist.append(card)
});