var fs = require("fs");

// fs.readFile("hello.txt","utf-8",function(err,data){
//     if(err){
//         console.log("error while reading file")
//     }
//     console.log(data);
//     console.log("hello please excute me after reading file")
// })

// let data = fs.readFileSync("hello.txt","utf-8")
// console.log(data)
// console.log("hello excute me after reading operation")


// writing file in system 
// fs.writeFile("demo.txt", "hello good evening",function(err,data){
//    if(err){
//     console.log("error while writing the file")
//    }

//    console.log("fiile written succesfully")
// })

// fs.writeFileSync("demo.txt","hello replacing the text");
// console.log("file written successfully")

fs.appendFileSync("demo.txt","hello world updated")
console.log("updated file successfully")







