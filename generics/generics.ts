// Exemplo de problema de usar Any
function echo (objeto : any) : any {
    return objeto
}

console.log(echo('Hello World!'))
console.log(echo(39))
console.log(echo(39).length)

// Generic

function echoMelhorado<T>(objeto : T) : T {
    return objeto
}

console.log(echoMelhorado<number>(39))
console.log(echoMelhorado<string>('João'))

// Generic com Arrays
const avaliacoes : Array<number> = [1,2,3,4,5]
avaliacoes.push(55)

function imprimir <T> (args: T[]) : void {
    args.forEach(elemento => console.log(elemento))
}

imprimir<number>([1,2,3,4,5])

// Tipo com generics
type Echo = <T>(data : T) => T

const chamarEcho:Echo = echoMelhorado

console.log(chamarEcho<number>(5))

// Generics com Classe

class OperacaoBinaria{
    constructor(
        public operando1 : any,
        public operando2 : any,
    ) {
    }

    executar() : any {
        return this.operando1 + this.operando2
    }
}


console.log(new OperacaoBinaria('Bom', 'dia').executar())
console.log(new OperacaoBinaria(3, 'dia').executar())

abstract class OperacaoBinaria2<T, R>{
    constructor(
        public operando1 : T,
        public operando2 : T,
    ) {
    }

    abstract executar() : R
}

class SomaBinaria extends OperacaoBinaria2<number, number> {
    executar(): number {
        return this.operando1 + this.operando2
    }
}

// console.log(new SomaBinaria()('Bom', 'dia').executar())
console.log(new SomaBinaria(3, 5).executar())

// Constraints

class Fila<T extends number | string>{
    constructor(
        public elemento : T
    ) {
    }
}




