const array = [3, 4, 5, 6];
const objeto = {
    //pares -> chave:valor
    0:3,
    1:4,
    dois:5,
    3:6,
};
console.log(array[2])
console.log(objeto.dois)

//coleçao de objetos
const data = {
    pessoa1:{
        nome: "Joe",
        idade: 32,
        endereco:[
            {
                tipo: "Residencial",
                rua: "Rua A",
                cidade: "Maceió",
            },
        ],
    },
    pessoa2:{
        nome: "Maria",
        idade: 25,
        endereco:[
            {
                tipo: "Residencial",
                rua: "Rua B",
                cidade: "Maceió",
            },
            {
                tipo: "Comercial",
                rua: "Rua C",
                cidade: "Maceió",
            },
        ],
    },


};

//Idade de Joe
console.log (data.pessoa1.idade);
//Endereço comercial de Maria
console.log(data.pessoa2.endereco[1]);
//Listem todos os endereços de Maria
console.log(data.pessoa2.endereco.forEach((end)=>{
    console.log(end.tipo);
})
);
