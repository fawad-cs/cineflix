import { useState } from "react";
import { movies } from "./Home";
import MovieCard from "../components/MovieCard";

function Movies({ watchlist = [], toggleWatchlist }) {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const genres = ["All", ...new Set(movies.map((movie) => movie.genre))];

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesGenre = genre === "All" || movie.genre === genre;

    return matchesSearch && matchesGenre;
  });

  return (
    <main className="movies-page">
      <div className="page-heading">
        <span className="section-label">EXPLORE CINEMA</span>
        <h1>
          Discover All <span>Movies.</span>
        </h1>
        <p>Search and explore your favorite movies.</p>
      </div>

      <div className="movie-filters">
        <input
          type="search"
          className="movie-search"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="genre-filter"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          {genres.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="movies-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              watchlist={watchlist}
              toggleWatchlist={toggleWatchlist}
            />
          ))
        ) : (
          <p className="no-results">No movies found. Try another search.</p>
        )}
      </div>
    </main>
  );
}

export default Movies;