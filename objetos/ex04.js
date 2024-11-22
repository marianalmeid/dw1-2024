const pessoa ={
    nome: 'Mariana', idade: 17,
    cumprimentar: function(){
        console.log('Olá, meu nome é',this.nome);
    }
};
console.log(pessoa.cumprimentar());