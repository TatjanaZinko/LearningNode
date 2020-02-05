const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', ( req, res ) => res.sendFile( __dirname + '/index.html'));

let users = [];
io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('setUserName', (data) => {
        console.log(data);
        if( users.indexOf(data) > -1 ) {
            console.log(data);
            socket.emit('userExists', '<p class="bg-primary>Пользователь' + '<b>' + data + '</b>' + 'уже существует, выбери другое имя');
        } else {
            users.push(data);
            socket.emit('userSet', {userName: data})
        }
    });

    socket.on('message', (data) => io.sockets.emit('newMessage', data));
})

http.listen(3000, () => console.log('Go to chat at lockalhost:3000'));