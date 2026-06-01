import "./PlanetaryVideo.css";

function PlanetaryVideo() {
  return (
    <>
      <section id="PlanetaryVideo">
        <section id="planetary-video">
          <div className="planetary-video-container">
            <div className="video-card">
              <video autoPlay muted loop>
                <source src="/videos/featurevideo.mp4" type="video/mp4" />
              </video>

              <button className="play-button">▶</button>
            </div>

            <div className="planetary-video-text">
              <h2>How Planetary Data Helps Us Understand Space</h2>

              <p>
                Planetary science goes beyond images. Comparing
                <strong> mass, diameter, gravity, </strong>
                and
                <strong> density, </strong>
                we gain insight into how planets form, behave, and interact
                within the solar system.
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default PlanetaryVideo;
