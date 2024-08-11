import "./CartaoPerfil.css"

export default function CartaoPerfil(){
    return (
        <div className="card">
            <img className="round" src="./public/img.jpeg"/>
            <h2>Caique Sanderson</h2>
            <h3>Instituto Infnet</h3>
            <ul className="bio">
                <li>Estudante de Engenharia de Software</li>
                <li>Conhecimentos em: React, Javascript, Python, SQL, HTML, CSS</li>
            </ul>
        </div>
    )
};