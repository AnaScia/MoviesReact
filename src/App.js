import './App.css';
import {MoviesGrid} from './components/MoviesGrid';
import { Routes, Route, Link } from "react-router-dom"
import { MovieDetails } from './pages/MovieDetails';
import { LandingPage } from './pages/LandingPage';


function Movie(){
  return(
    <h1>Movie</h1>
  )
}
function Home(){
  return(
    <h1>Home</h1>
  )
}

function App() {
  return (
    <div className="App">
    <header>
      
      <Link to="/"><h1 className="title">Rick and Morty's Characters</h1></Link>
      <Link to="/movie">Movie</Link>
      
    </header>
    <main>
    <Routes>
        <Route path="/movie" element={ <MovieDetails/> } />
        <Route path="/" element={ <LandingPage/> } />
    </Routes>
    {/* <MoviesGrid></MoviesGrid> */}
    </main>
    </div>
  );
}

export default App;
