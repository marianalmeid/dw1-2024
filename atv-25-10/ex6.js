function toSnakeCase(str) {
    return str
        .trim()                // Remove espaços extras no início e fim
        .toLowerCase()         // Converte tudo para letras minúsculas
        .replace(/\s+/g, '_'); // Substitui espaços por underscores
}

// Exemplo de uso
console.log(toSnakeCase("Exemplo de frase para snake case")); // Saída: "exemplo_de_frase_para_snake_case"
