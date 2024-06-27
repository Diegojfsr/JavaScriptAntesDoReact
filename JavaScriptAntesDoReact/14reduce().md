
// Metodos Arrays
// reduce()

// Usado para pegar um array e criar uma nova estrutura de dados.

const array = [1, 2, 3, 4, 5];

const soma = array.reduce((acc, item) => {
    document.body.innerText += acc + ',' + item + '---'

    return acc + item; 
}, 0)

//retornando a soma dos itens do array.
document.body.innerText = JSON.stringify(soma);

