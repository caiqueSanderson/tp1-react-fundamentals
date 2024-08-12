import Cabecalho from "./components/Cabecalho/Cabecalho"
import Contatos from "./components/Contato/Contatos"
import Projetos from "./components/Projeto/Projetos"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function App() {
    return (
        <div>
            <h1>/ Portfólio /</h1>
            <div className="primeiraParte">
                <Cabecalho/>
                <Contatos/>
            </div>
            <div className="div_projetos">
                <div className="title_projetos">
                    <h2>Meus projetos</h2>
                    <p><FontAwesomeIcon icon={faAngleDown} /></p>
                </div>
                <div className="card_projetos">
                    <Projetos/>
                    <Projetos/>
                    <Projetos/>
                    <Projetos/>
                </div>
            </div>
            <footer>
                <p>Desenvolvido por Caique Sanderson</p>
            </footer>
        </div>
    )
}