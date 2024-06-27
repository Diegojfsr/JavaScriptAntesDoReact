
//Metodos de Array

// map()

const array = [1, 2, 3, 4, 5];

//percorrer o array com for
for (const i of array){
    document.body.innerText += i;
}

//percorrer o array com forEach e An arrow function expression
array.forEach(item => {
    document.body.innerText += item;
})

// adicionando os elementos do array a um novo array*2
const novoArray = [];
array.forEach(item => {
    novoArray.push(item*2);
})


//percorrer o array com map | com retorno
const novoArray = array.forEach(item => {
    return item * 2;
})
document.body.innerText = JSON.stringify(novoArray);

// Condicionais dentro do map
const novoArray = array.forEach(item => {
    if(item %2 === 0){
        return item * 10;
    };
    return item;
})
document.body.innerText = JSON.stringify(novoArray);
