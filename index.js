var http = require("http");
var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    console.log('a');
    console.log('b');
    process.nextTick(function(){
        console.log("c");
        res.end("hello");
    })
    console.log("d");
    console.log("e");
})

server.listen(3000,'127.0.0.1');
console.log("Server listening on port 3000 ....")