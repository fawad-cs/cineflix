import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Watchlist from "./pages/Watchlist";
import MovieDetails from "./pages/MovieDetails";
import Footer from "./components/Footer";
function App() {
  const [watchlist, setWatchlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cineflix-watchlist")) || [];
    } catch {
      return [];
    }
  });

  function toggleWatchlist(movie) {
    const exists = watchlist.some((item) => item.id === movie.id);

    const updatedWatchlist = exists
      ? watchlist.filter((item) => item.id !== movie.id)
      : [...watchlist, movie];

    setWatchlist(updatedWatchlist);

    localStorage.setItem(
      "cineflix-watchlist",
      JSON.stringify(updatedWatchlist)
    );
  }

  return (
    <>
      <Navbar watchlistCount={watchlist.length} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              watchlist={watchlist}
              toggleWatchlist={toggleWatchlist}
            />
          }
        />

        <Route
          path="/movies"
          element={
            <Movies
              watchlist={watchlist}
              toggleWatchlist={toggleWatchlist}
            />
          }
        />

        <Route
          path="/watchlist"
          element={
            <Watchlist
              watchlist={watchlist}
              toggleWatchlist={toggleWatchlist}
            />
          }
        />

        <Route
          path="/movie/:id"
          element={<MovieDetails />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;