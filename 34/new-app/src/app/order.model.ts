import { CartLine } from './cart-line.model';

export class Order {
    constructor(
        public name: string,
        public address: string,
        public cart: CartLine[],
        public shipped: boolean = false,
        public id?: number
    ){}
}