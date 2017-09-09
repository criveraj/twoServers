var http = require("http");

var PORT1 = 7000; //like opening the door
var PORT2 = 7500;

// SERVER THAT TALKS GOOD
// http will give request and response to the following function
function handleRequest1(request, response) {
    response.end("You are Awesome!!!!")
}

var goodServer = http.createServer(handleRequest1); // creaate server expects a function that handles the requests

goodServer.listen(PORT1, function(){
    console.log("Server is now listening on http://localhost:" + PORT1)
});

function handleRequest2(request, response) {
    response.end("you are not so good");

}
var badServer = http.createServer(handleRequest2); // creaate server expects a function that handles the requests

badServer.listen(PORT2, function(){
    console.log("Server is now listening on http://localhost:" + PORT2)
});
