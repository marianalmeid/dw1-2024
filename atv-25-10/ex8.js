function trimSpaces(str){
    let frase = str.trim().replace(/\s+/g, ' ');
    return frase
}



console.log(trimSpaces("   JavaScript    é     divertido    ")); // Deve exibir: "JavaScript é divertido"
console.log(trimSpaces("   Programação     é   interessante  ")); // Deve exibir: "Programação é interessante"