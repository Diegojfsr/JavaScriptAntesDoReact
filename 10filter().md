
// Metodos Arrays
// filter()

// filtar array
const array = [1, 2, 3, 4, 5];

const novoArray = array.filter(item => item % 2 == 0);
const novoArray = array.filter(item => item % 2 =! 0);

//Unindo metodos - filtrando o arrai original e percorrendo o novo array mutiplicando por 10 e criando um novo array.
const novoArray = array
.filter(item => item % 2 == 0)
.map( item => item * 10 );
