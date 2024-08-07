const avaliacoes = [1,2,3,4,5]
function calcularMediaAvaliacoes(avaliacoes){
    const soma = avaliacoes.reduce((a,b) => a + b, 0);
    const media = soma / (avaliacoes.length + 1);
    return media;
  }

  const resultado = calcularMediaAvaliacoes(avaliacoes);
  console.log(resultado);
  
export default function App() {
    return (
        <div>
            <h1>Média de Avaliações</h1>
        </div>
    )
}