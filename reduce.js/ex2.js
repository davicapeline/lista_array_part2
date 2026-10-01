// 10
const patrimonioTotal = produtos.reduce(
    (acumulador, produto) => acumulador + produto.preco * produto.estoque,
    0,
);
console.log('Patrimônio total:', patrimonioTotal);
