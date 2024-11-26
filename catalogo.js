"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var catalogo = /** @class */ (function () {
    function catalogo() {
        this.filme = [];
    }
    ;
    catalogo.prototype.adicionarFilme = function (filme) { this.filme.push(filme); };
    ;
    catalogo.prototype.listarFilme = function () { console.log("filmes do catalogo:"); };
    ;
    return catalogo;
}());
this.filme.forEach(function (filme) { return console.log(filme.descricao()); });
exports.default = catalogo;
