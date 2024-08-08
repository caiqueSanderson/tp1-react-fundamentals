function verificaEstoque(produtos){
    const produtosEmEstoque = produtos.filter(produto => produto.quantidadeEmEstoque > 0);
    return produtosEmEstoque;
}

const produtos = [ 
    { nome: "Laptop", quantidadeEmEstoque: 5 }, 
    { nome: "Tablet", quantidadeEmEstoque: 0 }, 
    { nome: "Smartphone", quantidadeEmEstoque: 3 } 
];
const produtosEmEstoque = verificaEstoque(produtos);
console.log(produtosEmEstoque);

export default function App() {
    return (
        <div>
            <h1>Verifica Produtos Em Estoque</h1>
        </div>
    )
}