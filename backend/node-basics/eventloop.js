
setTimeout(function(){
    console.log("first")
},5000)


console.log("second");

setTimeout(function(){
    console.log("third")
},4000)

console.log("4th")

// second 
// 4th 
// third 
// first

