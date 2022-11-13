

//synchronus 

// console.log("1");
// console.log("2");
// console.log("3");

// console.log("1");

// setTimeout(function(){
//     console.log("2");
// },5000)

// console.log("3");

// function printmyfile(){
//     console.log("i am printing")
// }

// function calculateSomeHeavy(){

//     for(let i=0;i<1000000000;i++){

//     }
//     console.log("calculating some heavy")
// }
// printmyfile();//

// //calculateSomeHeavy();
// setTimeout(calculateSomeHeavy,0)
// console.log("done")

// ---------header-------

// -------main section  image  ---
//         main section 2 ---use of image 

// -----sub section load user data


//callback//promise// async await 

function placeOrder(fn){
    console.log("order placing");
    setTimeout(() => {
            console.log("order placed")
            fn();
    }, 4000);
}

function makePayment(){
    console.log("payment done");
}

placeOrder(makePayment);//asynchro
//makePayment();//sync

function greet(message,fn){
    console.log("",message);
    console.log(fn());
}

function callMe(){
    console.log("i am callback function call from greet")
}

greet("good morning",callMe);

//inversion of control










