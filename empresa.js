"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empresa = void 0;
var empresa = /** @class */ (function () {
    function empresa(nome) {
        this.nome = nome;
        this.funcionarios = [];
    }
    empresa.prototype.adicionarFuncionarios = function (funcionario) {
        console.log("funcionario da ".concat(this.nome, ":"));
        this.funcionarios.forEach(function (funcionari) { return console.log(funcionario.descricao()); });
    };
    return empresa;
}());
exports.empresa = empresa;
