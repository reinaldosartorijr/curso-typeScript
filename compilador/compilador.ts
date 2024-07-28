let canal : string = 'Gaveta'
let inscritos : number = 61999

canal = 'Pedro Lima'

console.log(canal)

function saudar(isManha : boolean) : string{
    let saudacao : string
    if(isManha){
        saudacao = 'Bom Dia'
    }else {
        saudacao = 'Olá'
    }
    return saudacao
}
