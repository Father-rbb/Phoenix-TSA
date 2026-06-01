import "./Navbar.css";
import logoImg from "../../assets/navbar-logo.png";

function Navbar() {
  return (
    <>
      {/* Navbar */}
      <header>
        <nav className="navbar">
          <a href="/">
            <img src={logoImg} alt="Logo" className="navbar-logo" />
          </a>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
