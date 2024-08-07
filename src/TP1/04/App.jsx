function filtrarAcimaPreco(produtos, valor){
    const produtosFiltrados = produtos.filter((item) => item['preco'] > valor);
    return produtosFiltrados;
  }

  const produtos = [ 
  { nome: "Laptop", preco: 1000 }, 
  { nome: "Tablet", preco: 400 }, 
  { nome: "Smartphone", preco: 1500 } 
  ];
  const valor = Number(prompt("Insira o preço minimo que você ver:"))
  const resultado = filtrarAcimaPreco(produtos, valor);
  console.log(resultado);
  const tamanhoArray = resultado.length

export default function App() {
    return (
        <div>
            <h1>Produtos Acima de um valor</h1>
            <h2>Valor minimo = R${valor},00</h2>
            <h2>Número de itens encontrados {tamanhoArray}</h2>
        </div>
    )
}