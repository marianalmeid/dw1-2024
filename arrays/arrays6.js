function average(arr){
    let x = 0 
    let r = 0

    for(i of arr){
        x += 1
        r += i
    }
    r = r/x
    return r
}



console.log(average([1, 2, 3, 4])); // Deve exibir: 2.5
console.log(average([10, 20, 30])); // Deve exibir: 20