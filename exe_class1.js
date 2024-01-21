/*crie uma classe chamada Carro
os carros possuem marca, cor e um gasto médio de combustível por quilômetro rodado.
cire um metodo que dado a quantidade de quilometros e o preço de combustivel nos de o valor gasto em reais para realizar este percurso.*/


class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGasto(km, preco) {
        return km * preco * this.gastoMedioPorKm;
    }
}

const carro1 = new Carro('Fiat', 'Vermelho', 1/12);
const carro2 = new Carro('Chevrolet', 'Preto', 1/10);
const carro3 = new Carro('Ford', 'Branco', 1/8);
carro1.calcularGasto(100, 5);
carro2.calcularGasto(100, 5);
carro3.calcularGasto(100, 5);
console.log(carro1.calcularGasto(100, 5));
console.log(carro2.calcularGasto(100, 5));
console.log(carro3.calcularGasto(100, 5));
