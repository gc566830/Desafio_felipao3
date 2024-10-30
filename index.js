class personagem{
    constructor(nome,tipo,atack){
        this.nome = nome
        this.tipo = tipo
        this.atack = atack
    }
    ataque(){
        console.log(`O ${this.tipo} de nome:${this.nome} atacou usando: ${this.atack}`)

    }
}

let guereiro = new personagem("adamastor","guereiro","espada")

guereiro.ataque()
