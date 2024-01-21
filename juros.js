

const aplicarDesconto = (preco, desconto) => {
    return  preco - (preco * (desconto / 100));
}

const precoEtiqueta = 100;
const formaDePagamento = 1;

if(formaDePagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));
} else if(formaDePagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
} else if(formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else if(formaDePagamento === 4) {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
} else {
    console.log('Forma de pagamento invalida');
}