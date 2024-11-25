"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.funcionario = void 0;
var funcionario = /** @class */ (function () {
    function funcionario(nome, salario) {
        this._nome = nome;
        this._salario = salario;
    }
    Object.defineProperty(funcionario.prototype, "nome", {
        get: function () { return this._nome; },
        set: function (nome) { this._nome = nome; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(funcionario.prototype, "salario", {
        get: function () { return this._salario; },
        enumerable: false,
        configurable: true
    });
    return funcionario;
}());
exports.funcionario = funcionario;
