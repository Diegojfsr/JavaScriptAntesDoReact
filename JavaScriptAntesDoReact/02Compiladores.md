
Compiladores

Babel - Compila codigos modernos ecmascript e trasnforma em funcoes que os navegadores conseguem intender.

Esbuild - E um bundle que Tambem compila codigos modernos para codigos que os navegadores intendam.

Ex.
//codigo inicial
const teste = 0?? 10; 

//codigo convertido
var _;
const teste = (_ = 0) != null ? _ : 10;



Bundles

Webpack - ferramenta de bundle, pega varios arquivos fonte e converte em um unico arquivo que contem outros arquivos dentro.
Outros exemplos desse tipo de ferramenta. Browserify e Require.js

//Iniciando o projeto com Vite

Vite
https://vitejs.dev/
Usado para criar projetos JavaScript e React


Iniciando o projeto
> npm create vite@latest
? Project name: js-antes-do-react
? Select a framework: vanilla
? Select a variant: vanilla

Scaffolding project in / users/diegojfsr/js-antes-do-react

Done    Now     run

cd js-antes-do-react
npm install
npm run dev


> cd js-antes-do-react/

//instalando as dependencias
> npm i
> code .

