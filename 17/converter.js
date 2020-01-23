class Converter {
    constructor(BaseCurrencyUs) {
        this.BaseCurrencyUs = BaseCurrencyUs;
    }
    roundTwoDecimals = function(amount) {
        return Math.round(amount*100)/100;
    }
    convertToUa = function(currency) {
        return this.roundTwoDecimals(currency * this.BaseCurrencyUs);
    }
    convertToUs = function(currency) {
        return this.roundTwoDecimals(currency / this.BaseCurrencyUs);
    }
}
module.exports = Converter;