//const louco = () => {
//   console.log("pitecp lendario");
//}

//louco();


// WRITE YOUR NAME FUNCTION (FUNÇAÕ DE ESCREVER SEU NOME)
const escrevaMeuNome = (nome) => {
    return 'Meu nome eh ' + nome
}


// AGE CHECK FUNCTION (FUNÇÃO DE VERIFICAÇÃO DE IDADE)
const verificarIdade = (idade) => {
    if (idade >= 18) {
        console.log(escrevaMeuNome('pedro ') + 'Maior de idade');
    } else {
        console.log('Menor de idade');
    }
}
verificarIdade(18);