import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="dw-hero">
      <div className="container">
        <div className="row align-items-center g-5">

          <div className="col-lg-6">
            <div className="dw-eyebrow">
              <span></span>
              DISCOVER
              <b>•</b>
              EXPLORE
              <b>•</b>
              EXPERIENCE
              <span></span>
            </div>

            <h1 className="dw-title">
              Your Journey.
              <br />
              <em>Our Way.</em>
            </h1>

            <p className="dw-description">
              Discover unforgettable destinations with carefully designed
              travel experiences made around you.
            </p>

            <div className="dw-actions">
              <Link to="/packages" className="btn dw-btn-primary">
                Explore Packages <span>→</span>
              </Link>

              <Link to="/contact" className="btn dw-btn-secondary">
                Contact Us
              </Link>
            </div>

            <div className="dw-benefits">
              <div>
                <strong>✈</strong>
                <span>Handpicked<br />Destinations</span>
              </div>

              <div>
                <strong>✓</strong>
                <span>Safe &amp; Hassle<br />Free Travel</span>
              </div>

              <div>
                <strong>♧</strong>
                <span>Memorable<br />Experiences</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="dw-visual">
              <div className="dw-blob"></div>

              <img
                src="/images/travel-hero.jpg"
                alt="Beautiful travel destination"
                className="dw-travel-image"
              />

              <div className="dw-info-card">
                <h3>Travel made simple.</h3>
                <p>
                  From weekend escapes to unforgettable holiday experiences.
                </p>

                <div className="dw-stats">
                  <div>
                    <strong>50+</strong>
                    <small>Destinations</small>
                  </div>

                  <div className="dw-stat-divider"></div>

                  <div>
                    <strong>1000+</strong>
                    <small>Happy Travellers</small>
                  </div>
                </div>
              </div>

            
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
