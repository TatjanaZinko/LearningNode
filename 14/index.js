//Урок 14 Создание сервера

const http = require('http');
const fs = require('fs');

http.createServer( function( req, res ){
    if( req.url === '/' ) {
        res.write('Hello World');
        res.end();
    } else if( req.url === '/about' ) {
        res.write('Hello World!');
        res.end();
        console.log(req);
    } else if( req.url === '/contact' ) {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
          });
    } 
}).listen(3000, function(){
    console.log( 'Server http://localhost:3000' );
})