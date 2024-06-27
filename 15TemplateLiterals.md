
//Template Literals
//Concatenacao de variaveis

const name = 'Diego';
const mensage = 'Bem vindo,' + name;
document.body.innerText = mensage;

//interpolacao de strings
const mensage2 = `Bem vindo, ${name} `;
document.body.innerText = mensage2;

//juntando com metodos
const mensage3 = `Bem vindo, ${name ? name : 'visitante'} `; // se o nome nao existir coloca visitante no lugar.
document.body.innerText = mensage3;

