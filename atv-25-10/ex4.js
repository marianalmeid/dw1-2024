function countOccurrences(str, carac){
    let count = 0 
    for (let letra of str){
        if(letra == carac){
            count += 1
        }
    }
    return count
}



console.log(countOccurrences("banana", "a")); // Deve exibir: 3
console.log(countOccurrences("hello world", "l")); // Deve exibir: 3