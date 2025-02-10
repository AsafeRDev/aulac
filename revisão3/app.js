//eventos
document.addEventListener("DOMContentLoaded", ()=>{
    const url = 'https://api.chucknorris.io/jokes/categories'
    // console.log(url)
    fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new Error('Erro ao receber dados')
        }
        return response.json()
    })
    .then((data)=>{
        gerarCategoria(data)
    })
    .catch((err)=>{
        console.log(err);
    });
});

const gerarCategoria = (categorias)=>{
    const select = document.getElementById('select')
    categorias.map((categoria)=>{
        const options = document.createElement("option")
        options.innerHTML = `${categoria}`
        options.value = categoria;
        options.id = categoria;
        select.appendChild(options);
    })
}

const btnEnviar = document.getElementById('btnEnviar')
btnEnviar.addEventListener('click', async()=>{
    const select = document.getElementById('select').value
    //console.log(select)
    const url = `https://api.chucknorris.io/jokes/random?category=${select}`;
    
    await fetch(url)
    //1º Verifica a responsa
    .then((response)=>{
        if(!response.ok){
            throw new Error('Erro ao buscar piada com categoria')
        }
        return response.json()
    })
    //2º Pega a resposta e manda para uma função
    .then((data)=>{
        gerarPiada(data);
    })
    .catch((err)=>console.log(err));
});

const gerarPiada = (piada) => {
    const joke = document.getElementById("joke")
    joke.textContent = piada.value
    
}

