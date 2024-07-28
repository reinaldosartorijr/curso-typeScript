"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(7, 4, 1995);
console.log(aniversario);
class DataEnxuta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
class Produto {
    constructor(nome, preco = 0, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    precoComDesconto() {
        return this.preco * (1 - this.desconto / 100);
    }
    resumo() {
        return ` O produto ${this.nome} tem o preço ${this.precoComDesconto()} já com ${this.desconto} de desconto`;
    }
}
const mouse = new Produto('Mouse', 100, 5);
console.log(mouse.resumo());
// classes estaticas
class Matematica {
    static areaCirc(raio) {
        return Matematica.PI * raio * raio;
    }
}
Matematica.PI = 3.1415;
console.log(Matematica.areaCirc(4));
// classe abstrata
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multiplicar extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
const c1 = new Soma();
c1.executar(1, 2, 3, 4, 5);
console.log(c1);
const c2 = new Multiplicar();
c2.executar(1, 2, 3, 4, 5);
console.log(c2);
// singleton
class Unico {
    constructor() {
    }
    static getInstance() {
        return Unico.instance;
    }
}
Unico.instance = new Unico;
// atributos somente leitura
class Aviao {
    constructor(modelo) {
        this.modelo = modelo;
    }
}
//# sourceMappingURL=classes.js.map