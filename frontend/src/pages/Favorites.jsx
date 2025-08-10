import "../css/Favorites.css";
import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../context/MovieContext";

function Favorites() {
  const { favorites } = useMovieContext(); // FIX destructure object

  if (favorites.length > 0) { // FIX proper empty check
    return (
      <div>
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="Favorites-empty">
      <h3>Nothing here yet</h3>
      <p>Like to add something here</p>
    </div>
  );
}

export default Favorites;
