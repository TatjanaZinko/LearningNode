class Calorizator {
    constructor(weight, height, age) {
        this.weight = weight;
        this.height = height;
        this.age = age;
    }
    baseCalories = function() {
        return Math.round((9.99 * this.weight) + (6.25 * this.height) - (5 * this.age) - 161)
    }
}

module.exports = Calorizator;
