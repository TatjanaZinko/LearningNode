const request  = require('request');
const http = require('http');
const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';
const port = 3000;

http.createServer( function( req, res){ 
    request(url, function (error, response, body) {
        res.write(body);
        res.end();
    });
 }).listen(port, function(){
     console.log( 'Server http://localhost:3000' );
 })