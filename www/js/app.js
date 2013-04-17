var server = require("socket.io").listen(2222);
//var http = require('http');

server.sockets.on("connection", function(message)
{
    message.on("newMessage", function(data)
    {
        server.sockets.emit("sendEvent", data);
    });
});