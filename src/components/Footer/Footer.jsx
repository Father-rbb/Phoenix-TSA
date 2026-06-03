import "./Footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="footer-about">
          <h3>About</h3>
          <p>
            We are a team of frontend developers built through the TS Academy programme.
            <br />Team members: Abdulsamad, John, Abdul-sobur, Amirat, Ayomide, Patience, Chibueze, Gift,  Mariam, Rehoboth, Uchechi, Victor.
          </p>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <div className="footer-left">
          <p>
            &copy;2026 Design by{" "}
            <a href="https://amakandukwu.com/" target="_blank" rel="noreferrer">
              Amaka
            </a>{" "}
            &amp;{" "}
            <a href="https://www.linkedin.com/in/ifeomaokocha" target="_blank" rel="noreferrer">
              Ifeoma A.
            </a>
          </p>
          <p>
            Built by{" "}
            <a href="https://github.com/Father-rbb/Phoenix-TSA" target="_blank" rel="noreferrer">
              PHOENIX GROUP 16
            </a>
            . All rights reserved
          </p>
        </div>

        <div className="footer-right">
          <a href="https://tsacademyonline.com/" target="_blank" rel="noreferrer">
            TSAcademy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;