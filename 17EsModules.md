

// ES Modules
// Importacoes e Exportacoes


// criar uma pasta lib
// criar o arquivo math.js
// colocar a function abaixo dentro do arquivo

// named export
// export default



export function soma(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export const PI = Math.PI;


export default function sum(a,b){
    return a + b;
}






// importar a function soma dentro do arquivo sum.js dentro da pasta pasta lib.

import { soma,  sub, PI } from './lib/math'

console.log(soma(1, 2));
console.log(sub(2, 1));
console.log(PI);


import sum from './lib/sum'
console.log(sum(1, 2));

// importar tudo de dentro do arquivo math
// import * as math from './lib/math'
console.log(math);


// renomeando funcao
import { soma as sum } from './lib/math'
console.log(sum(1, 2));



// proxi
// ele importa a funcao do arquivo math e ja exporta a funcao para fora do arquivo sum.
export {soma} from './lib/math'

// no arquivo mais (pode ser fora da pasta lib tambem) reimporta a function
import {soma} from './lib/sum'
console.log(suma(1, 2));
