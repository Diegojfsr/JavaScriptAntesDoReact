
// Objetos

const user = {
    nome: 'Diego',
    idade:27,
    endereco:{
        rua:"Rua Tall",
        numero: 35,
    },
};

//expressao in - verifica se existe uma informacao dentro do objeto.
document.body.innerText = ('nome' in user);


// obter informacoes especificas de um objeto

//retorna as chaves do objeto
document.body.innerText = Object.keys(user);

//retorna os valores do objeto
document.body.innerText = Object.values(user);

//retorna a estrutura caso tenha um objeto como conteudo 
document.body.innerText = JSON.stringify(Object.values(user));


//retorna o objeto em forma de vetor com varios vetores dentro
document.body.innerText = JSON.stringify(Object.entries(user));

