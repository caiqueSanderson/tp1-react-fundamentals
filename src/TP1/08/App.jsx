function calcularTotalItens(produtos){
    const valorTotal = produtos.reduce((acumulador, objeto) => {
        return acumulador + (objeto.quantidade * objeto.precoUnitario);
    }, 0)
    return valorTotal;
}

const itens = [ 
    { nome: "Laptop", quantidade: 1, precoUnitario: 1000 }, 
    { nome: "Tablet", quantidade: 2, precoUnitario: 400 }, 
    { nome: "Smartphone", quantidade: 1, precoUnitario: 1500 } 
];
// Na questao informa que a saída é 2300, mas o cálculo difere (1000 + (400 * 2) + 1500);
const valorTotal = calcularTotalItens(itens);
console.log(valorTotal);

export default function App() {
    return (
        <div>
            <h1>Calcular Valor Total dos Itens</h1>
        </div>
    )
}