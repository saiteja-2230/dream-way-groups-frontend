import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="site-footer">

      <div className="container">

        {/* Main Footer */}
        <div className="footer-main">

          <div className="row g-5">

            {/* Brand */}
            <div className="col-lg-4 col-md-6">

              <Link to="/" className="footer-brand">
                <span className="footer-brand-icon">
                  DW
                </span>

                <span className="footer-brand-text">
                  <strong>
                    DREAM <span>WAY</span>
                  </strong>

                  <small>GROUPS</small>
                </span>
              </Link>

              <p className="footer-description">
                Building experiences across travel, real estate
                and interiors. Different businesses, one vision —
                creating better ways to live, move and experience.
              </p>

              <div className="footer-tagline">
                Your journey. Our way.
              </div>

              {/* Social */}
              <div className="footer-social">
                <a href="#" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>

                <a href="#" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>

                <a href="#" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>

                <a href="#" aria-label="WhatsApp">
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>

            </div>


            {/* Explore */}
            <div className="col-lg-2 col-md-6">

              <h6 className="footer-heading">
                EXPLORE
              </h6>

              <ul className="footer-links">

                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/packages">Our Tours</Link>
                </li>

                <li>
                  <Link to="/about">About Us</Link>
                </li>

                <li>
                  <Link to="/contact">Contact</Link>
                </li>

              </ul>

            </div>


            {/* Group Businesses */}
            <div className="col-lg-3 col-md-6">

              <h6 className="footer-heading">
                OUR BUSINESSES
              </h6>

              <ul className="footer-links">
                 <li>
                  <a
                    href="/events"
                  >
                    Events and Clubbing 
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="/investments"
                  >
                    Investments and Savings Plan
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://your-real-estate-website.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Real Estate
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://your-interiors-website.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Interiors
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                  >
                    Travel & Tours
                  </a>
                </li>

              </ul>

            </div>


            {/* Contact */}
            <div className="col-lg-3 col-md-6">

              <h6 className="footer-heading">
                GET IN TOUCH
              </h6>

              <div className="footer-contact">

                <a href="tel:+918143707680">
                  <span className="footer-contact-icon">
                    <i className="bi bi-telephone"></i>
                  </span>

                  <span>
                    <small>Call us</small>
                    +91 81437 07680
                  </span>
                </a>


                <a href="mailto:hello@dreamwaygroups.com">
                  <span className="footer-contact-icon">
                    <i className="bi bi-envelope"></i>
                  </span>

                  <span>
                    <small>Email us</small>
                    hello@dreamwaygroups.com
                  </span>
                </a>


                <div className="footer-contact-item">

                  <span className="footer-contact-icon">
                    <i className="bi bi-geo-alt"></i>
                  </span>

                  <span>
                    <small>Our office</small>
                    3rd Floor, Vidisha Towers, beside HDFC Bank Dwaraka Nagar, Visakhapatnam-530016
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* Bottom Footer */}
        <div className="footer-bottom">

          <div className="footer-copyright">
            © 2026 Dream Way Groups. All rights reserved.
          </div>

          <div className="footer-legal">

            <Link to="/privacy">
              Privacy Policy
            </Link>

            <Link to="/terms">
              Terms & Conditions
            </Link>

          </div>

          <div className="footer-bottom-tagline">
            Explore <span>•</span> Experience <span>•</span> Enjoy
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;