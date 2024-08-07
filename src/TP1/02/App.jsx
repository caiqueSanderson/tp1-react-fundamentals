const produtos = [ 
    { nome: "Laptop", disponivel: true }, 
    { nome: "Tablet", disponivel: false }, 
    { nome: "Smartphone", disponivel: true } 
];

function filtrarDisponiveis(objeto){
    const produtosDisponiveis = objeto.filter((item) => item['disponivel'] === true);
    return produtosDisponiveis;
}

const produtosDisponiveis = filtrarDisponiveis(produtos);
console.log(produtosDisponiveis);

export default function App() {
    
    return (
        <div>
            <h2>Produtos Disponiveis</h2>
            <p>Resposta no console</p>
        </div>
    )
}