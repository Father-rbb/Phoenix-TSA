import './Navbar.css'
<<<<<<< HEAD
import logoImg from '../../assets/navbar-logo.png'
=======
>>>>>>> f241e18966e3a5452c9b61fb3bb8014aed18f6e1

function Navbar() {
  return (
    <>
<<<<<<< HEAD
      {/* Navbar */}
      <header>
        <nav className="navbar">
          <a href="/">
            <img
              src={logoImg}
              alt="Logo"
              className="navbar-logo"
            />
          </a>
        </nav>
      </header>

    </>
=======
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Phoenix</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#planetary-comparison">Explore the Data</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>

     <hr />
      </>

>>>>>>> f241e18966e3a5452c9b61fb3bb8014aed18f6e1
  );
}

export default Navbar