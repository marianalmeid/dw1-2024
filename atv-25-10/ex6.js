function toSnakeCase(str) {
    return str
        .trim()                
        .toLowerCase()         
        .replace(/\s+/g, '_');
}

console.log(toSnakeCase("Hello World")); // Deve exibir: "hello_world"
console.log(toSnakeCase("JavaScript is fun")); // Deve exibir: "javascript_is_fun"
