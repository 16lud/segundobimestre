var filme = /** @class */ (function () {
    function filme(titulo, diretor, anoLancamento) {
        this.titulo = titulo;
        this.diretor = diretor;
        this.anoLancamento = anoLancamento;
        this.avaliacoes = avaliacoes[];
    }
    filme.prototype.getTitulo = function () { return this.titulo; };
    filme.prototype.setTitulo = function (titulo) { this.titulo = titulo; };
    ;
    filme.prototype.getDiretor = function () { return this.diretor; };
    filme.prototype.setDiretor = function (titulo) { this.diretor = diretor; };
    ;
    filme.prototype.getAnoLancamento = function () { return this.anoLancamento; };
    filme.prototype.setAnoLancamento = function (anoLancamento) { this.anoLancamento = anoLancamento; };
    ;
    filme.prototype.adicionarAvaliacao = function (nota) {
        if (nota >= 1 && nota <= 5) {
            this.avaliacoes.push(nota);
        }
        else {
            console.log("avaliacao nao aceita.");
        }
        ;
    };
    return filme;
}());
descricao();
string;
{
    return "".concat(this.titulo, "-").concat(this.diretor, "-").concat(this.anoLancamento, "- avaliacao: ").concat(this.calcularMediaAvaliacoes().tofixed(2));
}
