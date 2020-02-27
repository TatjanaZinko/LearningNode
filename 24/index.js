var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tank = /** @class */ (function () {
    function Tank(capacity, volume) {
        if (volume === void 0) { volume = 0; }
        this.capacity = capacity;
        this.volume = volume;
    }
    Tank.prototype.isEmpty = function () {
        if (this.volume <= 0.25) {
            return true;
        }
    };
    Tank.prototype.showSignal = function () {
        if (this.isEmpty) {
            return ('tank is empty');
        }
    };
    Tank.prototype.fillTank = function (fillingVolume) {
        if ((fillingVolume + this.volume) > this.capacity) {
            console.log('Too much');
        }
        else {
            this.volume += fillingVolume;
            console.log('Tank is filled');
        }
    };
    return Tank;
}());
var WaterTank = /** @class */ (function (_super) {
    __extends(WaterTank, _super);
    function WaterTank(capacity, volume) {
        if (volume === void 0) { volume = 0; }
        var _this = _super.call(this, capacity) || this;
        _this.capacity = 2.5;
        _this = _super.call(this, volume) || this;
        return _this;
    }
    WaterTank.prototype.showWaterSignal = function () {
        return 'Water' + _super.prototype.showSignal.call(this);
    };
    return WaterTank;
}(Tank));
var waterTank = new WaterTank(2.5);
waterTank.fillTank(1.0);
