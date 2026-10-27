import {Link} from "react-router-dom"
import "./erro.css"

function Erro(){
    return(
        <div className="notfound">
      <h1 className = "h1">404</h1>
       <h2>Página não encontrada</h2>

        <Link className="home" to = "/">Home</Link>
        </div>
    )
}

export default Erro; 