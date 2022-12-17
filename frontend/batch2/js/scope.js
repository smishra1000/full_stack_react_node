// function scope ,  block scope, 
// local scope 

// let a = 20;
// var b = 30;
// const c = 40;
// console.log(a)//20
// console.log(b)//30
// console.log(c)//40

// function show(){
//   var a = 100;
//   console.log(a);
// }

// show();


// {
//     console.log(x);//
//     {
//         let x =30;
//         console.log(x);//30

//     }
//     let x =100
//     console.log(x);//100
// }

function show(){
    var a = 20;
    console.log(a)//20
}

console.log(a);//undefined

show();
