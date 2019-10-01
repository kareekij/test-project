const io = require('socket.io')();
var clients = 0;

// Use Socket.IO as a stanalone server, waiting a connection from port 3000.
io.listen(3000);

users = [];
var clients = 0;

io.on('connection', function(socket) {
   //  Log on server side, user connected to the server.
   clients++;
   console.log('New client connected, Total clients ' + clients);


   // Broadcast message to other clients when there is a new connection
   io.sockets.emit('broadcast',{ description: 'There are ' + clients + ' clients connected!'});

   // Binding the event handerler when user disconnects
   socket.on('disconnect', function () {
      clients--;
      // Broadcast message to other clients, updating the number of connected users.
      io.sockets.emit('broadcast',{ description: 'There are ' + clients + ' clients connected!'});
   });


   socket.on('setUsername', function(data) {
      console.log('User set name ' + data);

      if(users.indexOf(data) > -1) {
         socket.emit('userExists', data + ' username is taken! Try some other username.');
      } else {
         users.push(data);
         io.sockets.emit('userSet', {username: data, users_list: users});
      }
   });

   socket.on('msg', function(data) {
      //Send message to everyone
      io.sockets.emit('newmsg', data);
   })

   socket.on('triggerAlert', function(data) {
      //Send message to everyone
      io.sockets.emit('alert', {user:data.user, all: data.all});
   })
});
