import { Link, useParams } from "react-router-dom";
import { movies } from "./Home";

function MovieDetails() {
  const { id } = useParams();

  const movie = movies.find((item) => item.id === Number(id));

  if (!movie) {
    return (
      <main className="details-page">
        <h2>Movie Not Found</h2>
        <Link to="/movies" className="primary-btn">
          Back to Movies
        </Link>
      </main>
    );
  }

  return (
    <main className="details-page">
      <div className="details-container">
        <div className="details-poster">
          <img src={movie.image} alt={movie.title} />
        </div>

        <div className="details-content">
          <span className="section-label">MOVIE DETAILS</span>

          <h1>{movie.title}</h1>

          <div className="details-meta">
            <span>{movie.year}</span>
            <span>{movie.genre}</span>
            <span>
              <i className="fa-solid fa-star"></i> {movie.rating}
            </span>
          </div>

          <p className="details-description">
            {movie.description}
          </p>

          <Link to="/movies" className="primary-btn">
            <i className="fa-solid fa-arrow-left"></i> Back to Movies
          </Link>
        </div>
      </div>
    </main>
  );
}

export default MovieDetails;