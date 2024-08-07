export default function App() {
    const [preco, setPreco] = useState(0);
    const [quantidade, setQuantidade] = useState(0);
    const [precoTotal, setPrecoTotal] = useState(0);
  
    const calcularPrecoTotal = (preco, quantidade) => {
      return preco * quantidade;
    };
  
    const handleCalcular = () => {
      const total = calcularPrecoTotal(preco, quantidade);
      setPrecoTotal(total);
    };
  
    return (
      <div>
        <h1>Calculadora de Preço Total</h1>
        <div>
          <label>Preço do produto:</label>
          <input
            type="number"
            value={preco}
            onChange={(e) => setPreco(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Quantidade comprada:</label>
          <input
            type="number"
            value={quantidade}
            onChange={(e) => setQuantidade(Number(e.target.value))}
          />
        </div>
        <button onClick={handleCalcular}>Calcular Preço Total</button>
        <h2>O preço total é: {precoTotal}</h2>
      </div>
    );
}
