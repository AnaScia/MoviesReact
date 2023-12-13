// import movies from "../movies.json";
import { Characters } from "./CharactersCard";
import styles from "./MoviesGrid.module.css"
import { useEffect, useState } from "react";

export function MoviesGrid(){

  const [characters, setCharacter] = useState([]);

  const initialUrl="https://rickandmortyapi.com/api/character";

  const fetchCharacters=(url)=>{
      fetch(url)
      .then((resp)=>resp.json())
      .then((data)=>setCharacter(data.results))
    }
    
     useEffect(() => {
      fetchCharacters(initialUrl)
     }, []);

return(
  <ul className={styles.moviesGrid}>
  {characters.map((character)=>(
   <Characters characters={character}></Characters>
  ))}
</ul>
)

}