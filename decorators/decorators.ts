//@logarClasse
//@logarClasseSe(true)
@decorator('R', 10)
class Eletrodomestico {
    constructor() {
        console.log('Novo')
    }
}

function logarClasse(constructor : Function) {
    console.log(constructor)
}

// Decorator Factoring

function decoratorVazio (_:Function) {}

function logarClasseSe(valor : boolean){
    return valor ? logarClasse : decoratorVazio
}

function decorator(a : string, b : number){
    return function (_:Function): void {
        console.log(`${a} ${b}`);
    }
}

const usuarioLogado : {
    nome : string,
    email : string,
    admin : boolean
} = {
    nome: 'Guilherme',
    email : 'gui@gui.com',
    admin : false
}

@perfilAdmin
class MudancaAdministrativa {
    critico() : void {
        console.log('Algo Crítico Foi Alterado')
    }
}

// Tipo construtor genérico
type Construtor = { new (...args : any[]) : {}}

function perfilAdmin<T extends Construtor>(construtor : T) : any {
    return class extends construtor{
        constructor(...args : any[]) {
            super(...args)
            if(!usuarioLogado.admin){
                throw new Error('Erro sss')
            }
        }
    }
}

new MudancaAdministrativa().critico()

// Decorator em método

class ContaCorrente {
    @naoNegativo
    private saldo : number
    constructor(
        saldo : number
    ) {
        this.saldo = saldo
    }

    public sacar(valor : number) : boolean {
        this.saldo -= valor
        return true
    }

    @congelar
    getSaldo() {
        return this.saldo
    }
}

const cc = new ContaCorrente(500)
cc.sacar(600)
console.log(cc.getSaldo())

function congelar(alvo : any, nomePropriedade: string, descritor: PropertyDescriptor) {
    console.log(alvo)
    console.log(nomePropriedade)
    descritor.writable = false
}

//decorator em atributo

function naoNegativo(alvo : any, nomePropriedade: string) {
    delete alvo[nomePropriedade]
    Object.defineProperty(alvo, nomePropriedade, {
        get: function() : any {
            return alvo['_' + nomePropriedade]
        },
        set : function (valor : any) : void {
            if(valor < 0) {
                throw new Error('Errado')
            } else {
              alvo['_' + nomePropriedade] = valor
            }
        }
    })
}