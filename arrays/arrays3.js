function countOccurrences(arr, element){
    let ocrr = 0

    for(i of arr){
        if(element == i){
            ocrr += 1
        }
    }
    return ocrr
}



console.log(countOccurrences([1, 2, 2, 3, 2], 2)); // Deve exibir: 3
console.log(countOccurrences(["apple", "banana", "apple"], "apple")); // Deve exibir: 2