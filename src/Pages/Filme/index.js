import React ,{useState , useEffect} from "react"
import {useParams , useNavigate} from "react-router-dom"
import api from "../../services/api";
import "./filme.css"
import {toast} from "react-toastify"


function Filme(){

  const {id} = useParams();
  const navigate = useNavigate();
  const [filme , setFilme] = useState({})
  const [loading, setLoading] = useState(true)

  // Requisição para pegar o filme pelo ID 
  useEffect(() => {
     async function loadFilme(){
       await api.get(`/movie/${id}` , {
        params:{
           api_key: "03b445d87c9e90d98a4c23d528fde608",
           language: "pt-BR",
           page: 1

        }

       })
       // Caso ele encontre o filme !!
       .then((response)=>{
          console.log(response);
          setFilme(response.data);
          setLoading(false);
       })
       // Caso ele não encontre o filme !!
       .catch(()=>{
           console.log("Filme não encontrado !")
           navigate("/" , {replace: true});
           return; 
       })
     }
       loadFilme();
      
  } , [navigate , id])


   function salvarFilme(){
    
    const minhaLista = localStorage.getItem("@primeflix"); 

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some((filmesSalvos)=> filmesSalvos.id === filme.id)
      
    if(hasFilme){
      toast.warn("ESSE FILME JÁ ESTÁ NA LISTA")
      return;
    } 

      filmesSalvos.push(filme);
      localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
      toast.success("FILME SALVO COM SUCESSO !")
   }

    if(loading){
        return(
            <div className="filme-info">
        
            <h1>Carregando detalhes do filme...</h1>

            </div>
        )
    }

    return(
        <div className="filme-info">
         <h1>{filme.title}</h1>
   <img src = {`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt = {filme.title}/>
   
     <h3>Sinopse</h3>
     <span>{filme.overview}</span>

     <strong>Avaliação: {filme.vote_average} /10</strong>


        <div className="area-buttons">
         <button onClick = {salvarFilme}>Salvar</button>
         <button>
      
          <a target="_blank"  rel = "noreferrer"href = {`https://youtube.com/results?search_query=${filme.title} trailer`}>
             ▶ Trailer

          </a>

         </button>

        </div>


        </div>
    )
}

export default Filme;
