// String
let nome: string = 'João'
console.log(nome)

// Número
let idade : number = 10
console.log(idade)

// Boolean
let possuiHobbies: boolean = true
console.log(possuiHobbies)

// Array
let hobbies: string[] = ['Cozinhar', 'Esportes']
console.log(hobbies[0])

// Tupla
let endereco: [string, number]
endereco = ['Rua Paulo Izzo', 59]
console.log(typeof endereco)
console.log(endereco)

//Enum
enum Cor{
    Cinza,
    Verde = 100,
    Azul,
}

console.log(Cor.Azul)

// Any
let carro : any = 'Audi'
carro = {marca : 'BMW', modelo:'X3'}

// Funções
function retornaNome() : string {
    return nome
}
console.log(retornaNome())

function digaOi() : void {
    console.log('oi')
}
digaOi()

function multiplicar(num1:number, num2:number) : number {
    return num1 * num2
}

console.log(multiplicar(5,8))

// Funções como Tipos

const soma = function (a: number, b: number) : number {
    return a + b
}
let calculo: (x: number, y: number) => number
calculo = soma
console.log(calculo(14,5))

// Objetos

let usuario : {nome : string, idade : number} = {
    nome : 'João',
    idade : 20
}

usuario = {nome : 'Reinaldo', idade : 29}

console.log(usuario)

/*
* Desafio
* */

let funcionario : {
    supervisores : string[],
    baterPonto : (hora : number) => string
} = {
    supervisores : ['João', 'Maria', 'José'],
    baterPonto : function baterPonto(hora : number) : string {
        if(hora <= 8){
            return 'Ponto Normal'
        }  else {
            return 'Fora do Normal'
        }
    }

}

console.log(funcionario.baterPonto(9))

// Tipos Personalizados - Alias

type funcionario = {
    supervisores : string[],
    baterPonto : (hora : number) => string
}

let funcionario2 : funcionario = {
    supervisores : ['Ana', 'Cléia'],
    baterPonto : function baterPonto() : string { return 'Sempre Chega no Horário'}
}

// Union Types

let nota : number | string = 10

console.log(`Minha Nota é ${nota}`)

nota = '22'

console.log(`Minha Nota é ${nota}`)

// NEVER

const falha = (msg : string): never => {
    throw new Error(msg)
};

const produto : {
    produto : string,
    preco : number,
    validarProduto : () => void
} = {
    produto : 'Sabão',
    preco : -1,
    validarProduto : function validarProduto() : void {
        if(this.produto.length == 0) {
            falha('Nome Inválido')
        }
        if(this.preco <= 0) {
            falha('Preço Inválido')
        }
    }
}

produto.validarProduto()

// null

let altura : null | number = 12
altura = null

