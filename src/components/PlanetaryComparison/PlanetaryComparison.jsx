import { useState, useEffect } from "react";
import "./PlanetaryComparison.css";

function PlanetaryComparison() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://anurella.github.io/json/planets.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch planets");
        return res.json();
      })
      .then((data) => {
        setPlanets(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
  <>
    <section id="planetary-comparison">
      <div className="pc-header">
        <h2 className="pc-title">Visualizing the Differences Between Planets</h2>
        <p className="pc-subtitle">
          Each planet in our solar system has unique physical characteristics.
          Visual comparisons help highlight how vastly different terrestrial
          planets are from gas giants and ice giants.
        </p>
      </div>

      {loading && (
        <div className="pc-status">
          <div className="pc-spinner"></div>
          <p>Loading planets...</p>
        </div>
      )}

      {error && (
        <div className="pc-status pc-error">
          <p>⚠️ {error}. Please try refreshing the page.</p>
        </div>
      )}

      {!loading && !error && (
        <div className="pc-grid">
          {planets.map((planet) => (
            <figure className="pc-card" key={planet.planet}>
              <div className="pc-img-wrapper">
                <img
                  src={planet.image}
                  alt={`Photo of ${planet.planet}`}
                  className="pc-img"
                  loading="lazy"
                />
              </div>
              <figcaption className="pc-caption">
                <span className="pc-planet-name">{planet.planet}</span>
                <span className="pc-distance">
                  Distance from Sun:{" "}
                  <strong>{planet.distanceFromSun.toLocaleString()} million km</strong>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
    <hr />
  </>
  );
}

export default PlanetaryComparison;
