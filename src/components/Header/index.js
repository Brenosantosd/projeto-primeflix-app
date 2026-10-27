import "./header.css";
import {Link} from "react-router-dom";


function Header(){
    return(
        <header>
        <Link className="logo" to ="/">Prime Flix</Link>
        <div>        
        <Link className= "home" to = "/">Home</Link>
        <Link className="favoritos" to="/favoritos">Meus filmes</Link>
        </div>  
        </header>
    )
}

export default Header; 