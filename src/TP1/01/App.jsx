const preco = Number(prompt("Insira o preço do produto"));
const quantidade = Number(prompt("Insira a quantidade do produto:"));

function calcularPrecoTotal(preco, quantidade){
  return preco * quantidade;
};

const total = calcularPrecoTotal(preco, quantidade);

export default function App() {
  return (
    <div>
      <h1>Calculadora de Preço Total</h1>
      <h2>Preço Informado = R${preco}</h2>
      <h2>Quantidade Informada = {quantidade}</h2>
      <h2>O preço total é: {total}</h2>
    </div>
  );
}
