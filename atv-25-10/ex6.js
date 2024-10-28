function toSnakeCase(str) {
    let underline = str.trim().toLowerCase().replace(/\s+/g, '_');
    return underline
}

console.log(toSnakeCase("Hello World")); // Deve exibir: "hello_world"
console.log(toSnakeCase("JavaScript is fun")); // Deve exibir: "javascript_is_fun"
