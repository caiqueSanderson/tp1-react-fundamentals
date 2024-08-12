import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

import "./Contatos.css"

export default function Contatos(){
    return(
        <section>
            <h2 className="contato">Entre em contato</h2>
            <ul className="links">
                <li>
                    <a href="#"><FontAwesomeIcon icon={faEnvelope} /> E-mail</a>
                </li>
                <li>
                    <a href="#"><FontAwesomeIcon icon={faLinkedin} /> Linkedin</a>
                </li>
                <li>
                    <a href="#"><FontAwesomeIcon icon={faGithub} /> GitHub</a>
                </li>
            </ul>
        </section>

    )
}



