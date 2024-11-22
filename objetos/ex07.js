const carrinho = {
    itens: [
        {nome: 'camiseta', preco: 40},
        {nome: 'short', preco: 60}

    ],
    total: function (){
        return this.itens.reduce((total, item) => total +=item.preco, 0);
        }
    
    }

console.log(carrinho.total());