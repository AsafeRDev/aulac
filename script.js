// let prodtuo = 'camisa'//contexto global
// const preco = 50 //contexto global

// function calcularPrecoComDesconco () {
//     const desconto = 0.1
//     const precoFinal = preco - preco * desconto
//     console.log(`preço com desconto: R$${precoFinal}`)
// }
// calcularPrecoComDesconco()
// console.log(produto)
// console.log(desconto)

// for (let i = 0; i < 10; i++) {
//     console.log(i)   
// }
// console.log(i)


const prato = 'pizza' //global
const quantidade = 3 //global

function calcularTotal(){
    const preco = 45.0 //função/local
    const total = preco * quantidade //função/local 

    if (quantidade > 2) {
        console.log(prato)
        const desconto = 0.1 //bloco
        return total * (1- desconto)
        
    }''
    return total
}
console.log(`Preço total com desconto: R${calcularTotal()}`)
console.log(prato)