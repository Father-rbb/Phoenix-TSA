import './Navbar.css'
import logoImg from '../../assets/navbar-logo.png'

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <a href="/">
          <img
            src={logoImg}
            alt="Logo"
            className="navbar-logo"
          />
        </a>
        <ul className="navbar-links">
          <li><a href="#planetary-comparison">Explore the Data</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar