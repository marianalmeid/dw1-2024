function reverseString(str) {
    return str.split('').reverse().join('');
    // split --> separa as letras da string
    // reverse --> inverte a ordem dos elementos
    // join --> junta tudo novamente na string

}

console.log(reverseString("javascript")); // Deve exibir: "tpircsavaj"
console.log(reverseString("hello")); // Deve exibir: "olleh"