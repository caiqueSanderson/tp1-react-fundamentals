function filtrarPorCategoria(produtos, nome){
    const pesquisa = nome.toLowerCase();
    const produtosFiltrados = produtos.filter(element => 
        element.categoria.toLowerCase() === pesquisa
    );
    return produtosFiltrados;
}

const produtos = [ 
    { nome: "Laptop", categoria: "Eletrônicos" }, 
    { nome: "Camisa", categoria: "Roupas" }, 
    { nome: "Smartphone", categoria: "Eletrônicos" } 
    ];

const resultado = filtrarPorCategoria(produtos, "Eletrônicos");
console.log(resultado);

export default function App() {
    return (
        <div>
            <h1>Filtrar por Categoria</h1>
        </div>
    )
}