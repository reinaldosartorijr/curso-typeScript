"use strict";
// String
let nome = 'João';
console.log(nome);
// Número
let idade = 10;
console.log(idade);
// Boolean
let possuiHobbies = true;
console.log(possuiHobbies);
// Array
let hobbies = ['Cozinhar', 'Esportes'];
console.log(hobbies[0]);
// Tupla
let endereco;
endereco = ['Rua Paulo Izzo', 59];
console.log(typeof endereco);
console.log(endereco);
//Enum
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul";
})(Cor || (Cor = {}));
console.log(Cor.Azul);
// Any
let carro = 'Audi';
carro = { marca: 'BMW', modelo: 'X3' };
// Funções
function retornaNome() {
    return nome;
}
console.log(retornaNome());
function digaOi() {
    console.log('oi');
}
digaOi();
function multiplicar(num1, num2) {
    return num1 * num2;
}
console.log(multiplicar(5, 8));
// Funções como Tipos
const soma = function (a, b) {
    return a + b;
};
let calculo;
calculo = soma;
console.log(calculo(14, 5));
// Objetos
let usuario = {
    nome: 'João',
    idade: 20
};
usuario = { nome: 'Reinaldo', idade: 29 };
console.log(usuario);
/*
* Desafio
* */
let funcionario = {
    supervisores: ['João', 'Maria', 'José'],
    baterPonto: function baterPonto(hora) {
        if (hora <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do Normal';
        }
    }
};
console.log(funcionario.baterPonto(9));
let funcionario2 = {
    supervisores: ['Ana', 'Cléia'],
    baterPonto: function baterPonto() { return 'Sempre Chega no Horário'; }
};
// Union Types
let nota = 10;
console.log(`Minha Nota é ${nota}`);
nota = '22';
console.log(`Minha Nota é ${nota}`);
// NEVER
const falha = (msg) => {
    throw new Error(msg);
};
const produto = {
    produto: 'Sabão',
    preco: -1,
    validarProduto: function validarProduto() {
        if (this.produto.length == 0) {
            falha('Nome Inválido');
        }
        if (this.preco <= 0) {
            falha('Preço Inválido');
        }
    }
};
produto.validarProduto();
// null
let altura = 12;
altura = null;
//# sourceMappingURL=tipos.js.map