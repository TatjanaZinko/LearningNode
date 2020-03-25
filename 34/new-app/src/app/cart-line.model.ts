import { Product } from './product.model';

export class CartLine {
    constructor(
        public product: Product,
        public count: number
    ){}
}