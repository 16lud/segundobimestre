"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var funcionarios = /** @class */ (function () {
    function funcionarios(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    funcionarios.prototype.getNome = function () { return this.nome; };
    ;
    funcionarios.prototype.getcargo = function () { return this.cargo; };
    ;
    funcionarios.prototype.getsalario = function () { return this.salario; };
    ;
    funcionarios.prototype.setnome = function () { this.nome; };
    ;
    funcionarios.prototype.setcargo = function () { this.cargo; };
    ;
    funcionarios.prototype.aplicarAumento = function (percentual) {
        if (percentual > 0) {
            this.salario += (this.salario / 100) * percentual;
        }
        else {
            console.log("percentual de almento invalido!!!");
        }
    };
    funcionarios.prototype.descricao = function () {
        return "".concat(this.nome, " - ").concat(this.cargo, "- R$ ").concat(this.salario.toFixed(2));
    };
    return funcionarios;
}());
exports.default = funcionarios;
