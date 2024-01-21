
const entradas = [10, 5, 50, 30, 98, 23, 33, 44, 100, 1, 7];
let i = 0;

const gets = () => {
    const valor = entradas[i];
    i++;
    return valor;
}

const print = (texto) => {
    console.log(texto);
}

module.exports = {gets, print};