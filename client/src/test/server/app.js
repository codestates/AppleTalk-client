var app = require('express')();
var server = require('http').createServer(app);
// http server를 socket.io server로 upgrade한다
var io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: 'GET,POST,OPTIONS',
  },
});
var cors = require('cors');

app.use(
  cors({
    origin: '*',
    methods: 'GET,POST,OPTIONS',
  })
);

io.on('connection', (socket) => {
  console.log('UserConnected', socket.id);
  socket.on('join', (userid) => {
    socket.join(userid);
  });
  socket.on('message', (message) => {
    io.to('receiver').emit('heejewake', message);
  });
});

server.listen(8888, function () {
  console.log('Socket IO server listening on port 8888');
});
