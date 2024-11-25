var animal = /** @class */ (function () {
    function animal(raça, nome, idade, cor) {
        this.nome = nome;
        this.raça = raça; 
        this.idade = idade;
        this.cor = cor;
    }
    animal.prototype.descricao = function () {
        return "animal: ".concat(this.nome, "\n        ra\u00E7a:").concat(this.raça, "\n        idade:").concat(this.idade, "\n        cor:").concat(this.cor);
    };
    return animal;
}());
var bixano = new animal("gato", "perça", 4, "cinza");
console.log(bixano.descricao());
