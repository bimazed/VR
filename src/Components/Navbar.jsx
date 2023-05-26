import React from 'react';
import '../Components/NavBar.css';

function Navbar() {

  // function to handle scrolling to the bottom of the page
  function handleAboutClick(e) {
    e.preventDefault();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">Virtual Dressing Room</div>
      <ul className="navbar-nav">
        <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="#about" className="nav-link" onClick={handleAboutClick}>About</a></li>
        <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
        <li className="nav-item"><a href="/contact" className="nav-link">Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
