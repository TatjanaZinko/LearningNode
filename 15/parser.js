const request  = require('request');
const http = require('http');
const fs = require('fs');

let url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';
let body = '';
let data = '';


request(url, function (error, response, body) {
  json = JSON.parse(body);
  for(let i = 0; i<json.length; i++) {
    data += 'Курс ' + json[i].ccy + ' равен: купля - ' + json[i].buy + ' продажа - ' + json[i].sale + '\n';
}        
console.log(data);

});  

http.createServer( function( req, res ){ 
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'}); 
    res.write(data);
    res.end();
 }).listen(3000, function(){
     console.log( 'Server http://localhost:3000' );
 })