function agruparPorCategoria(produtos){
    const agrupadosPorCategoria = produtos.reduce((acumulador, produto) => {
        const { categoria, nome } = produto;
    
        if (!acumulador[categoria]) {
            acumulador[categoria] = [];
        }
    
        acumulador[categoria].push(nome);
        return acumulador;
}, {});
    return agrupadosPorCategoria;
}

const produtos = [ 
    { nome: "Laptop", categoria: "Eletrônicos" }, 
    { nome: "Camisa", categoria: "Roupas" }, 
    { nome: "Smartphone", categoria: "Eletrônicos" }, 
    { nome: "Calça", categoria: "Roupas" }, 
    { nome: "Fone de Ouvido", categoria: "Eletrônicos"}, 
];
const agrupadosPorCategoria = agruparPorCategoria(produtos);
console.log(agrupadosPorCategoria);

export default function App() {
    return (
        <div>
            <h1>Agrupar Por Categoria</h1>
        </div>
    )
}