"use strict";
// Exemplo de problema de usar Any
function echo(objeto) {
    return objeto;
}
console.log(echo('Hello World!'));
console.log(echo(39));
console.log(echo(39).length);
// Generic
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado(39));
console.log(echoMelhorado('João'));
// Generic com Arrays
const avaliacoes = [1, 2, 3, 4, 5];
avaliacoes.push(55);
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3, 4, 5]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho(5));
// Generics com Classe
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new OperacaoBinaria('Bom', 'dia').executar());
console.log(new OperacaoBinaria(3, 'dia').executar());
class OperacaoBinaria2 {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class SomaBinaria extends OperacaoBinaria2 {
    executar() {
        return this.operando1 + this.operando2;
    }
}
// console.log(new SomaBinaria()('Bom', 'dia').executar())
console.log(new SomaBinaria(3, 5).executar());
// Constraints
class Fila {
    constructor(elemento) {
        this.elemento = elemento;
    }
}
//# sourceMappingURL=generics.js.map