// interface  Car {

//     speed: number[];

//     currentSpeed: number;
// }

class GasTank {

    private max: number = 50;

    // ####################################

    constructor(private current: number = 0) {
    }

    // ####################################

    // public get(val: number): number {
    //     if (!this.has()) {
    //         throw new Error('Gas is off!');
    //     }

    //     this.current = this.current - val;

    //     return val;
    // }

    // public set(val: number): void {
    //     if ((this.current + val) > this.max) {
    //         throw new Error('Gas tank is full!');
    //     }

    //     this.current = this.current + val;
    // }

    public has(): boolean {
        if (this.current > 0) {
            return true;
        }

        return false;
    }

    public getCurrent(): number {
        return this.current;
    }

    // ####################################
}

class MyCar {

    private currentSpeed: number = 0;

    private speed: number[] = [0, 10, 25, 50, 75];

    //#############################
    
    constructor(private gasTank: GasTank) {}

    //#############################

    public start(): boolean {
        return true;
    };

    public go(): number {

        if(this.start()){
            console.log('Go!');
            return this.currentSpeed;
        } else {
            console.log('First need start!');
        }

        if(this.gasTank.has()) {
            console.log('Go!');
            return this.currentSpeed;
        } else {
            console.log('Need gas!');
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

const myCar = new MyCar(50);

console.log(myCar.start());
console.log(myCar.go());
console.log(myCar.increaseSpeed());
console.log(myCar.increaseSpeed());
console.log(myCar.decreaseSpeed());
console.log(myCar.speedometr());
console.log(myCar.stop(5));