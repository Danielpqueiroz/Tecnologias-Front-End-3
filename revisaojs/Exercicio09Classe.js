class Pessoa {
    constructor(nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;

    }

    exibirInfo() {
        console.log("Nome:", this.nome, ", Idade:", this.idade, ", Profissão:", this.profissao )
    }
}
const pessoa1 = new Pessoa("João", 30, "Engenheiro");

pessoa1.exibirInfo();