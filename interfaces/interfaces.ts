interface Humano {
    nome: string
    idade? : number
    [prop:string]: any
    saudar(sobrenome : string) : void
}



function saudarComOla(pessoa :  Humano) : void{
    console.log('Olá' + pessoa.nome)
}

function mudarPessoa(pessoa : Humano) : void{
    pessoa.nome = 'Joana'
}

const pessoa : Humano= {
    nome: 'João',
    idade: 18,
    saudar(sobrenome: string) {
        console.log(`Meu nome é ${this.nome} ${sobrenome}`)
    }
}

saudarComOla(pessoa)
mudarPessoa(pessoa)
saudarComOla(pessoa)
pessoa.saudar('Lima Mey')

///

class Cliente implements Humano {
    nome : string = ''
    idade : number = 0
    saudar(sobrenome: string) : void {
        console.log(`Meu nome é ${this.nome} ${sobrenome}`)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Fabiola'
meuCliente.idade = 18
meuCliente.saudar('Coutinho')
