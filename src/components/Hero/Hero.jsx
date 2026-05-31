<<<<<<< HEAD
import './Hero.css'
import heroImg from '../../assets/Image.png'

function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>Explore Our Solar System Through Data</h1>
          <p>
            Understand the planets not just by name, but by measurable
            facts. From size and mass to gravity and density, this page
            breaks down the solar system in a clear, data-driven way.
          </p>
          <div className="btn-group">
            <a href="#planetary-comparison" className="btn btn-primary">Explore the Data</a>
            <a href="#contact-form" className="btn btn-outline">Contact Us</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Planet" />
        </div>
      </section>
    </>
  )
=======
function Hero() {
  return (
    <>
    <section id="hero">
      <h2>Hero Section</h2>
    </section>

     <hr />
      </>

  
  );
>>>>>>> f241e18966e3a5452c9b61fb3bb8014aed18f6e1
}

export default Hero
