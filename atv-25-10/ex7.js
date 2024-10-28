function capitalizeWords(frase){
    let maiusc = frase.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return maiusc
}

console.log(capitalizeWords("hello world")); // Deve exibir: "Hello World"
console.log(capitalizeWords("javaScript is awesome")); // Deve exibir: "JavaScript Is Awesome"