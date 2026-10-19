

function Contact() {
  return (
    <main className="contact-page">

      {/* =========================================
          CONTACT HERO
      ========================================= */}

      <section className="contact-hero">

        <div className="container">

          <div className="contact-hero-content">

            <span className="contact-eyebrow">
              CONTACT DREAM WAY GROUPS
            </span>

            <h1>
              Let's plan something
              <br />
              <span>worth remembering.</span>
            </h1>

            <p>
              Tell us where you want to go, what you're looking for,
              and we'll help you shape the journey around you.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          CONTACT CONTENT
      ========================================= */}

      <section className="contact-section">

        <div className="container">

          <div className="row g-5 align-items-start">

            {/* =====================================
                LEFT — CONTACT INFORMATION
            ===================================== */}

            <div className="col-lg-5">

              <div className="contact-info">

                <span className="section-label">
                  GET IN TOUCH
                </span>

                <h2>
                  Your next journey
                  <br />
                  starts here.
                </h2>

                <p className="contact-info-description">
                  Whether you already know where you're going or
                  simply need some inspiration, our team is here
                  to help you plan a travel experience that works
                  for you.
                </p>


                {/* Phone */}

               <div className="contact-info-item">
    <span className="contact-info-icon">
        <i className="bi bi-telephone"></i>
    </span>

    <span>
        <small>CALL US</small>

        <a href="tel:+917386994956">
            +91 73869 94956
        </a>

        <a href="tel:+918143707680">
            +91 81437 07680
        </a>
    </span>
</div>


                {/* Email */}

                <a
                  href="mailto:hello@dreamwaycorp.com"
                  className="contact-info-item"
                >

                  <span className="contact-info-icon">
                    <i className="bi bi-envelope"></i>
                  </span>

                  <span>
                    <small>EMAIL US</small>
                    hello@dreamwaycorp.com
                  </span>

                </a>


                {/* Location */}

                <div className="contact-info-item">

                  <span className="contact-info-icon">
                    <i className="bi bi-geo-alt"></i>
                  </span>

                  <span>
                    <small>OUR OFFICE</small>
                    3rd Floor, Vidisha Towers, beside HDFC Bank Dwaraka Nagar, Visakhapatnam-530016
                  </span>

                </div>


                {/* WhatsApp */}

                <a
                  href="https://wa.me/917386994956"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-whatsapp"
                >

                  <span>
                    <i className="bi bi-whatsapp"></i>
                    Prefer WhatsApp?
                  </span>

                  <i className="bi bi-arrow-up-right"></i>

                </a>


                {/* Availability */}

                <div className="contact-availability">

                  <span className="availability-dot"></span>

                  <span>
                    We're currently accepting travel enquiries
                  </span>

                </div>

              </div>

            </div>


            {/* =====================================
                RIGHT — ENQUIRY FORM
            ===================================== */}

            <div className="col-lg-7">

              <div className="contact-form-card">

                <div className="contact-form-header">

                  <div>

                    <span className="form-number">
                      01
                    </span>

                    <h3>
                      Tell us about your trip.
                    </h3>

                  </div>

                  <span className="form-required">
                    * Required
                  </span>

                </div>


                <form>

                  {/* Name + Phone */}

                  <div className="row g-3">

                    <div className="col-md-6">

                      <div className="contact-field">

                        <label>
                          Your Name <span>*</span>
                        </label>

                        <input
                          type="text"
                          placeholder="Enter your name"
                        />

                      </div>

                    </div>


                    <div className="col-md-6">

                      <div className="contact-field">

                        <label>
                          Phone Number <span>*</span>
                        </label>

                        <input
                          type="tel"
                          placeholder="+91"
                        />

                      </div>

                    </div>

                  </div>


                  {/* Email + Destination */}

                  <div className="row g-3 mt-1">

                    <div className="col-md-6">

                      <div className="contact-field">

                        <label>
                          Email Address
                        </label>

                        <input
                          type="email"
                          placeholder="you@example.com"
                        />

                      </div>

                    </div>


                    <div className="col-md-6">

                      <div className="contact-field">

                        <label>
                          Destination
                        </label>

                        <input
                          type="text"
                          placeholder="Where would you like to go?"
                        />

                      </div>

                    </div>

                  </div>


                  {/* Travel Dates */}

                  <div className="row g-3 mt-1">

                    <div className="col-md-6">

                      <div className="contact-field">

                        <label>
                          Travel Date
                        </label>

                        <input
                          type="date"
                        />

                      </div>

                    </div>


                    <div className="col-md-6">

                      <div className="contact-field">

                        <label>
                          Travellers
                        </label>

                        <select defaultValue="">

                          <option value="" disabled>
                            Select number of travellers
                          </option>

                          <option value="1">
                            1 Traveller
                          </option>

                          <option value="2">
                            2 Travellers
                          </option>

                          <option value="3-5">
                            3–5 Travellers
                          </option>

                          <option value="6-10">
                            6–10 Travellers
                          </option>

                          <option value="10+">
                            10+ Travellers
                          </option>

                        </select>

                      </div>

                    </div>

                  </div>


                  {/* Message */}

                  <div className="contact-field contact-message">

                    <label>
                      Tell Us More
                    </label>

                    <textarea
                      rows="5"
                      placeholder="Tell us about your plans, preferences or anything you'd like us to know..."
                    ></textarea>

                  </div>


                  {/* Submit */}

                  <div className="contact-submit">

                    <button
                      type="submit"
                      className="contact-submit-button"
                    >
                      Send Enquiry

                      <i className="bi bi-arrow-up-right"></i>
                    </button>

                    <span>
                      We'll get back to you as soon as possible.
                    </span>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          BOTTOM BRAND MESSAGE
      ========================================= */}

      <section className="contact-bottom">

        <div className="container">

          <div className="contact-bottom-inner">

            <span>
              DREAM WAY GROUPS
            </span>

            <h2>
              Explore.
              <span> Experience.</span>
              Enjoy.
            </h2>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;