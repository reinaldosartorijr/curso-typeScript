class Data {
    // visibilidade pública
    public dia : number
    public mes : number
    protected  ano : number

    constructor(dia : number = 1, mes : number = 1, ano : number = 1970) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const  aniversario = new Data(7,4,1995)
console.log(aniversario)

class DataEnxuta {

    constructor(
        public dia : number = 1,
        protected mes : number = 1,
        protected ano : number = 1970
    ){}
}

class Produto{
    constructor(
       public nome : string,
       protected preco : number = 0,
       public desconto : number = 0
    ) {

    }

    private precoComDesconto() : number {
        return this.preco * (1 - this.desconto / 100)
    }

    public resumo() : string {
        return ` O produto ${this.nome} tem o preço ${this.precoComDesconto()} já com ${this.desconto} de desconto`
    }
}

const mouse : Produto = new Produto('Mouse', 100, 5)
console.log(mouse.resumo())

// classes estaticas

class Matematica {
    static PI : number = 3.1415

    static areaCirc(raio: number) : number{
        return Matematica.PI * raio * raio
    }
}

console.log(Matematica.areaCirc(4))

// classe abstrata

abstract class Calculo {
    protected resultado : number = 0

   abstract executar(...numeros: number[]) : void

   protected getResultado() : number {
        return this.resultado
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]):void {
        this.resultado = numeros.reduce((t,a) => t + a)
    }
}

class Multiplicar extends Calculo {
    executar(...numeros: number[]):void {
        this.resultado = numeros.reduce((t,a) => t * a)
    }
}

const c1 :Calculo = new Soma()
c1.executar(1,2,3,4,5)
console.log(c1)

const c2 : Multiplicar = new Multiplicar()
c2.executar(1,2,3,4,5)
console.log(c2)

// singleton

class Unico {
    private static instance : Unico = new Unico
    private constructor() {
    }
    static getInstance() : Unico {
        return Unico.instance
    }
}

// atributos somente leitura

class Aviao {
    constructor(public readonly modelo : string) {
    }
}