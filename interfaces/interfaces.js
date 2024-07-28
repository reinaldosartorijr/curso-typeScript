"use strict";
function saudarComOla(pessoa) {
    console.log('Olá' + pessoa.nome);
}
function mudarPessoa(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'João',
    idade: 18,
    saudar(sobrenome) {
        console.log(`Meu nome é ${this.nome} ${sobrenome}`);
    }
};
saudarComOla(pessoa);
mudarPessoa(pessoa);
saudarComOla(pessoa);
pessoa.saudar('Lima Mey');
///
class Cliente {
    constructor() {
        this.nome = '';
        this.idade = 0;
    }
    saudar(sobrenome) {
        console.log(`Meu nome é ${this.nome} ${sobrenome}`);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Fabiola';
meuCliente.idade = 18;
meuCliente.saudar('Coutinho');
//# sourceMappingURL=interfaces.js.map