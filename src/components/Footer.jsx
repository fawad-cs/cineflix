
function Footer() {
  return (
    <footer className="site-footer">
      <h2>
        Cine<span>Flix</span>.
      </h2>

      <p>
        Discover movies, explore stories, and build your watchlist.
      </p>

      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/movies">Movies</a>
        <a href="/watchlist">Watchlist</a>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} CineFlix. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
