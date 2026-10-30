//  function outter (){
//     let a = 5;
//     function inner(){
//         console.log(a);
//         let a = 8;
//     }
//     inner();
//  }

//  outter();




//  function outter (){
//     let a = 5;
//     function inner(){
//         console.log(a);
   
//     }
//         a = 8;
//     return inner;
//  }

//  const response = outter();
//  response();
// //  console.log(response());
// //  console.log(outter);


function outer(){
    let count = 0;
    function counter(){
        count = count+1;
        console.log(count);
    }
    return counter
}

const counter1 = outer();
const counter2 = outer();
counter1();
counter1();
counter2();
counter2();
counter2();