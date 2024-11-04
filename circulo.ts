class circulo{
    raio: number;
    x: number;
    y: number;

    // construtor da minha class//
    // oq tem depos do this é o atributo da minha class
    constructor (raio: number, x: number,  y: number,){
    this.raio=raio
    this.x= x;
    this.y= y;
    }
    exibir(): string{
        return `raio ${this.raio}, x: ${this.x}, y: ${this.y}`;
    }
}
let circulo01 = new circulo(2, 0, 0);
let circulo02 = new circulo(3, 5, 2);
console.log(circulo01.exibir());
console.log(circulo02.exibir());