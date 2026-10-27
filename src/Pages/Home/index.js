import React , {useState , useEffect} from "react"; 
import api from '../../services/api';
import {Link} from "react-router-dom"
import "./home.css";



function Home(){

const [filmes, setFilmes] = useState([]);
const [loading , setLoading] = useState(true);

useEffect(()=> {
   
    async function loadFilmes(){

        const response = await api.get("movie/now_playing" ,{
            params: {
            api_key: "03b445d87c9e90d98a4c23d528fde608",
            language: "pt-BR",
            page: 1
         }
        })
            
         console.log(response.data.results);
         setFilmes(response.data.results);
         setLoading(false);
    }

    loadFilmes();

} , [])

 if(loading){
    return(
        <div>
            <h2>Carregando filmes...</h2>
        </div>
    )
 }

    return(
        <div className="conteiner">
         <div className = "listafilmes">

          {filmes.map((item)=>{

            return(
                   <article key = {item.id}>
                     <strong>{item.title}</strong>
                     <img src = {`https://image.tmdb.org/t/p/original/${item.poster_path}`}/>
                  
                     <Link to = {`/filme/${item.id}`}>Acessar</Link>
        
                   </article>
              
            ) 
          })}

     

         </div>
        
        
        </div>

    )
}

export default Home;