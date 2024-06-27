
// Metodos Arrays
//some()

// retorna true se pelo menos um itens satisfas uma condicao. Senao retorna false.


const array = [1, 2, 3, 4, 5, "text"]; //true
const array = [1, 2, 3, 4, 5]; //false

const peloMenosUmitemNaoENumero = array.some(item => {return typeof item != 'number';})
document.body.innerText = JSON.stringify(peloMenosUmitemNaoENumero);
