// const array = [12, 3, 4 , 5 ,76]
// console.log(array)
// array.push(2)//Adiciona o valor final do array
// console.log(array)
// array.unshift(3)//Adiciona o valor inicio array
// console.log(array)
// array.pop()//Remover o ultimo elemento do array
// console.log(array)
// array.shift()//Remover o primeiro elemento do array
// console.log(array)

// const numeros = [3, 6, 5, 9, 4, 2, 1 ,5, 6];
// //1º - elemento, 2º? - indice/index, 3º? - array
// numeros.forEach( (elemento, indice, array)=>{
//     console.log(` ${indice} - ${elemento} - ${array} `)
// })

// const somaCom5 = (x) => x + 5
// numeros.map ( (elementos)=>{
//     console.log(elementos* 2)
// } )
// console.log(numeros.map(somaCom5))


let array1 = [1, 3, 6, 8, 9, 4];

// const listarDados = array1.forEach((elemento)=>{
//     console.log(elemento * 2)
// })

// let acharDados = array1.find(function(elemento) {
//     return elemento > 6;

// })
// console.log(acharDados) //Find

let maior6 = array1.filter(function(elemento) {
    return elemento > 6
})

console.log(maior6) //Filter




// const mutiplicaPorCinco = array1.map((elemento) => {
//     return elemento * 5
// })
// console.log (mutiplicaPorCinco)

// const maisDois = mutiplicaPorCinco.map ((elemento)=>{
//     return elemento + 2
// })
// console.log (maisDois)//exemplo2

// //encontrar um numero que seja maior que 6