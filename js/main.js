"use scrict"

import { getContatos, getContatosPorNome } from "./contato.js"

function criarCard(contato){
    console.log(contato)
    const container = document.getElementById('container')
    const card = document.createElement ('div')
    card.classList.add('card-contato')
    card.innerHTML = `
        <img src="${contato.foto}" alt="">
        <h2>${contato.nome}</h2>
        <p>${contato.celular}</p>
    `
    container.appendChild(card)

}

async function exibirPequisa(evento){
    const container = document.getElementById('container')
    if(evento.key == 'Enter'){
       const contatos = await getContatosPorNome(evento.target.value)
        container.replaceChildren()
       contatos.forEach(criarCard)
     
    }
}

async function exibirContatos(){
    const contatos = await getContatos()
    contatos.forEach(criarCard)
}
exibirContatos()

document.getElementById('pesquisar').addEventListener('keydown', exibirPequisa)