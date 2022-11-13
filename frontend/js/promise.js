// function placeOrder(){
//     return new Promise(function(resolve,reject){
//         console.log("placing order");
//         setTimeout(function(){
//             console.log("order placed");
//             reject("server down")
//         },4000)
//     })
   
// }

// function makePayment(){
//     console.log("making paement done")
// }



// placeOrder().then(function(result){
//     console.log(result);
//     makePayment();
// }).catch(function(err){
//     console.log("some error",err);
// })

// console.log("hello i am independent from above")


// 1>read file and print---- data or count total number od words


// //aasynchronus
// function readFile(countword){
//     countWords()
// }
// function countWords(){

// }
// // this is dependent on read file

// //independent
// function playSong(){

// }


// ---readfile ,playsong ----- count words


// function getUser(){
//     setTimeout(function(){
//         console.log("hello");
//     },2000)
// }


// getUser();
//console.log("calling first")

// function placeOrder(){
//     return new Promise(function(resolve,reject){
//         console.log("placing order");
//         setTimeout(function(){
//             console.log("order placed");
//             resolve("ortder placed successfully now you cn make payment")
//         },4000)
//     })
   
// }

// async function sayHello(){
//     // using await
//     let result = await placeOrder();
//     let result2 = await placeOrder();
//     let result3 = await placeOrder();
//     console.log("finally done with all execution")


//     // with promise
   
// }

// placeOrder().then(function(res){
//     placeOrder().then(function(res){
//         placeOrder().then(function(res){
//             console.log("finally done with all execution");
//         })
//     })
   
// });

// sayHello();

// function sayHi(){
//    return "hi"
// }


// sayHello().then(function(res){
//     console.log("result==",res)
// })

// console.log("sayhello==",sayHello())
// console.log("say hi==",sayHi())

function sayHello(){
    return "hello"
}


async function sayHi(){
    return "Hi"
}

function sayYes(){
    return new Promise(function(resolve,reject){
        resolve("yessss")
    })
}

function sayNo(){
    return Promise.resolve("Nooooo")
}

// console.log(sayHello());
// sayHi().then(function(res){
//     console.log("here",res)
// })

// sayYes().then(function(res){
//     console.log("here",res);
// })

// sayNo().then(function(res){
//     console.log("here",res)
// })


async function displayValue(){
    console.log("using async await")
    let r = sayHello();
    let r1 = await sayHi();
    let r2 = await sayYes();
    let r3 = await sayNo();
    console.log(r,r1,r2,r3)
}

displayValue();








