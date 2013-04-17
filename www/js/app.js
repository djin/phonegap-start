var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen(2222);

function handler (req, res) {
  fs.readFile('C:/Users/66785361/Documents/GitHub/phonegap-start/www/indexConexion.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading indexConexion.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});