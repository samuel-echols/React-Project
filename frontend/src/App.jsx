import './css/App.css'
import MovieCard from "./components/MovieCard"
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"
import Favorites from './pages/Favorites'
import NanBar from './components/NavBar'
import { MovieProvider } from './context/MovieContext'

function App() {

  return (
    <MovieProvider>
      <NanBar />
    <main className='main-content'>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </main>
    </MovieProvider>
  );
}

export default App
