const x = '10'

//checar se x é um número
if(!Number.isInteger(x)){
    throw new console.error('o valor de x não é um numero inteiro!');
}

console.log('Continuando o código...')