import { Link } from "react-router-dom";

function MovieCard({ movie, watchlist = [], toggleWatchlist}) {
    const isSaved = watchlist.some((item) => item.id === movie.id);

  return (
    <article className='movie-card'>
        <div className='movie-poster'>
        <img src={movie.image} alt={movie.title} loading='lazy' />
        <button 
        className={`watchlist-btn ${isSaved ? "saved" : ""}`}
        onClick={() => toggleWatchlist(movie)}
        aria-label={isSaved ? "Remove from watchlist" : "Add to Watchlist" }
        type='button'
        >
              <i className={`fa-${isSaved ? "solid" : "regular"} fa-heart`}></i>
        </button>
        <span className='movie-rating'>
            <i className="fa-solid fa-star"></i> {movie.rating}
        </span>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <div className='movie-meta'>
                <span>{movie.year}</span>
                <span>{movie.genre}</span>
            </div>
              <Link to={`/movie/${movie.id}`} className="details-btn">
      View Details <i className="fa-solid fa-arrow-right"></i>
    </Link>
        </div>
        

    </article>
  )
}

export default MovieCard
