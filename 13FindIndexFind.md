
// Metodos Arrays
//find() e findIndex()

// find() serve para encontrar um item do array. Retorna o primeiro item encontrado.



const array = [1, 2, 3, 4, 5];

const par = array.find(item => item % 2 == 0 );
document.body.innerText = JSON.stringify(par);


// findIndex() retorna o indice do item encontrado.

const par2 = array.findIndex(item => item % 2 == 0 );
document.body.innerText = JSON.stringify(par);
