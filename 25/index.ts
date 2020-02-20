// interface  Car {

//     speed: number[];

//     currentSpeed: number;
// }

class MyCar {

    private currentSpeed: number = 0;

    private speed: number[] = [0, 10, 25, 50, 75];

    //#############################
    
    constructor() {}

    //#############################

    public start(): boolean {
        return true;
    };

    public go(): number {

        if(this.start()){
            console.log('Go!');
            return this.currentSpeed;
        }
    };

    public increaseSpeed() {

        for( let i = 0; i < this.speed.length-1; i++ ) {
            if(this.currentSpeed === this.speed[i]) {        
                return this.currentSpeed = this.speed[i+1];
            }
        }        
    }

    public decreaseSpeed() {

        for( let i = this.speed.length-1; i > 0; i-- ) {
            if(this.currentSpeed === this.speed[i]) {        
                return this.currentSpeed = this.speed[i-1];
            }
        }        
    }

    public speedometr(): number {
        return this.currentSpeed;
    }

    public stop(time: number): number {
        return time * this.currentSpeed;
    } 
    
    //##################################
}

const myCar = new MyCar();

console.log(myCar.start());
console.log(myCar.go());
console.log(myCar.increaseSpeed());
console.log(myCar.increaseSpeed());
console.log(myCar.decreaseSpeed());
console.log(myCar.speedometr());
console.log(myCar.stop(5));