import "./Cabecalho.css"

export default function Cabecalho(){
    return(
        <div className="header">
            <h1 className="name">Caique Sanderson</h1>
            <p className="description">Estudante de Engenharia de Software, no Instituto Infnet</p>
            <h2 className="description description_titulo">Meus Conhecimentos:</h2>
            <ul className="description description_skills">
                <li>Front-end | JavaScript e React</li>
                <li>Dados | Python e SQL</li>
                <li>Versionamento | Git e Github</li>
            </ul>
        </div>
    )
}