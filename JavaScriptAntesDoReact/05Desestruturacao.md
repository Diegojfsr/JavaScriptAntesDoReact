
// Desestruturação

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

// obtendo o endereco em uma nova variavel.

const endereco = user.endereco

document.body.innerText = JSON.stringify(endereco);


// usando a desestruturacao
const {endereco} = user.

document.body.innerText = JSON.stringify(endereco);

//Obtendo duas informacoes ao mesmo tempo 
const {endereco, idade} = user.

document.body.innerText = JSON.stringify({endereco, idade});

// renomeando variaveis
const {endereco, idade: age} = user.

document.body.innerText = JSON.stringify({endereco, age});


// setando valores defoult para variaveis
const {endereco, idade: age, nickname = 'Jeff'} = user.

document.body.innerText = JSON.stringify({endereco, age, nickname}); //caso ja exista o valor nickname dentro do objeto, sera exibido o valor de dentro do Objeto.



//Usando a desestruturacao dentro de funcoes
function mostraIdade(user){
    return user.idade;
}
document.body.innerText = mostraIdade(user);


//Usando a desestruturacao
// Posso pegar mais de uma informacao
// Posso renomear, entre outros
function mostraIdade({idade}){
    return idade;
}
document.body.innerText = mostraIdade(user);

