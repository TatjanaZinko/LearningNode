// 1.Простой сервер
// const app = require('express')();
// const http = require('http').Server(app);

// app.get( '/', function( req,res ) {
//     res.sendFile( __dirname + '/index.html');
// })

// http.listen(3000, function(){
//     console.log('Server at lockalhost:3000')
// })

//2.Hello Word + Socket
// const app = require('express')();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);

// app.get('/', function( req, res ){
//     res.sendFile( __dirname + '/index.html')
// });

// io.on('connection', function(socket){
//     console.log('A user connected');

//     socket.on('disconnect', function(){
//         console.log('A user disconnected');
//     })
// });

// http.listen(3000, function(){
//      console.log('Server at lockalhost:3000')
//  })

//3.Обработка событий
//Родные события: connect, massage, disconnect, reconnect, ping, join, leave
// const app = require('express')();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);

// app.get('/', function( req, res ){
//     res.sendFile( __dirname + '/index.html')
// });

// io.on('connection', function(socket){
//     console.log('A user connected');

//     setTimeout(function(){
//         socket.send('Sent a massage two seconds after connection');
//     }, 2000 );
//     socket.on('disconnect', function(){
//         console.log('A user disconnected');
//     })
// });

// http.listen(3000, function(){
//     console.log('Server at lockalhost:3000')
// })

//4.Добавление пользовательтских событий
// const app = require('express')();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);

// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', function(socket){
//     console.log('A user connected');

//     setTimeout(function(){
//         socket.emit('myEvent', {description: 'user event from server'});
//     }, 2000);

//     socket.on('disconnect', function(){
//         console.log('A user disconnected');
//     })
// });

// http.listen(3000, function(){
//     console.log('Server at lockalhost:3000');
// })


//5. Получение событий от клиента
// const app = require('express')();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);

// app.get('/', function(req, res){
//     res.sendFile( __dirname + '/index.html');
// });

// io.on('connection', function(socket){
//     socket.on('clientEvent', function(data){
//         console.log(data);
//     })
// })

// http.listen(3000, function(){
//     console.log('Server at localhost:3000');
// })

//6.Широковещание - посыл сообщений всем подключенным клиентам
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function( req, res ){
    res.sendFile( __dirname + '/index.html');
})

let users = 0;

io.on('connection', function(socket){
    users++;
    socket.broadcast.emit('broadcast', {description: users + ' users connected'});
    socket.on('disconnect', function(){
        users--;
        socket.broadcast.emit('broadcast', {description: users + ' users disconnected'})
    })
})

http.listen(3000, function(){
    console.log('Server at lockalhost:3000');
})


