'use scrict'

export async function  getContatos (){
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos/'
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export async function  getContatosPorNome (nome){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos?nome_like=^${nome}` 
    const response = await fetch(url)
    const data = await response.json()
    return data
} 

async function  getContato (id){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log (data)
    return data
}

export async function  postContato (contato){
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos'
    const options = {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    }
        const response = await fetch (url, options)
        return response.ok 
}

// const novoContato = {
//     "nome": "Letícia Beatriz",
//     "celular": "11 9 3333-3333",
//     "foto": "senai.png",
//     "email": "leticia@gmail.com",
//     "endereco": "Elton Silva, 904",
//     "cidade": "Jandira"
// }

async function  putContato (contato, id){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method: 'PUT',
        headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    }
        const response = await fetch (url, options)
        return response.ok 
}

// const novoContato = {
//     "nome": "Letícia Beatriz",
//     "celular": "11 9 2222-2222",
//     "foto": "senai.png",
//     "email": "leticia@gmail.com",
//     "endereco": "Elton Silva, 904",
//     "cidade": "Jandira"
// } 


async function deleteContato(id){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options= {
        method: 'DELETE'
    }
        const response = await fetch (url, options)
        return response.ok 
}

