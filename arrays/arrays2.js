function findMax(arr){
    let numMax = arr[0]

    for (i of arr){
        if(i>numMax){
            numMax = i
        }
    }
    return numMax
}



console.log(findMax([1, 2, 3, 4, 5])); // Deve exibir: 5
console.log(findMax([-10, 0, 10, 5])); // Deve exibir: 10