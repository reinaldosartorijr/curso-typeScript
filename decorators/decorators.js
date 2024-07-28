"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//@logarClasse
//@logarClasseSe(true)
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log('Novo');
    }
};
Eletrodomestico = __decorate([
    decorator('R', 10)
], Eletrodomestico);
function logarClasse(constructor) {
    console.log(constructor);
}
// Decorator Factoring
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
function decorator(a, b) {
    return function (_) {
        console.log(`${a} ${b}`);
    };
}
const usuarioLogado = {
    nome: 'Guilherme',
    email: 'gui@gui.com',
    admin: false
};
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log('Algo Crítico Foi Alterado');
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
function perfilAdmin(construtor) {
    return class extends construtor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado.admin) {
                throw new Error('Erro sss');
            }
        }
    };
}
new MudancaAdministrativa().critico();
// Decorator em método
class ContaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        this.saldo -= valor;
        return true;
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    naoNegativo
], ContaCorrente.prototype, "saldo", void 0);
__decorate([
    congelar
], ContaCorrente.prototype, "getSaldo", null);
const cc = new ContaCorrente(500);
cc.sacar(600);
console.log(cc.getSaldo());
function congelar(alvo, nomePropriedade, descritor) {
    console.log(alvo);
    console.log(nomePropriedade);
    descritor.writable = false;
}
//decorator em atributo
function naoNegativo(alvo, nomePropriedade) {
    delete alvo[nomePropriedade];
    Object.defineProperty(alvo, nomePropriedade, {
        get: function () {
            return alvo['_' + nomePropriedade];
        },
        set: function (valor) {
            if (valor < 0) {
                throw new Error('Errado');
            }
            else {
                alvo['_' + nomePropriedade] = valor;
            }
        }
    });
}
//# sourceMappingURL=decorators.js.map