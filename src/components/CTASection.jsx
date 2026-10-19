

function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-wrapper">

          {/* Decorative Elements */}
          <div className="cta-circle cta-circle-one"></div>
          <div className="cta-circle cta-circle-two"></div>

          <div className="row align-items-center position-relative">

            {/* Left Content */}
            <div className="col-lg-7">
              <span className="cta-label">
                LET'S PLAN YOUR JOURNEY
              </span>

              <h2 className="cta-title">
                Your next experience
                <br />
                <span>starts with a conversation.</span>
              </h2>

              <p className="cta-description">
                Tell us where you want to go, and we'll help you turn
                your travel plans into an experience worth remembering.
              </p>

              <div className="cta-buttons">
                <a
                  href="tel:+918143707680"
                  className="cta-btn cta-btn-primary"
                >
                  <i className="bi bi-telephone-fill"></i>
                  Call Us
                </a>

                <a
                  href="https://wa.me/917386994956"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn-outline"
                >
                  <i className="bi bi-whatsapp"></i>
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right Contact */}
            <div className="col-lg-5">
              <div className="cta-contact-card">

                <span className="cta-contact-label">
                  TALK TO OUR TRAVEL TEAM
                </span>

                <a
                  href="tel:+919876543210"
                  className="cta-phone"
                >
                  +91 81437 07680 
                </a>

                <p>
                  Available for travel enquiries,
                  package assistance and custom trips.
                </p>

                <div className="cta-contact-line"></div>

                <div className="cta-availability">
                  <span className="cta-status-dot"></span>
                  <span>We're here to help</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;