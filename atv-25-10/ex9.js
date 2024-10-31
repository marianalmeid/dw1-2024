function replaceChar(str, oldChar, newChar){
    return str.split(oldChar).join(newChar)
}

console.log(replaceChar("hello world", "l", "z")); // Deve exibir: "hezzo worzd"
console.log(replaceChar("banana", "a", "o")); // Deve exibir: "bonono"