import CartaoProduto from "./CartaoProduto"

const produtos = [ 
    {
   nome: "Tênis de Corrida", 
   descricao: "Tênis confortável para corridas diárias.", 
   preco: "R$ 299,90", 
   imagem: "https://via.placeholder.com/150" 
    },
    { 
   nome: "Camisa de Ciclismo", 
   descricao: "Camisa respirável para ciclistas.", 
   preco: "R$ 129,90", 
   imagem: "https://via.placeholder.com/150" 
   }, 
   { 
   nome: "Boné Esportivo", 
   descricao: "Boné ajustável para proteção solar.", 
   preco: "R$ 59,90", 
   imagem: "https://via.placeholder.com/150" 
   }
   ];

export default function ListaProdutos(){
    return (
        <div className="container">
            {produtos.map((produto) => 
            <CartaoProduto imagem = {produto.imagem} 
            nome = {produto.nome} 
            descricao = {produto.descricao} 
            preco = {produto.preco}/>
        )}
        </div>
    )
}