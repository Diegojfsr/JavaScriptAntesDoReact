
document.body.innerText = 'Hello World';

//Nullish Coalescing Operator
//E um operador para lidar com valores nulos.

const idade = 27;
document.body.innerText = 'Sua idade é:' + idade;

const idade2 = 0;
document.body.innerText = 'Sua idade é:' + idade;

const idade3 = null;
document.body.innerText = 'Sua idade é:' + idade;

// 0, '', [], false, undefined, null 
// Sao considerados para o JS como valores false
const idade4 = null;
document.body.innerText = ('Sua idade é:' + idade || 'Nao informado');//ou e true e mostra a idade || ou e false e retorna Nao informado


// Usando o Nullish Coalescing Operator
// Ele faz a separacao do 0 dos demais valores(null, '', [], undefined)
const idade5 = 0;
document.body.innerText = ('Sua idade é:' + idade ?? 'Nao informado');
























