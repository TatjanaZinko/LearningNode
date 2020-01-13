const https = require('https');
const http = require('http');
const fs = require('fs');

let url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';
let body = '';

https.get(url,(res) => {

    res.on("data", function(chunk) {
        body += chunk;
        json = JSON.parse(body);
        console.log(json);
    });    

}).on("error", (error) => {
    console.error(error.message);
});


 http.createServer( function( req, res ){  
    res.write(body);
    res.end();
 }).listen(3000, function(){
     console.log( 'Server http://localhost:3000' );
 })