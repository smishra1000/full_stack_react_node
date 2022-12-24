var http = require("http");
const usersdata = [
    { id: 1, name: "sameer", age: 21 },
    { id: 2, name: "Ananad", age: 30 },
    { id: 3, name: "Anil", age: 30 },
    { id: 4, name: "Bhargav", age: 20 },
    { id: 5, name: "Gopal", age: 22 },
    { id: 6, name: "Kaveri", age: 23 },
    { id: 7, name: "Kishore", age: 22 },
    { id: 8, name: "Kumar", age: 21 },
  ];
  

var server = http.createServer(function(req,res){
    if(req.url==="/"){
        res.writeHead(200,{'Content-Type':"text/plain"})
        res.end("hello from node application")
    }else if(req.url==="/student"){
        res.writeHead(200,{'Content-Type':"text/plain"})
        res.end("hello from student route")
    }else if(req.url==="/user"){
        res.writeHead(200,{'Content-Type':"application/json"})
        res.end(JSON.stringify(usersdata))
    }
    else {
        res.writeHead(200,{'Content-Type':"text/plain"})
        res.end("page not found")
    }
})

server.listen(5000)