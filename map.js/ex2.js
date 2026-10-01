const produtosOff = produtos.map((produto) => {
    return {
        ...produto,
        preco: produto.preco * 0.9,
    };
});

console.log(produtosOff);
