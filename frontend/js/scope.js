// function scope

// global scope


//block scope

// var a = 30

// console.log(a);

// function showA(){
//     var y = 60;
//     console.log(y);
// }

// showA();
// console.log(y);

// {
//     var x = 50;
//     console.log(x)
// }
// console.log(x);

//block scope 

// {
//     //let,const 
//     let p = 90;
//     console.log(p)
// }

//console.log(p);

// function showA(){
//     let a = 90;
//     var x = 80;
//     const t = 40;
//     console.log(a,x,t);
// }
// showA();
// console.log(a,x,t);

// var p = 30;
// let q = 50;
// const r = 60;
//r =100;
// q  =100;
// console.log(p,q,r);///30,50,60

// function show(){
//     console.log(p,q,r);//30,50,60
// }
// show();

// lexical scoping 


// function showB(){
//     var z = 300;
//     console.log(z);
// }
// showB();

// console.log(z);

// var a = 100;

// function show(){
//     var a =200;
// }


// global execution context [ a=100]

//function execution context [a=200]

// {
//     let x = 40;
//     console.log(x);//40
//     {
//         let x =60;
//         console.log(x);//60
//     }
//     console.log(x);//40
// }

// console.log(x);//not defined



