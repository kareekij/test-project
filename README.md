# Testing Socket.IO
Testing the functionalities of Socket.IO

## Prerequisites
1. `Node` (https://nodejs.org/en/)
2. `npm` (node package manager) (It should be installed when you install Node.js. If not, you can download from https://www.npmjs.com/get-npm)
3. `nodemon`, run the following command after `npm` has been installed
```
npm install -g nodemon
```

Confirm that `node` and `npm` are installed by running the following commands in your terminal. It should return the version of these packages.

```
node --version
npm --version
```

## Start Service (Standalone Service)
```
nodemon app_standalone.js
```

The server will run on port `:3000` by default.

An example of `client` code is in: `example.html`

Please assign the variable `ip` to the ip address (in `example.html`)  of the machine that run `app_standalone.js`.

```
// TODO: change the ip-address to Socket.IO server
ip = '192.168.0.198';
var socket = io('http://'+ ip +':3000');
```

## Some Basic Functionalities
1. A client broadcasts message to other clients
2. Notify server when client connects to server
3. Notify server when client disconnects to server
4. Namespaces/Rooms

## References
If you want to create a new project, please check here: https://www.tutorialspoint.com/socket.io/socket.io_environment.htm


Event Handling: https://www.tutorialspoint.com/socket.io/socket.io_event_handling.htm

Broadcasting: https://www.tutorialspoint.com/socket.io/socket.io_broadcasting.htm

Rooms: https://www.tutorialspoint.com/socket.io/socket.io_rooms.htm

Reference: https://www.tutorialspoint.com/socket.io/index.htm, https://www.npmjs.com/package/socket.io
