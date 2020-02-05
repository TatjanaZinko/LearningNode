// ATM

function atm(card, cb) {
    setTimeout(function(){
        return cb(card);
    }, 1000);
}

let money = '100$'
card = 'MasterCard';

atm(card, function(card){ 
    if(card == 'MasterCard') {  
        console.log(money);
    }
});