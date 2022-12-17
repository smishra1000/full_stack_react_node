//Hositing---

// var a = undefined
// console.log(x);//
// var a = undefined;
// console.log(a);
// var a = 3


// console.log(a);//

// var x = 49;
// console.log(x)

//sayHi();
// function sayHi(){
//     console.log("saying hi");
// }

// sayHi();


// var a = 10;

// function showA(){
//     console.log(a)//10,undefined
//     var a = 10;
//     console.log(a);//10,undefined
// }

// showA();

// function sum(){
// let s = 0;
//    for(let i =0;i<arguments.length;i++){
//     s=s+arguments[i]
//    }
//    console.log(s)
// }

// sum(2,3)
// sum(2,3,4)
// sum(2,7,8,9,10,3,4)


//higher order function

// function sayHi(a,b){
//     console.log(a)
//     console.log(b);
//     console.log("saying hi")
// }

// function greet(){
//     console.log("goood evening")
// }
// function greet2(){
//     console.log("greeting 2")
// }

// sayHi(greet)


// return statement

function add(a,b){
    return a+b
}

function show(){
    console.log("hello")
    return add
}

// let r = add(10,20)
// console.log(r)

let result = show()
console.log(result(2,4))

function clickme(){
    document.getElementById("box1").innerHTML="hello i am div"
    document.getElementById("box1").style.width="100px";
    document.getElementById("box1").style.background="cyan";

}


let btn = document.getElementById("btn")
btn.addEventListener("click",changeDiv)

function changeDiv(){
    console.log("clciked");
    document.getElementById("box1").innerHTML="hello i am div"
    document.getElementById("box1").style.width="100px";
    document.getElementById("box1").style.background="cyan";
}













