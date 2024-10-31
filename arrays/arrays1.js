function sumArray(arr){
    let soma = 0
    for (i of arr){
        soma += i
    }
    return soma

}


console.log(sumArray([1, 2, 3, 4])); // Deve exibir: 10
console.log(sumArray([10, -10, 10])); // Deve exibir: 10