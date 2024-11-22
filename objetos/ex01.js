//1
const carro ={
    marca: 'volkswagen', modelo: 'amarok', ano: '2024'
}
console.log(carro)


//2
console.log(carro['marca'])
carro.ano = 2021

console.log(carro)


//3
carro.cor = 'preto'

delete carro.modelo

console.log(carro)