


// Promises
// Aguardar uma resposta de uma requisicao
// Ouvir resultados com  .then ou .catch

//criar uma promise

//ex1
// retur Ok
const somaDoisNumeros = (a, b) =>  {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(a + b);
    }, 2000);
}); 
};
somaDoisNumeros(1, 3)
.then(soma => {
    document.body.innerText = soma;
})

// retur error
const somaDoisNumeros2 = (a, b) =>  {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(a + b);
    }, 2000);
}); 
};
somaDoisNumeros2(1, 3)
.then(soma => {
    document.body.innerText = soma;
})
.catch(err => {
    console.log(err);
})

//ex2

fetch('https://api.github.com/user/diegojfsr')

.then(response => {
    //console.log(response.text())
    response.json().then(body =>{
        console.log(body);
    })
})

.catch(err => {
    console.log(err)
})


//ex3
//sem cascata de .then
fetch('https://api.github.com/user/diegojfsr')

.then(response => {
    return response.json();
})
.then(body => {
    console.log(body)
})

.catch(err => {
    console.log(err)
})

// . finally()
// metodo execultado independente de certo ou errado, sempre executado no final.

.finally(() => {
    console.log('deu')
})


//ex4

async function buscaDadosNoGithub(){
    try{    const response = await     fetch('https://api.github.com/user/diegojfsr');

        const body = await response.json();
        console.log(body);
    } catch (err) {
        console.log(err);
    } finally {
        console.log('deu');
    }
}
buscaDadosNoGithub();


//ex5
async function buscaDadosNoGithub(){
    try{    const response = await     fetch('https://api.github.com/user/diegojfsr');

        const body = await response.json();
        return body.name;
    } catch (err) {
        console.log(err);
    } finally {
        console.log('deu');
    }
}
buscaDadosNoGithub().then(name =>{
    console.log(name);
});
