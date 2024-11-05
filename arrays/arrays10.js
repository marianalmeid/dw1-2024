function findIndex(arr, element) {
    let i = 0;
  
    while (i < arr.length) {
      if (arr[i] === element) {
        return i; 
      }
      i++;
    }
  
    return -1; 
  }

console.log(findIndex([1, 2, 3, 4], 3)); // Deve exibir: 2
console.log(findIndex(["apple", "banana"], "cherry")); // Deve exibir: -1