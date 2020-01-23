const Converter = require('./converter');
const request = require('request');
const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';

let BaseCurrencyUs;

request(url, function (error, response, body) {
  let data = JSON.parse(body);
  BaseCurrencyUs = data[2].buy;

  let conv = new Converter(BaseCurrencyUs);

    console.log(conv.convertToUa(100));
    console.log(conv.convertToUs(60000));
});


