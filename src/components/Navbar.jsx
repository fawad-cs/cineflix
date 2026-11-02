import  { useState } from 'react'
import {NavLink} from 'react-router-dom'

function Navbar({watchlistCount = 0}) {
    const [menuOpen, setMenuOpen] = useState(false);
    function closeMenu(){
        setMenuOpen(false);
    }
  return (
   <header className='site-header'>
    <nav className='navbar'>
        <NavLink to="/" className="logo" onClick={closeMenu} >Cine<span>Flix</span> <span className='logo-dot'>.</span> </NavLink>
        <button className='menu-toggle'
        type='button'
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label='Toggle navigation'
        aria-expanded={menuOpen}
        >
        <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
            <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
      <NavLink to="/" end onClick={closeMenu}>
        Home
      </NavLink>

      <NavLink to="/movies" onClick={closeMenu}>
        Movies
      </NavLink>

      <NavLink
        to="/watchlist"
        className="watchlist-link"
        onClick={closeMenu}
      >
        <i className="fa-regular fa-heart"></i>
        Watchlist
        <span className="watchlist-count">{watchlistCount}</span>
      </NavLink>
    </div>
    </nav>
   </header>
  )
}

export default Navbar
