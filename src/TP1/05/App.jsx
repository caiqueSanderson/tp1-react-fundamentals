function encontrarProdutoPorNome(produtos, nome) {
    const pesquisa = nome.toLowerCase();
    const produtoEncontrado = produtos.find(produto => produto.nome.toLowerCase() === pesquisa);
    return produtoEncontrado;
}

const produtos = [
    { nome: "Laptop", preco: 1000 },
    { nome: "Tablet", preco: 400 },
    { nome: "Smartphone", preco: 1500 }
];

const resultado = encontrarProdutoPorNome(produtos, "Laptop");
console.log(resultado);

export default function App() {
    return (
        <div>
            <h1>Encontrar Produtos Por Nome</h1>
        </div>
    );
}
