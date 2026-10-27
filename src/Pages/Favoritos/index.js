
import React, {useState , useEffect} from "react";
import "./favoritos.css" 
import {Link} from "react-router-dom"
import { toast } from "react-toastify";

function Favoritos(){

    const [filmes, setFilmes] = useState([])

    useEffect(()=> {

      const minhaLista = localStorage.getItem("@primeflix")
      setFilmes(JSON.parse(minhaLista) || [])

    }, [])

    function excluirFilme(id){
        
        const listaAtualizada = filmes.filter((item)=>{
         return (item.id !== id)
        })

        setFilmes(listaAtualizada);
        localStorage.setItem("@primeflix" , JSON.stringify(listaAtualizada))
        toast.success("Filme removido com sucesso !")
    }

    return(
        <div className = "meus-filmes">
          <h1> Favoritos</h1>

          {filmes.length === 0 && <span>Você não possui nenhum filme salvo :(</span>}

            <ul> {filmes.map((item , index)=>{
           return(
        <li key = {item.id}><span>{item.title}</span>
        
           <div>
        <Link to ={`/filme/${item.id}`}>Ver detalhes</Link>
           <button onClick = {() => excluirFilme(item.id)}>Excluir</button>
           </div>
   
        </li>   
           )
            })}

            </ul>


        </div>
    )
}

export default Favoritos; 