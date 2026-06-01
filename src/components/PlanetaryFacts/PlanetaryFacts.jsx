<<<<<<< HEAD
function PlanetaryFacts() {
  return (
    <section id="planetary-facts">
      <h2>Planetary Facts at a glance</h2>

       <p>
          Below is a comparative table of major planets in our solar system. The
          data highlights key physical properties used by astronomers and
          researchers worldwide.
        </p>

        <table>
          <caption>
            Data about the planets of our solar system (Planetary facts taken
            from Nasa)
          </caption>
=======
import "./PlanetaryFacts.css";

function PlanetaryFacts() {
  return (
    <>
    <section id="planetary-facts">
      <h2>Planetary Facts at a Glance</h2>

      <p>
        Below is a comparative table of major planets in our solar system. The
        data highlights key physical properties used by astronomers and
        researchers worldwide.
      </p>

      <p className="pf-table-caption">
        Data about the planets of our solar system (Planetary facts taken from NASA)
      </p>
      <div className="pf-table-wrapper">
      <table className="pf-table">
>>>>>>> f241e18966e3a5452c9b61fb3bb8014aed18f6e1

          <thead>
            <tr>
              <th scope="col" colSpan="2"></th>
              <th scope="col">Name</th>
<<<<<<< HEAD
              <th scope="col">Mass(10 24kg)</th>
              <th scope="col">Diameter(km)</th>
              <th scope="col">Density(kg/m3)</th>
=======
              <th scope="col">Mass (10 24kg)</th>
              <th scope="col">Diameter (km)</th>
              <th scope="col">Density (kg/m3)</th>
>>>>>>> f241e18966e3a5452c9b61fb3bb8014aed18f6e1
              <th scope="col">Gravity (m/s2)</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th rowSpan="4" colSpan="2">Terrestial Planets</th>
              <td>Mercury</td>
              <td>0.330</td>
<<<<<<< HEAD
              <td>4878</td>
=======
              <td>4,879</td>
>>>>>>> f241e18966e3a5452c9b61fb3bb8014aed18f6e1
              <td>5427</td>
              <td>3.7</td>
            </tr>

            <tr>
              <td>Venus</td>
<<<<<<< HEAD
              <td>0.330</td>
              <td>4878</td>
              <td>5427</td>
              <td>3.7</td>
=======
              <td>4.87</td>
              <td>12,104</td>
              <td>5243</td>
              <td>8.9</td>
>>>>>>> f241e18966e3a5452c9b61fb3bb8014aed18f6e1
            </tr>

            <tr>
              <td>Earth</td>
<<<<<<< HEAD
              <td>0.330</td>
              <td>4878</td>
              <td>5427</td>
              <td>3.7</td>
=======
              <td>5.97</td>
              <td>12,756</td>
              <td>5514</td>
              <td>9.8</td>
>>>>>>> f241e18966e3a5452c9b61fb3bb8014aed18f6e1
            </tr>

            <tr>
              <td>Mars</td>
<<<<<<< HEAD
              <td>0.330</td>
              <td>4878</td>
              <td>5427</td>
=======
              <td>0.642</td>
              <td>6,792</td>
              <td>3933</td>
>>>>>>> f241e18966e3a5452c9b61fb3bb8014aed18f6e1
              <td>3.7</td>
            </tr>

            <tr>
              <th rowSpan="4">Jovian Planets</th>
              <th rowSpan="2">Gas Giants</th>
              <td>Jupiter</td>
<<<<<<< HEAD
              <td>0.330</td>
              <td>4878</td>
              <td>5427</td>
              <td>3.7</td>
=======
              <td>1898</td>
              <td>142,984</td>
              <td>1326</td>
              <td>23.1</td>
>>>>>>> f241e18966e3a5452c9b61fb3bb8014aed18f6e1
            </tr>

            <tr>
              <td>Saturn</td>
<<<<<<< HEAD
              <td>0.330</td>
              <td>4878</td>
              <td>5427</td>
              <td>3.7</td>
=======
              <td>568</td>
              <td>120,536</td>
              <td>687</td>
              <td>9.0</td>
>>>>>>> f241e18966e3a5452c9b61fb3bb8014aed18f6e1
            </tr>

            <tr>
              <th rowSpan="2">Ice Giants</th>
              <td>Uranus</td>
<<<<<<< HEAD
              <td>0.330</td>
              <td>4878</td>
              <td>5427</td>
              <td>3.7</td>
=======
              <td>86.8</td>
              <td>51,118</td>
              <td>1271</td>
              <td>8.7</td>
>>>>>>> f241e18966e3a5452c9b61fb3bb8014aed18f6e1
            </tr>

            <tr>
              <td>Neptune</td>
<<<<<<< HEAD
              <td>0.330</td>
              <td>4878</td>
              <td>5427</td>
              <td>3.7</td>
=======
              <td>102</td>
              <td>49,528</td>
              <td>1638</td>
              <td>11.0</td>
>>>>>>> f241e18966e3a5452c9b61fb3bb8014aed18f6e1
            </tr>

            <tr>
              <th colSpan="2">Dwarf Planets</th>
              <td>Pluto</td>
<<<<<<< HEAD
              <td>0.330</td>
              <td>4878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>

          </tbody>

        </table>

      </section>
=======
              <td>0.0146</td>
              <td>2,370</td>
              <td>2095</td>
              <td>0.6</td>
            </tr>
          </tbody>
        </table>
      </div>
    
      </section>
      <hr />
      </>
>>>>>>> f241e18966e3a5452c9b61fb3bb8014aed18f6e1

  
  );
}

<<<<<<< HEAD
export default PlanetaryFacts
=======
export default PlanetaryFacts;
>>>>>>> f241e18966e3a5452c9b61fb3bb8014aed18f6e1
