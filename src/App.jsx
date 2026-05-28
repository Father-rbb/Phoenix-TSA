import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import PlanetaryComparison from './components/PlanetaryComparison/PlanetaryComparison'
import PlanetaryFacts from './components/PlanetaryFacts/PlanetaryFacts'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PlanetaryComparison />
      <PlanetaryFacts />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App