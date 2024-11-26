"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var funcionarios_1 = require("./funcionarios");
var gerente = /** @class */ (function (_super) {
    __extends(gerente, _super);
    function gerente(nome, cargo, salario, bonus) {
        var _this = _super.call(this, nome, cargo, salario) || this;
        _this.bonus;
        return _this;
    }
    gerente.prototype.getBonus = function () { return this.bonus; };
    ;
    gerente.prototype.setBonus = function (bonus) {
        if (bonus >= 0) {
            this.bonus = bonus;
        }
        else {
            console.log("Bonus nao pode ser NEGATIVO!!!!!");
        }
    };
    gerente.prototype.descricao = function () {
        return "".concat(_super.prototype.descricao.call(this), "-bonus: R$").concat(this.bonus.toFixed(2), "- salario total: R$ ").concat((this.getsalario() + this.bonus).toFixed(2));
    };
    return gerente;
}(funcionarios_1.default));
exports.default = gerente;
