import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Phoenix</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#planets">Explore</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  )
}

export default Navbar