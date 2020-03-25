export class Product {
    constructor(
        public name: string,
        public price: number,
        public desc: string,
        public category: string,
        public id?: number,
    ){}
}