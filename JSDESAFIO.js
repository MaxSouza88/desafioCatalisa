const imagem = document.querySelector('img');
const imagemSegundo = document.querySelector('img');
const imagemTerceiro = document.querySelector('img');

const botao = document.querySelector('button');
const botaoS = document.querySelector('button');
const botaoT = document.querySelector('button');

const nomeDoPersonagem = document.querySelector('#primeiroNome');
const nomeDoSegundoPersonagem = document.querySelector('#segundoNome');
const nomeDoTerceiroPersonagem = document.querySelector('#terceiroNome');

const especieDoPersonagem = document.querySelector('#primeiroEspecie');
const especieDoSegundoPersonagem = document.querySelector('#segundoEspecie');
const especieDoTerceiroPersonagem = document.querySelector('#terceiroEspecie');

const statusDoPersonagem = document.querySelector('#primeiroCondicao');
const statusDoSegundoPersonagem = document.querySelector('#segundoCondicao');
const statusDoTerceiroPersonagem = document.querySelector('#terceiroCondicao');

gerarValorAleatorio = () =>{
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
let numeroAleatorio = gerarValorAleatorio();

return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
    method:'GET',
    headers: {
        Accept: 'application/json',
        "Content-type": 'application/json'
    }

}).then((response) => response.json()).then((data) => {
    imagem.src = data.image;
    imagem.alt = data.name;
    
    nomeDoPersonagem.innerHTML = data.name;
    especieDoPersonagem.innerHTML = data.species;
    statusDoPersonagem.innerHTML = data.status;
});
}

gerarValorAleatorioS = () =>{
    return Math.floor(Math.random() * 671);
}

pegarPersonagemS = () => {
let numeroAleatorioS = gerarValorAleatorioS();

return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorioS}`, {
    method:'GET',
    headers: {
        Accept: 'application/json',
        "Content-type": 'application/json'
    }
}).then((response) => response.json()).then((data) => {
    imagemSegundo.src = data.image;
    imagemSegundo.alt = data.name;

    nomeDoSegundoPersonagem.innerHTML = data.name;
    especieDoSegundoPersonagem.innerHTML = data.species;
    statusDoSegundoPersonagem.innerHTML = data.status;
});
}

gerarValorAleatorioT = () =>{
    return Math.floor(Math.random() * 671);
}

pegarPersonagemT = () => {
let numeroAleatorioT = gerarValorAleatorioT();

return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorioT}`, {
    method:'GET',
    headers: {
        Accept: 'application/json',
        "Content-type": 'application/json'
    }
}).then((response) => response.json()).then((data) => {
    imagemTerceiro.src = data.image;
    imagemTerceiro.alt = data.name;

    nomeDoTerceiroPersonagem.innerHTML = data.name;
    especieDoTerceiroPersonagem.innerHTML = data.species;
    statusDoTerceiroPersonagem.innerHTML = data.status;
});
}


botaoS.onclick = pegarPersonagemS;


