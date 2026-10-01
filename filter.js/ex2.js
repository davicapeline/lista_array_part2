const produtosCondicao = produtos.filter((produto) => produto.preco > 100 && produto.estoque > 0);

console.log('Produtos com preço maior que 100 e estoque maior que 0:', produtosCondicao);
