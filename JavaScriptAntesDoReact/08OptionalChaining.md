
//Optional Chaining

// Trablhando com erros ao acessar propriedades inexistentes



//Sem Optional Chaining
const user = {
    name: 'Diego',
    age: 27,
    // address: {
    //     street: 'Rua tall',
    //     number: 35,
    // },
};

document.body.innerText = user.address.street;// vai dar erro de propriedade nao encontrada.

document.body.innerText = user.address ? user.address.street : 'Nao informado';


//Com Optional Chaining
const user = {
    name: 'Diego',
    age: 27,
    // address: {
    //     street: 'Rua tall',
    //     number: 35,
    //     zip: {
    //         code: '36810',
    //         city: 'RJ',
    //     },
    // },
};


document.body.innerText = user.address
    ? user.address.zip
        ? user.address.zip.code
        : 'Nao informado'
    : 'Nao informado';

//Com Optional Chaining fica asssim.
document.body.innerText = user.address?.zip?.code ?? 'nao informado';


const user = {
    name: 'Diego',
    age: 27,
    address: {
        street: 'Rua tall',
        number: 35,
        zip: {
            code: '36810',
            city: 'RJ',
        },
        showFullAddress(){
            return 'ok';
        },
    },
};

document.body.innerText = user.address?.showFullAddress?.();
