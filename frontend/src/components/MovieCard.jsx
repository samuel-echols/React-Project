
function MovieCard({movie}){
    function onFavoriteClick(){
        alert("clicked")
    }
    return (
        <div classname="movie-vard">
            <div classname="movie-poster" >
                <img src={mpvie.url} alt={movie.title}/>
                <div classname="movie-overlay">
                    <button classname="favorite-btn" onClick={onFavoriteClick}>
                        ♥
                    </button>
                </div>
            </div>
            <div classname="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    );
}

export default MovieCard;