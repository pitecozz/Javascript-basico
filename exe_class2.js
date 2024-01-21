/*crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu (IMC(IMC = peso / altura²)).
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC.*/


class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }

    classificarIMC = (imc) => { 
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc < 25) {
            return 'Peso normal';
        } else if (imc < 30) {
            return 'Sobrepeso';
        } else if (imc < 35) {
            return 'Obesidade grau 1';
        } else if (imc < 40) {
            return 'Obesidade grau 2';
        } else {
            return 'Obesidade grau 3';
        }
    }   
}

const pessoa1 = new Pessoa('José', 70, 1.75);
console.log(pessoa1.calcularIMC());
console.log(pessoa1.classificarIMC(pessoa1.calcularIMC()));