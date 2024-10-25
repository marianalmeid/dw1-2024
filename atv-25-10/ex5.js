function getInitials(nome){
    let letras = nome.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
     return letras
}                                                                                            






console.log(getInitials("João Silva")); // Deve exibir: "JS"
console.log(getInitials("Maria Oliveira")); // Deve exibir: "MO"