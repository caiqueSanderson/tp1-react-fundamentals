import "./CartaoProduto.css"

export default function CartaoProduto(props){
    return(
        <div className="card_produto">
            <div className="top_card">
                <img src={props.imagem} alt={props.nome} />
                <p className="preco_produto">{props.preco}</p>
            </div>
            <div className="bottom_card">
                <h3>{props.nome}</h3>
                <p className="descricao_produto">{props.descricao}</p>
                <button type="button" className="btn_comprar">Comprar</button>
            </div>
        </div>

    )
}