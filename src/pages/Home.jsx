import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

export const movies = [
  {
    id: 1,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 8.7,
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description: "A team of explorers travels beyond this galaxy to discover whether mankind has a future among the stars.",
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    genre: "Action",
    rating: 8.8,
    image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    description: "A skilled thief enters people's dreams to steal secrets and attempts an almost impossible mission.",
  },
  {
    id: 3,
    title: "The Batman",
    year: 2022,
    genre: "Action",
    rating: 7.8,
    image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    description: "Batman investigates corruption in Gotham City while pursuing a mysterious criminal.",
  },
  {
    id: 4,
    title: "Dune: Part Two",
    year: 2024,
    genre: "Sci-Fi",
    rating: 8.5,
    image: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    description: "Paul Atreides joins the Fremen on a journey of revenge and destiny across Arrakis.",
  },
  {
    id: 5,
    title: "Oppenheimer",
    year: 2023,
    genre: "Drama",
    rating: 8.3,
    image: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
    description: "The story of J. Robert Oppenheimer and his role in developing the atomic bomb.",
  },
  {
    id: 6,
    title: "Spider-Man: No Way Home",
    year: 2021,
    genre: "Adventure",
    rating: 8.2,
    image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    description: "Peter Parker faces unexpected challenges when the multiverse opens up.",
  },
  {
    id: 7,
    title: "Avengers: Endgame",
    year: 2019,
    genre: "Action",
    rating: 8.4,
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    description: "The Avengers unite for one final mission to restore the universe.",
  },
  {
    id: 8,
    title: "Joker",
    year: 2019,
    genre: "Drama",
    rating: 8.2,
    image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    description: "A troubled comedian slowly transforms into Gotham's infamous villain.",
  },
  {
    id: 9,
    title: "Doctor Strange",
    year: 2016,
    genre: "Fantasy",
    rating: 7.5,
    image: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
    description: "A surgeon discovers the mysterious world of magic.",
  },
  {
    id: 10,
    title: "Avatar: The Way of Water",
    year: 2022,
    genre: "Adventure",
    rating: 7.6,
    image: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    description: "Jake Sully and his family explore the oceans of Pandora.",
  },
  {
    id: 11,
    title: "John Wick",
    year: 2014,
    genre: "Action",
    rating: 7.4,
    image: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    description: "A retired assassin is pulled back into a dangerous world.",
  },
  {
    id: 12,
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    rating: 8.7,
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    description: "A hacker discovers the shocking truth about his reality.",
  },
];

function Home({ watchlist = [], toggleWatchlist }) {
  const featuredMovie = movies[0];

  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-label">
            <i className="fa-solid fa-film"></i> YOUR MOVIE DESTINATION
          </span>

          <h1>
            Discover Your Next
            <br />
            <span>Favorite Movie.</span>
          </h1>

          <p>
            Explore incredible stories, discover new movies, and build
            your personal watchlist with CineFlix.
          </p>

          <div className="hero-buttons">
            <Link to="/movies" className="primary-btn">
              <i className="fa-solid fa-compass"></i> Explore Movies
            </Link>

            <Link to={`/movie/${featuredMovie.id}`} className="secondary-btn">
              Featured Movie <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <strong>12+</strong>
              <span>Available Movies</span>
            </div>

            <div>
              <strong>4K</strong>
              <span>Movie Discovery</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>For Movie Lovers</span>
            </div>
          </div>
        </div>

        <div className="hero-poster">
          <img src={featuredMovie.image} alt={featuredMovie.title} />

          <div className="hero-poster-info">
            <span>FEATURED MOVIE</span>
            <h3>{featuredMovie.title}</h3>
            <p>
              <i className="fa-solid fa-star"></i> {featuredMovie.rating}
              {" · "}
              {featuredMovie.year}
            </p>
          </div>
        </div>
      </section>

      <section className="movies-section">
        <div className="section-heading">
          <div>
            <span className="section-label">HANDPICKED FOR YOU</span>
            <h2>
              Trending <span>Movies.</span>
            </h2>
            <p>Stories worth watching, all in one place.</p>
          </div>

          <Link to="/movies" className="view-all-link">
            View All <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>

        <div className="movies-grid">
          {movies.slice(0, 3).map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              watchlist={watchlist}
              toggleWatchlist={toggleWatchlist}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;