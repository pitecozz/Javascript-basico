class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        return `Meu nome é ${this.nome} e eu tenho ${this.idade} anos`;
    }
}
const compararPessoas = (p1, p2) => {
    if (p1.idade > p2.idade) {
        return `${p1.nome} é mais velho que ${p2.nome}`;
    } else if (p1.idade < p2.idade) {
        return `${p2.nome} é mais velho que ${p1.nome}`;
    } else {
        return `${p1.nome} e ${p2.nome} tem a mesma idade`;
    }
}

const pessoa1 = new Pessoa('João', 20);
const pessoa2 = new Pessoa('Maria', 25);
console.log(compararPessoas(pessoa1, pessoa2));