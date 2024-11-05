function removeDuplicates(arr) {
  let array = [];
  let i = 0; 
  let j;      interno

  while (i < arr.length) {
    let isDuplicate = false;
    j = 0; 

    while (j < array.length) {
      if (arr[i] === array[j]) {
        isDuplicate = true;
        break;
      }
      j++;
    }

    if (!isDuplicate) {
      array[array.length] = arr[i];
    }
    i++;
  }

  return array;
}
  
console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(removeDuplicates(["apple", "apple", "banana"])); // Deve exibir: ["apple", "banana"]
