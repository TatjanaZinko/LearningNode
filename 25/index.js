var MyCar = /** @class */ (function () {
    //#############################
    function MyCar() {
        this.currentSpeed = 0;
        this.speed = [0, 10, 25, 50, 75];
    }
    //#############################
    MyCar.prototype.start = function () {
        return true;
    };
    ;
    MyCar.prototype.go = function () {
        if (this.start()) {
            console.log('Go!');
            return this.currentSpeed;
        }
    };
    ;
    MyCar.prototype.increaseSpeed = function () {
        for (var i = 0; i < this.speed.length - 1; i++) {
            if (this.currentSpeed === this.speed[i]) {
                return this.currentSpeed = this.speed[i + 1];
            }
        }
    };
    MyCar.prototype.decreaseSpeed = function () {
        for (var i = this.speed.length - 1; i > 0; i--) {
            if (this.currentSpeed === this.speed[i]) {
                return this.currentSpeed = this.speed[i - 1];
            }
        }
    };
    MyCar.prototype.speedometr = function () {
        return this.currentSpeed;
    };
    MyCar.prototype.stop = function (time) {
        return time * this.currentSpeed;
    };
    return MyCar;
}());
var myCar = new MyCar();
console.log(myCar.start());
console.log(myCar.go());
console.log(myCar.increaseSpeed());
console.log(myCar.increaseSpeed());
console.log(myCar.decreaseSpeed());
console.log(myCar.speedometr());
console.log(myCar.stop(5));
