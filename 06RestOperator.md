
// Rest Operator
// Remove parte do objeto para uma variavel a parte.




const user = {
    nome: 'Diego',
    idade:27,
    //nickname: 'Jeff',
    endereco:{
        rua:"Rua Tall",
        numero: 35,
    },
};



// pegando o valor nome do objeto
const { nome} = user;
document.body.innerText = nome;

// pega todo o conteudo do objeto menos o nome
const { nome, ...rest } = user;
document.body.innerText = JSON.stringify(rest);

// pega todo o conteudo do objeto menos o nome e idade
const { nome, idade ...rest } = user;
document.body.innerText = JSON.stringify(rest);


// Rest Operator em arrays

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const first = array[0];
document.body.innerText = JSON.stringify(first);

// com desestruturacao
const [first, second] = array;
document.body.innerText = JSON.stringify({first, second});

// Usando o Rest Operator 

const [first, second, ...rest] = array;
document.body.innerText = JSON.stringify({first, second, rest});

// Pulando valores
// Apaga o valor e deixa a virgula

const [first, , third, ...rest] = array;
document.body.innerText = JSON.stringify({first, third, rest});

