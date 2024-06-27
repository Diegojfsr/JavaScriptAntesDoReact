
// Metodos Arrays
//every()

// retorna true se os itens satisfiserem uma condicao. Senao retorna false.

const array = [1, 2, 3, 4, 5];

const todosItensSaoNumeros = array.every(item => typeof item == 'number');

document.body.innerText = JSON.stringify(todosItensSaoNumeros);


const array2 = [1, 2, 3, 4, 5, "text"];
//assim
// const todosItensSaoNumeros2 = array.every(item => typeof item == 'number');
//ou assim tambem
const todosItensSaoNumeros2 = array.every(item => { return typeof item == 'number'});

document.body.innerText = JSON.stringify(todosItensSaoNumeros2);

