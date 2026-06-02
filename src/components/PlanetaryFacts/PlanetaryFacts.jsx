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
          Data about the planets of our solar system (Planetary facts taken from
          NASA)
        </p>
        <div className="pf-table-wrapper">
          <table className="pf-table">
            <thead>
              <tr>
                <th scope="col" colSpan="2"></th>
                <th scope="col">Name</th>
                <th scope="col">Mass (10 24kg)</th>
                <th scope="col">Diameter (km)</th>
                <th scope="col">Density (kg/m3)</th>
                <th scope="col">Gravity (m/s2)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th rowSpan="4" colSpan="2">
                  Terrestial Planets
                </th>
                <td>Mercury</td>
                <td>0.330</td>
                <td>4,879</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>

              <tr>
                <td>Venus</td>
                <td>4.87</td>
                <td>12,104</td>
                <td>5243</td>
                <td>8.9</td>
              </tr>

              <tr>
                <td>Earth</td>
                <td>5.97</td>
                <td>12,756</td>
                <td>5514</td>
                <td>9.8</td>
              </tr>

              <tr>
                <td>Mars</td>
                <td>0.642</td>
                <td>6,792</td>
                <td>3933</td>
                <td>3.7</td>
              </tr>

              <tr>
                <th rowSpan="4">Jovian Planets</th>
                <th rowSpan="2">Gas Giants</th>
                <td>Jupiter</td>
                <td>0.330</td>
                <td>4878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td>Saturn</td>
                <td>0.330</td>
                <td>4878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <th rowSpan="2">Ice Giants</th>
                <td>Uranus</td>
                <td>0.330</td>
                <td>4878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td>Neptune</td>
                <td>0.330</td>
                <td>4878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <th colSpan="2">Dwarf Planets</th>
                <td>Pluto</td>
                <td>0.330</td>
                <td>4878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <hr />
    </>
  );
}

export default PlanetaryFacts;
