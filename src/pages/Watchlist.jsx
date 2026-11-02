import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

function Watchlist({ watchlist = [], toggleWatchlist }) {
  return (
    <main className="watchlist-page">
      <div className="page-heading">
        <span className="section-label">YOUR COLLECTION</span>
        <h1>
          My <span>Watchlist.</span>
        </h1>
        <p>Your favorite movies, saved in one place.</p>
      </div>

      {watchlist.length > 0 ? (
        <div className="movies-grid">
          {watchlist.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              watchlist={watchlist}
              toggleWatchlist={toggleWatchlist}
            />
          ))}
        </div>
      ) : (
        <div className="empty-watchlist">
          <i className="fa-regular fa-heart"></i>
          <h2>Your Watchlist Is Empty</h2>
          <p>Save movies you want to watch later.</p>

          <Link to="/movies" className="primary-btn">
            Explore Movies
          </Link>
        </div>
      )}
    </main>
  );
}

export default Watchlist;