const http = require("http");
var users = [
    {
        id:1,
        name:"sameer",
        age:30
    },
    {
        id:2,
        name:"sameer2",
        age:32
    }
]
var server = http.createServer(function(req,res){
    console.log("hello i am in / request",req.url,req.method);
    if(req.url==='/'){
        
        res.writeHead(200,{content:"application/text"})
        res.end("hello world")
    }else if(req.url==="/student"){
        res.writeHead(200,{content:"application/json"})
        res.end(JSON.stringify({name:"sameer",id:101}))
    }else if(req.url==='/users'){
        res.writeHead(200,{content:"application/json"})
        res.end(JSON.stringify(users))
    }
    else{
        res.writeHead(404,{content:"application/json"})
        res.end("404 file not found")
    }
    
})

server.listen(5000)