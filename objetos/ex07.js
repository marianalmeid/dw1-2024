const carrinho = {
    itens: [
        {nome: 'camiseta', preco: '40'},
        {nome: 'short', preco: '60'}

    ],
    total: function (){
        let total = 0;
        for (const item of this.itens){
            total +=item.preco;
        }
        return total;
    }
}

console.log("Total:", carrinho.total());