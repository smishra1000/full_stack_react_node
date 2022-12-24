console.log("hello");

setTimeout(function(){
    console.log("i am calling after some time")
},5000)

let result = setInterval(function(){
    console.log("hello i am calling again and again")
},2000)

console.log(result)

clearInterval(result)