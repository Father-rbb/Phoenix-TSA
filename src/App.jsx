import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import PlanetaryVideo from "./components/PlanetaryVideo/PlanetaryVideo";
import PlanetaryComparison from "./components/PlanetaryComparison/PlanetaryComparison";
import PlanetaryFacts from "./components/PlanetaryFacts/PlanetaryFacts";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PlanetaryVideo />
      <hr />
      <PlanetaryComparison />
      <hr />
      <PlanetaryFacts />
      <hr />
      <ContactForm />
      <hr />
      <Footer />
    </>
  );
}

export default App;
