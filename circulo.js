var circulo = /** @class */ (function () {
    // construtor da minha class//
    // oq tem depos do this é o atributo da minha class
    function circulo(raio, x, y) {
        this.raio = raio;
        this.x = x;
        this.y = y;
    }
    circulo.prototype.exibir = function () {
        return "raio ".concat(this.raio, ", x: ").concat(this.x, ", y: ").concat(this.y);
    };
    return circulo;
}());
var circulo01 = new circulo(2, 0, 0);
var circulo02 = new circulo(3, 5, 2);
console.log(circulo01.exibir());
console.log(circulo02.exibir());
